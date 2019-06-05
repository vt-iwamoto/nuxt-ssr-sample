import axios from 'axios'

const express = require('express')
const app = express()

app.get('/', function(req, res) {
  const { Nuxt } = require('nuxt')
  const config = require('../nuxt.config.js')
  const nuxt = new Nuxt(config)
  const { port } = nuxt.options.server

  axios
    .get(`http://localhost:${port}/backend`, {
      auth: {
        username: 'backend-user',
        password: 'backend-pass'
      }
    })
    .then(backendRes => {
      res.json({ message: backendRes.data.message })
    })
})

module.exports = {
  path: '/bff/',
  handler: app
}
