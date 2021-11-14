import express from 'express'
import logger from 'morgan'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import config from '../webpack.config'

const app = express()
const port = 3000
const compiler = webpack(config)

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
if (config && config.output && typeof config.output.publicPath === 'string') {
  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: config.output.publicPath,
    })
  )
} else {
  throw new Error('Property publicPath not set in webpack config.')
}

app.use(logger('dev'))

app.use('/', express.static('public'))

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${port}`)
})
