import webpack from 'webpack'
import { merge } from 'webpack-merge'
import common from './webpack.common'

const config: webpack.Configuration = merge(common, {
  mode: 'production',
  // Faster source maps for debugging in production
  devtool: 'source-map',
})

export default config
