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

// url 은 /user 로 변경하는 편이 좋을 것 같습니다.
// 위에 메소드는 get /user
// 아래 메소드는 post /user
// http://sourceflower.tistory.com/17 참조
router.post('/addUser', function(req,res,next){
// function ( req, res, next ) { 이런 식으로 띠어쓰기는 같이 맞추는 편이 좋습니다.
  const params ={
// const params = {
    name: req.param('name'),
    age: req.param('age'),
    address: req.param('address')
  }
  // 여기도 띄어쓰기
  user.addUser(params,(err,response) =>{
    if(err) console.log(err)
    console.log(response)
  })
  res.redirect('../')
})

module.exports = router
