import express from 'express'
import logger from 'morgan'

// Set as devDependencies since this is only run in the development env
// eslint-disable-next-line import/no-extraneous-dependencies
import webpack from 'webpack'
// eslint-disable-next-line import/no-extraneous-dependencies
import webpackDevMiddleware from 'webpack-dev-middleware'

import config from '../webpack.dev'

const app = express()
const port = 3000

// const api = require('./api')

if (process.env.NODE_ENV === 'development') {
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
}

if (process.env.NODE_ENV === 'development') app.use(logger('dev'))
else if (process.env.NODE_ENV === 'production') app.use(logger('common'))

app.use('/', express.static('public'))
if (process.env.NODE_ENV === 'production') app.use('/', express.static('dist'))

app.listen(port, () => {
  if (process.env.NODE_ENV === 'development') {
    // eslint-disable-next-line no-console
    console.log(`Development server listening at http://localhost:${port}`)
  } else if (process.env.NODE_ENV === 'production') {
    // eslint-disable-next-line no-console
    console.log(`Production server listening at http://localhost:${port}`)
  }
})
