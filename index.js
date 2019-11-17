const path = require('path')
const envParser = require('./env-parser')

module.exports = (_options, context) => {
  const envList = [context.isProd ? 'production' : 'development']

  if (process.env.VUEPRESS_ENV) {
    envList.push(process.env.VUEPRESS_ENV)
  }

  envParser.parse(envList)

  return {
    define() {
      return {
        userDefinedEnvConstants: process.env,
      }
    },
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
  }
}
