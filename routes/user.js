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

router.post('/addUser', function(req,res,next){
  const params ={
    name: req.param('name'),
    age: req.param('age'),
    address: req.param('address')
  }
  user.addUser(params,(err,response) =>{
    if(err) console.log(err)
    console.log(response)
  })
  res.redirect('../')
})

router.get('/deleteOne', function(req,res,next){
  const _id = req.param('getId')
  const _rev = req.param('getRev')
  user.deleteUser(_id,_rev, (err, response) => {
    if(err) console.log(err)
    console.log(response)
  })
  res.redirect('/')
})

module.exports = router
