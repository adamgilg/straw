var React = require('react');
var Movie = require('./Movie.jsx');

var List = React.createClass({
  getInitialState: function() {
    return {
      movieData: [
          {
            title: 'Con Air',
            year: '1997',
            description: 'Much convict. Very explosion. Such plane. Wow.',
            score: '99%',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Conairinternational.jpg'
          },
          {
            title: 'Con Air',
            year: '1997',
            description: 'Much convict. Very explosion. Such plane. Wow.',
            score: '99%',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Conairinternational.jpg'
          },
          {
            title: 'Con Air',
            year: '1997',
            description: 'Much convict. Very explosion. Such plane. Wow.',
            score: '99%',
            imageUrl: 'https://upload.wikimedia.org/wikipedia/en/1/1d/Conairinternational.jpg'
          },
      ]
    }
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