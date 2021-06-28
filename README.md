# crud
Simple full stack web app that incorporates crud functionality (create, read, update, delete) using the Sakila sample database.
Also incorporates escaping query values to avoid SQL injection attacks (functionally same as prepared statements).

Steps to run on Ubuntu:
1. import the sample sakila database onto mysql
2. change mysql login details in routes/index.js
3. install nodejs and dependencies (express, mysql, vue)
4. run with $ npm start
