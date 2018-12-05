const express = require('express')
const router = express.Router()
const user = require('../models/user.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  const name = req.param('name')
  user.getUserWithName(name, (err, user) => {
    if (err) next('failed to get a User with username')
    res.send(201, { user })
  })
})

module.exports = router
