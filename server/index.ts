import express from 'express'
import logger from 'morgan'

const app = express()
const port = 3000

app.use(logger('dev'))

// app.use('/', express.static('build')) // add webpack bundle later
app.use('/', express.static('public'))

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
