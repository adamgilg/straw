var React = require('react');
var Movie = require('./Movie.jsx');
require('es6-promise').polyfill();
require('isomorphic-fetch');

var List = React.createClass({
  getInitialState: function() {
    return {
      movieData: []
    }
  },

  componentWillMount: function() {
    var that = this;
    fetch('/data/movies')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(movieResponse) {
        that.setState({ movieData: movieResponse });
        console.log(that.state);
      });
  },

  render: function() {
    return (
      <div>
        {this.state.movieData.map(function(movie, index){
          return <Movie key={index} movie={movie}/>;
        })}
      </div>
    )
  }
});

module.exports = List;