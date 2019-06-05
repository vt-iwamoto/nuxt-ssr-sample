const express = require('express')
const app = express()

const basicAuth = require('basic-auth-connect')
app.use(basicAuth('backend-user', 'backend-pass'))

app.get('/', function(req, res) {
  res.json({ message: 'Hello, I am your back-end. This text is very important for SEO.' })
})

module.exports = {
  path: '/backend/',
  handler: app
}
