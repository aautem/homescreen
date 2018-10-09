const router = app => {
  app.get(
    '/api/test',
    (req, res) => {
      res.end('Hello world!')
    }
  )
}

module
.exports = router
