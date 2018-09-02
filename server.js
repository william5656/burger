var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env || 8080;

var app = express();

app.user(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

app.use(bodyParser.json());

var exphbs = require("express-handles");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// var routes = require("./controllers/");

app.use(routes);