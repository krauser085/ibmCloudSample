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
    });
  },
  addUser (params, callback){
    cloudant.addUser(params, (err,response) =>{
      if(err) callback(err)
      callback(null,response)
    })
  },
  deleteUser(_id, _rev, callback){
    cloudant.deleteUser(_id, _rev, (err,response) => {
      if(err) callback(err)
      callback(null, response)
    })
  }
}