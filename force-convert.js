const _ = require('lodash')

const convert = md => {
  const defaultRender = md.renderer.rules.fence

  md.renderer.rules.fence = (tokens, idx, options, env, renderer) => {
    const token = tokens[idx]

    token.content = _.replace(
      token.content,
      /\<const\sname="(\w+)"\s\/>/g,
      (matched, name) => process.env[name] || matched
    )

    return defaultRender(tokens, idx, options, env, renderer)
  }
}

module.exports = function(md) {
  md.use(convert)
}
