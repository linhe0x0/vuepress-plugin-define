const path = require('path')
const _ = require('lodash')
const envParser = require('./env-parser')
const forceConvert = require('./force-convert')

module.exports = (options, context) => {
  const envList = [context.isProd ? 'production' : 'development']

  if (process.env.VUEPRESS_ENV) {
    envList.push(process.env.VUEPRESS_ENV)
  }

  envParser.parse(envList)

  const pluginConfig = {
    define() {
      return {
        userDefinedEnvConstants: process.env,
      }
    },
    enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js'),
  }

  if (options.forceConvert) {
    _.assign(pluginConfig, {
      extendMarkdown: forceConvert,
    })
  }

  return pluginConfig
}
