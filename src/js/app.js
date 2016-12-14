var React = require('react'),
    ReactDOM = require('react-dom');

var MainComponent = React.createClass({
  getInitialState: function() {
    return {
      header: 'A ReactJS exercise',
      description: 'Given a array of items that contain a title, image, and height, sort these into columns, adding to the column with the shortest height.'
    }
  }, // getInitialState

  render: function() {
    return (
      <div>
        <h2>{this.state.intro}</h2>
        <p>{this.state.description}</p>
      </div>
    )
  } // render
});

ReactDOM.render(<MainComponent />, document.getElementById('main'));
