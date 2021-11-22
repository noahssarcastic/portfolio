import webpack from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common'

// // In case you run into typescript errors when configuring `devServer`
// import 'webpack-dev-server'

const config: webpack.Configuration = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    // Used by webpack-dev-middleware
    publicPath: '/',
  },
})

export default config
