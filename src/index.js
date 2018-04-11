const express = require('express')
const { pkg } = require('./core')
const settings = require('./settings')

const app = express()

app.head('/', (req, res) => {
  console.log('getting version:', pkg.version)
  res.setHeader('x-app-version', pkg.version)
  res.send()
})

app.get('/', (req, res) => {
  console.log('Hello')
  res.send(`Hello~ Welcome to this Node MicroService.<br><br>Now it's ${Date()}`)
})

app.listen(settings.port, settings.host)
console.log(`Running on http://${settings.host}:${settings.port}...`)
