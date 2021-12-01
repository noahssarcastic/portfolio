import * as path from 'path'

// Set as devDependencies since these are only used on build
// eslint-disable-next-line import/no-extraneous-dependencies
import { Configuration } from 'webpack'
// eslint-disable-next-line import/no-extraneous-dependencies
import HtmlWebpackPlugin from 'html-webpack-plugin'

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/assets/index.html',
    } as HtmlWebpackPlugin.Options),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
  },
}

export default config
