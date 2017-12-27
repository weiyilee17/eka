let db = require('../index.js');

let User = db.Model.extend({
  tableName: 'users'
});

module.exports = db.model('User', User);
