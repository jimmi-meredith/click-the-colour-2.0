const express = require('express')

const router = express.Router()

router.get('/test', (req, res) => {
  res.json('ALL IS GOOD')
})

module.exports = router
