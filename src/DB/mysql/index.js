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

let addInfoFromForm2 = (sentObj, callback) => {

  connection.query(`UPDATE users SET firstname = '${sentObj.firstname}', 
  lastname = '${sentObj.lastname}', phone = '${sentObj.phone}' 
  WHERE username = '${sentObj.username}'`, (err, results) => {

    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

let addInfoFromForm3 = (sentObj, callback) => {

  connection.query(`UPDATE users SET address = '${sentObj.address}', 
  city = '${sentObj.city}', state = '${sentObj.state}', zipcode = '${sentObj.zip}' 
  WHERE username = '${sentObj.username}'`, (err, results) => {

    if (err) {
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports = {
  addInfoFromForm1, addInfoFromForm2, addInfoFromForm3
}