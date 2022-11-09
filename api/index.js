import { readFileSync } from 'fs'
import { resolve } from 'path'
import crypto from 'crypto'
import ejs from 'ejs'
import axios from 'axios'

const readTemplateFile = () => readFileSync(resolve('svg.ejs'), 'utf-8')

const aesEncrypt = (secKey, text) => {
  const cipher = crypto.createCipheriv('AES-128-CBC', secKey, '0102030405060708')
  return cipher.update(text, 'utf-8', 'base64') + cipher.final('base64')
}

const aesRsaEncrypt = (text) => ({
  params: aesEncrypt('TA3YiYCfY2dDJQgg', aesEncrypt('0CoJUm6Qyw8W8jud', text)),
  encSecKey:
    '84ca47bca10bad09a6b04c5c927ef077d9b9f1e37098aa3eac6ea70eb59df0aa28b691b7e75e4f1f9831754919ea784c8f74fbfadf2898b0be17849fd656060162857830e241aba44991601f137624094c114ea8d17bce815b0cd4e5b8e2fbaba978c6d1d14dc3d1faf852bdd28818031ccdaaa13a6018e1024e2aae98844210',
})

export default async (request, response) => {
  const { id, type = '1', number = 5, title = 'Recently Played', size = '800' } = request.query

  const imageToBase64 = (url) =>
    axios
      .get(`${url}${size !== '800' ? `?param=${size}x${size}` : ''}`, {
        responseType: 'arraybuffer',
      })
      .then((response) => {
        const buffer64 = Buffer.from(response.data, 'binary').toString('base64')
        return `data:image/jpg;base64,` + buffer64
      })

  const { data } = await axios.post(
    'https://music.163.com/weapi/v1/play/record?csrf_token=',
    aesRsaEncrypt(
      JSON.stringify({
        uid: id,
        type,
      })
    ),
    {
      headers: {
        Accept: '*/*',
        'Accept-Encoding': 'gzip,deflate,sdch',
        'Accept-Language': 'zh-CN,en-US;q=0.7,en;q=0.3',
        Connection: 'keep-alive',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Host: 'music.163.com',
        Referer: 'https://music.163.com/',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36',
        Cookie:
          'os=pc; osver=Microsoft-Windows-10-Professional-build-10586-64bit; appver=2.0.3.131777; ',
      },
    }
  )

  const songs = data[Number(type) === 1 ? 'weekData' : 'allData'].slice(0, Number(number))
  const getAllImages = (recentlyPlayedSongs) =>
    Promise.all(recentlyPlayedSongs.map(({ song }) => imageToBase64(song.al.picUrl)))

  const covers = await getAllImages(songs)

  const templateParams = {
    recentPlayed: songs.map(({ song, score }, i) => {
      return {
        name: song.name,
        artist: song.ar.map(({ name }) => name).join('/'),
        cover: covers[i],
        url: `https://music.163.com/#/song?id=${song.id}`,
        percent: score / 100
      }
    }),
    theme: { title },
  }
  response.setHeader('content-type', 'image/svg+xml')
  response.statusCode = 200
  response.send(ejs.render(readTemplateFile(), templateParams))
}
