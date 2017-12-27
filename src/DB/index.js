let knex = require('knex')(require('../../knexfile.js'));

let db = require('bookshelf')(knex);

db.plugin('registry');

module.exports = db;

