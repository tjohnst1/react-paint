import React, { Component } from 'react';
import ReactDOM from 'react-dom';


class App extends Component {
  render(){
    console.log('here');
    return (
      <div>Hello world</div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
