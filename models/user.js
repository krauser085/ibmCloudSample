const cloudant = require('../modules/cloudant.js')

module.exports = {
  getUserWithName (name, callback) {
    const params = {
      selector: {
        name: name,
        _id: { $gt: "0" }
      }
    }
    cloudant.getDocs(params, (err, docs) => {
      if (err) callback(err)
      callback(null, docs[0])
    })
  }
}