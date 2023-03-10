import { readFileSync } from 'fs'
import crypto from 'crypto'
import ejs from 'ejs'
import axios from 'axios'
import { CONSTANTS, renderError } from '../src/utils.js'

const readTemplateFile = () => readFileSync('svg.ejs', 'utf-8')

const aesEncrypt = (secKey, text) => {
  const cipher = crypto.createCipheriv('AES-128-CBC', secKey, '0102030405060708')
  return cipher.update(text, 'utf-8', 'base64') + cipher.final('base64')
}

const aesRsaEncrypt = (text) => ({
  params: aesEncrypt('TA3YiYCfY2dDJQgg', aesEncrypt('0CoJUm6Qyw8W8jud', text)),
  encSecKey:
    '84ca47bca10bad09a6b04c5c927ef077d9b9f1e37098aa3eac6ea70eb59df0aa28b691b7e75e4f1f9831754919ea784c8f74fbfadf2898b0be17849fd656060162857830e241aba44991601f137624094c114ea8d17bce815b0cd4e5b8e2fbaba978c6d1d14dc3d1faf852bdd28818031ccdaaa13a6018e1024e2aae98844210',
})

export default async (req, res) => {
  try {
    const {
      id,
      type = '1',
      number = '5',
      width = '280',
      size = '800',
      column = '1',
      theme = 'dark',
      show_percent = '0',
      title = 'Recently Played',
      cache = CONSTANTS.CACHE_FOUR_HOURS,
    } = req.query

    if (!id) throw new Error('Id is required')

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

    const songs = data[parseInt(type) === 1 ? 'weekData' : 'allData'].slice(0, parseInt(number))

    const buffers = await Promise.all(
      songs.map(({ song }) =>
        axios.get(`${song.al.picUrl}${size !== '800' ? `?param=${size}x${size}` : ''}`, {
          responseType: 'arraybuffer',
        })
      )
    )

    const covers = buffers.map((buffer) => {
      const buffer64 = Buffer.from(buffer.data, 'binary').toString('base64')
      return `data:image/jpg;base64,` + buffer64
    })

    const templateParams = {
      recentPlayedList: songs.map(({ song, score }, i) => {
        return {
          name: song.name,
          artist: song.ar.map(({ name }) => name).join('/'),
          cover: covers[i],
          url: `https://music.163.com/#/song?id=${song.id}`,
          percent: show_percent === '1' ? score / 100 : 0,
        }
      }),
      themeConfig: {
        title,
        width: parseInt(width),
        column: parseInt(column),
        theme,
        color:
          theme === 'light'
            ? { bgColor: '#f6f8fa', fontColor: '#161b22', itemBgColor: '#000000' }
            : { bgColor: '#212121', fontColor: '#f4f4f4', itemBgColor: '#ffffff' },
      },
    }
    res.setHeader(
      'Cache-Control',
      `public, max-age=${Math.max(
        CONSTANTS.CACHE_FOUR_HOURS,
        Math.min(parseInt(cache), CONSTANTS.CACHE_ONE_DAY)
      )}`
    )
    res.setHeader('content-type', 'image/svg+xml')
    res.statusCode = 200
    res.send(ejs.render(readTemplateFile(), templateParams))
  } catch (err) {
    res.setHeader('Cache-Control', `no-cache, no-store, must-revalidate`)
    return res.send(renderError(err.message, err.secondaryMessage))
  }
}
