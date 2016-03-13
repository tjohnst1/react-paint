import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DrawingCanvas from './components/DrawingCanvas';

class App extends Component {
  render(){
    return (
      <div className='index-container'>
        <h1>React-Paint</h1>
        <DrawingCanvas width="800" height="400"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
