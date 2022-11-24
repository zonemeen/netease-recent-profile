import express from 'express'
import process from 'node:process'
import indexController from './api/index.js'

const app = express()

app.use('/', indexController)

const port = Number(process.env.PORT) || 3000

app.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})
