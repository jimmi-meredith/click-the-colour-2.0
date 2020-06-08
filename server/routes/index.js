const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.json('ALL IS GOOD')
})

module.exports = router
