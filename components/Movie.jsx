var React = require('react');
require('isomorphic-fetch');

var Movie = React.createClass({
  confirmDeleteMovie: function() {
    var confirmDelete = confirm('clicked');
    if (confirmDelete) {
      this.deleteMovie();
    }
  },

  deleteMovie: function() {
    fetch('data/' + this.props.movie.title, {
      method: 'DELETE'
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }

      console.log('Successful response', response);
    })
  },

  render: function() {
    return (
      <div className="movie-pane">
        <h1>{this.props.movie.title}</h1>
        <div>{this.props.movie.year}</div>
        <div>{this.props.movie.description}</div>
        <div onClick={this.confirmDeleteMovie}>Delete</div>
      </div>
    )
  }
})

module.exports = Movie;