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
    fetch('data/' + this.props.movie._id, {
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
      <div className="movie-pane grid">
        <div className="col-2-3">
          <div>{this.props.movie.title}</div>
          <div>{this.props.movie.year}</div>
          <div>{this.props.movie.description}</div>
          <button onClick={this.confirmDeleteMovie}>Delete</button>
        </div>
        <div className="col-1-3 movie-image-wrapper">
          <img className="movie-image" src="https://upload.wikimedia.org/wikipedia/en/1/1d/Conairinternational.jpg"></img>
        </div>
      </div>
    )
  }
})

module.exports = Movie;