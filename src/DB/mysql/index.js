let mysql = require('mysql');
let mysqlConfig = require('./config.js');

let connection = mysql.createConnection(mysqlConfig);

let addInfoFromForm1 = (sentObj, callback) => {

  connection.query(`INSERT INTO users (username, password, email) 
    VALUES ('${sentObj.username}', '${sentObj.password}', '${sentObj.email}')`, (err, results) => {

    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};



module.exports = {
  addInfoFromForm1
}