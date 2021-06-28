var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pass",
    database: "sakila"
});

con.connect(function (err) {
    console.log("Connected!");

    con.query('DELETE FROM sakila.actor WHERE actor_id = 200;', function (err, result, fields) {
        if (err) throw err;
      });
});
