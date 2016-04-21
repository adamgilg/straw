var React = require('react');

var Movie = React.createClass({
  render: function() {
    return (
      <div className="movie-pane">
        <h1>{this.props.movie.title}</h1>
        <div>{this.props.movie.year}</div>
        <div>{this.props.movie.description}</div>
      </div>
    )
  }
})

module.exports = Movie;