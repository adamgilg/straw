var React = require('react');
var ReactDom = require('react-dom');
var List = require('./List.jsx');
var AddMovie = require('./AddMovie.jsx');

var Main = React.createClass({
  render: function() {
    return (
      <div>
        <List />
        <AddMovie />
      </div>
    )
  }
});

ReactDom.render(<Main />, document.getElementById('app'));