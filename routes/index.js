var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// 이 addPage method 도 user.js 로 옮기는게 좋을 듯(user에 관련된 메소드기 때문에)
// url은 /user/new 가 괜찮지 않을까요?
router.get('/addPage', function(req,res){
  res.render('../views/users/addUser.ejs')
})
module.exports = router;
