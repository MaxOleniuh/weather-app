module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      const postcssConfig = require('./postcss.config.js')
      const postcssLoader = config.module.rules.find(
        (rule) => rule.loader === 'postcss-loader'
      )
      postcssLoader.options.postcssOptions = {
        ...postcssLoader.options.postcssOptions,
        ...postcssConfig,
      }
    }

    return config
  },
}
