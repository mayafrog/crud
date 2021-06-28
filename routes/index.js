var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

module.exports = router;

var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  // user: "INSERT",
  // password: "INSERT",
  database: "sakila"
});

con.connect(function (err) { // run on connection (server start)
  if (err) throw err;
  console.log("Connected!");
});

// READ
router.get("/get_actors.json", function (req, res, next) {
  con.query("SELECT first_name, last_name FROM actor", function (err, result, fields) {
    res.send(result)
  });

});

// CREATE
router.post("/create.json", function (req, res, next) {
  // we receive the request,
  // and then we query the sql database to insert
  var actor = {
    first_name: req.body.firstname,
    last_name: req.body.lastname
  }

  con.query('INSERT INTO actor SET ?', actor);

  // we res.end() to end the route
  res.end();
});

// READ (SEARCH) USING POST W/ CALLBACK FUNCTION
router.post("/get_filtered_actors.json", function (req, res, next) {
  // we receive the request,
  // and then we query the sql database to search
  search_name = req.body.search_name;

  con.query("SELECT first_name, last_name FROM actor WHERE first_name LIKE ? OR last_name LIKE ?", [search_name, search_name], function (err, result, fields) {
    res.send(result)
  });
});

// UPDATE
router.post("/update.json", function (req, res, next) {
  // we receive the request,
  // and then we query the sql database to update

  var old_firstname = req.body.old_firstname;
  var old_lastname = req.body.old_lastname;
  var new_firstname = req.body.new_firstname;
  var new_lastname = req.body.new_lastname;

  con.query("UPDATE actor SET first_name = ?, last_name = ? WHERE first_name = ? AND last_name = ?", [new_firstname, new_lastname, old_firstname, old_lastname]);

  // we res.end() to end the route
  res.end();
});

// DELETE (ONLY WORKS ON ACTORS DOWN THE LIST)
router.post("/delete.json", function (req, res, next) {
  // we receive the request,
  // and then we query the sql database to update

  var firstname_delete = req.body.firstname_delete;
  var lastname_delete = req.body.lastname_delete;

  con.query("DELETE FROM actor WHERE first_name = ? AND last_name = ?", [firstname_delete, lastname_delete]);

  // we res.end() to end the route
  res.end();
});