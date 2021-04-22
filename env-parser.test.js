const test = require('ava')

const envParser = require('./env-parser')

test('development.local', t => {
  const conf = envParser.parse(__dirname, ['development'])

  t.is(conf.aha, '.env.development.local')
})

test('production.local', t => {
  const conf = envParser.parse(__dirname, ['production'])

  t.is(conf.aha, '.env.production.local')
})

test('.env', t => {
  const conf = envParser.parse(__dirname, [])

  t.is(conf.bhb, 'value from .env')
})

test('.env with development', t => {
  const conf = envParser.parse(__dirname, ['production'])

  t.is(conf.bhb, 'value from .env')
})

test('.env with production', t => {
  const conf = envParser.parse(__dirname, ['production'])

  t.is(conf.bhb, 'value from .env')
})
