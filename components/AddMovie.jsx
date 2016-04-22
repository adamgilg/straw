var React = require('react');
require('isomorphic-fetch');

var AddMovie = React.createClass({
  getInitialState: function() {
    return {
      submitting: false,
      title: null,
      year: null,
      description: null
    }
  },

  handleChange: function(e) {
    var targetValue = e.target.name;
    var value = e.target.value;

    this.setState({ [targetValue]: value });
    console.log(this.state);
  },

  makeRequest: function(e) {
    e.preventDefault();

    var body = {
      title: this.state.title,
      year: this.state.year,
      description: this.state.description
    }

    fetch('data/addmovie', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(function(response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
    });
  },

  render: function() {
    return (
      <div className="col-1-3 add-movie">
        <form style={{display: this.state.submitting ? 'none' : 'block' }}>
          <div>
            <label for="title">Title</label>
            <input type="text" name="title" id="title" onChange={this.handleChange}></input>
          </div>

          <div>
            <label for="year">Year</label>
            <input type="text" name="year" id="year" onChange={this.handleChange}></input>
          </div>

          <div>
            <label for="description">Description</label>
            <input type="text" name="description" id="description" onChange={this.handleChange}></input>
          </div>
          <input type="submit" onClick={this.makeRequest}></input>
        </form>
      </div>
    )
  }
});

module.exports = AddMovie;
