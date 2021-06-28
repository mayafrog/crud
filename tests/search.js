var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass",
    database: "sakila"
});

con.connect(function (err) {
    console.log("Connected!");

    con.query("SELECT first_name, last_name FROM actor WHERE first_name LIKE 'James' OR last_name LIKE 'James'", function (err, result, fields) {
        console.log(result)
      });
});