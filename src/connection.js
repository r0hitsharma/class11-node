const mysql = require('mysql');

const { MYSQL_URL } = process.env;

const connection = mysql.createPool(MYSQL_URL);

connection.getConnection(err => {
  if(err){
    console.log(`Error connecting: ${err}`);
  } else {
    console.log('Connection successful');
  }
});

// connection.end();
