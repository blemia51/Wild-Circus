const  mysql = require('mysql');
const  connection = mysql.createConnection({
  host :  'localhost', // address of the server
  user :  'root', // username
  password :  'Hasselblad3',
  database :  'wildcircus',
});
module.exports = connection;