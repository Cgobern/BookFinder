//Initializes the express app
var express = require('express');
var app = express();

//includes bodyParser
var bodyParser = require('body-parser');

//brings in the models folder
var models = require('./models');
//this extracts our sequelize connection from the models object
var sequelizeConnection = models.sequelize;

console.log('this is working');