var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var assert = require('assert');

app.set('port', 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

mongoose.connect('mongodb://localhost:27017/straw');

var movieSchema = {
  title: String,
  year: String,
  description: String
};

var Movie = mongoose.model('Movie', movieSchema);

app.get('/data/movies', function(req, res) {
  Movie.find(function(err, movies) {
    res.send(movies);
  })
});

app.get('/data/:title', function(req, res) {
  var title = req.params.title;

  Movie.findOne({title: title}, function(err, movie) {
    res.send(movie);
  })
});

app.delete('/data/:id', function(req, res) {
  var id = req.params.id;

  Movie.findOne({_id: id}).remove(function(err, movie) {
    console.log('DELETED: ', movie);
    if (err) {
      res.status(500);
    } else {
      res.status(200);
    }

    res.send();
  });
});

app.post('/data/addmovie', function(req, res) {
  console.log('REQ.BODY', req.body);
  var newMovie = new Movie({
    title: req.body.title,
    year: req.body.year,
    description: req.body.description
  });

  newMovie.save(function(err, movie) {
    if (err) {
      res.status(500);
    } else {
      res.status(200);
    }

    res.send();
  });
})

var server = app.listen(app.get('port'), function() {
  var port = server.address().port;
  console.log('Server running on port:', port);
});