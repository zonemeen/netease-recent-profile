import express from 'express'
import http from 'http'
import process from 'node:process'
import indexController from './api/index.js'

const app = express()

app.use('/', indexController)

const server = http.createServer(app)

server.listen(process.env.PORT || 3000)
