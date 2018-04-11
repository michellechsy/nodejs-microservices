const { resolve } = require('path')

const pkg = require(resolve(process.cwd(), 'package.json'))

module.exports = {
  pkg
}
