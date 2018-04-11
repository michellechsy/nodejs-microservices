const yn = require('yn')

module.exports = {
  env: process.env.NODE_ENV || 'develop',
  port: process.env.PORT || 5000,
  host: process.env.HOST || 'localhost',
  debug: yn(process.env.DEBUG, { default: true })
}
