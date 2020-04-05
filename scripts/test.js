'use strict'

process.env.BABEL_ENV = 'test'
process.env.NODE_ENV = 'test'
process.env.PUBLIC_URL = ''

process.on('unhandledRejection', err => {
  throw err
})

require('../config/env')

const jest = require('jest')
let argv = process.argv.slice(2)

if (
  !process.env.CI &&
  argv.indexOf('--watchAll') === -1 &&
  argv.indexOf('--watchAll=false') === -1
) {
  argv.push('--watchAll')
}

jest.run(argv)
