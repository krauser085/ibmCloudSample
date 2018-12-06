const env = require('../env/dev.js').cloudant
const Cloudant = require('@cloudant/cloudant')
const cloudant = new Cloudant(env)

var db = cloudant.use('user')
module.exports = {
  getDocs(params, callback) {
    db.find(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data.docs)
    });
  },
  addUser(params,callback){
    db.insert(params, (err, response)=> {
      if(err) return callback(err)
      callback(null, response)
    })
  }
}