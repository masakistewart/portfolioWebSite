var express = require('express'),
	app = express(),
	favicon = require('serve-favicon'),
	request = require('request');
	bodyparse = require('body-parser'),
	morgan = require('morgan'),
	bodyparse = require('body-parser'),
	prettyjson = require('prettyjson'),
	routes = require('./routes.js');

app.use(express.static('assets'));
app.use(bodyparse.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/spotify/views');
app.use('/', routes).listen(8080);