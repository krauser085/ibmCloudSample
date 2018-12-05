const env = require('../env/dev.js').cloudant
const Cloudant = require('@cloudant/cloudant')
const cloudant = new Cloudant(env)

module.exports = {
  getDocs(params, callback) {
    let db = cloudant.use('user')
    db.find(params, (err, data) => {
      if (err) return callback(err)
      callback(null, data.docs)
    })
  }
}