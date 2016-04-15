var React = require('react');
var ReactDom = require('react-dom');
var List = require('./List.jsx');

var Main = React.createClass({
  render: function() {
    return (
      // <div>React running!</div>
      <List />
    )
  }
});

ReactDom.render(<Main />, document.getElementById('app'));