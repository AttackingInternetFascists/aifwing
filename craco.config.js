const HtmlWebpackPlugin = require('html-webpack-plugin')

const [ subdomain, path ] = process.env.GITHUB_REPOSITORY.toLowerCase().split('/')

module.exports = () => {
  return {
    webpack: {
      configure: (webpackConfig, { env }) => {
        const htmlWebpackPluginInstance = webpackConfig.plugins.find(p => p instanceof HtmlWebpackPlugin)
        
        if (htmlWebpackPluginInstance) {
          // htmlWebpackPluginInstance.userOptions.minify = false
          htmlWebpackPluginInstance.userOptions.publicPath = `https://${subdomain}.github.io/${path}`
        }

        return webpackConfig
      }
    }
  }
}