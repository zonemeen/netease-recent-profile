import { PythonShell } from 'python-shell'
import { readFileSync } from 'fs'
import { resolve } from 'path'
import ejs from 'ejs'
import fetch from 'node-fetch'

const imageToBase64 = (url) =>
  fetch(url)
    .then((r) => r.buffer())
    .then((buf) => `data:image/jpg;base64,` + buf.toString('base64'))

const readTemplateFile = () => readFileSync(resolve('svg.ejs'), 'utf-8')

export default async (request, response) => {
  const { id = '126764012', type = '1', number = 5, title = 'Recently Played' } = request.query
  PythonShell.run(resolve('163music.py'), { args: [id, type] }, async (err, res) => {
    if (err) throw err
    const songs = JSON.parse(res).slice(0, Number(number))
    const getAllImages = (recentlyPlayedSongs) =>
      Promise.all(recentlyPlayedSongs.map(({ song }) => imageToBase64(song.al.picUrl)))

    const covers = await getAllImages(songs)

    const templateParams = {
      recentPlayed: songs.map(({ song }, i) => {
        return {
          name: song.name,
          artist: song.ar.map(({ name }) => name).join('/'),
          cover: covers[i],
          url: `https://music.163.com/#/song?id=${song.id}`,
          title,
        }
      }),
    }
    response.setHeader('content-type', 'image/svg+xml')
    response.statusCode = 200
    response.send(ejs.render(readTemplateFile(), templateParams))
  })
}
