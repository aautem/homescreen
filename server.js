const bodyParser = require('body-parser')
const express = require('express')
const router = require('./router')

const app = express()

app.use(
  bodyParser
  .json()
)

router(
  app
)

app.listen(
  3001,
  () => {
    console.log(
      'HomeScreen API running.'
    )
  }
)
