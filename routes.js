var express = require('express'),
	router = express.Router(),
	favicon = require('serve-favicon'),
	bodyparse = require('body-parser'),
	morgan = require('morgan'),
	bodyparse = require('body-parser'),
	requesticles = require('./spotify/model/requesticles');
	prettyjson = require('prettyjson');

var search = null,
	seachData = null;
// for spotify routes
router.get('/spotify',function(req,res) { 
  res.render('pages/index');
 });

router.post('/spotify/artists',function(req,res) { 
  search = req.body.artistName;
  requesticles.initialSearch(search, res);
 });

router.get('/spotify/albums/:name/:id',function(req,res) {
  requesticles.albumSearch(req, res);
 });

router.get('/spotify/albums/:artist/:albums/:id',function(req,res) { 
  requesticles.albumsTracksSearch(req, res);
 });

// for pixel art routes
router.get('/pixelart',function(req,res) {
	res.sendFile( __dirname + '/pixelart/views/index.html');
 });

router.get('assets/pixelart/app.js', function(req, res) {
		res.sendFile(__dirname + '/pixelart/app.js');
});

// for mole.js
router.get('/mole',function(req,res) { 
  res.sendFile(__dirname + '/mole/index.html');
 });

router.get('/mole/whack-a-mole.html',function(req,res) { 
  res.sendFile(__dirname + '/mole/whack-a-mole.html');
 });

router.get('/project/:file',function(req,res) { 
  var file = req.params.file;
  res.sendFile(__dirname + '/project/views/' + file);
 });


module.exports = router;