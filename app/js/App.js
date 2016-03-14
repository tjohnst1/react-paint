import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DrawingCanvas from './components/DrawingCanvas';
import ToolPanel from './components/ToolPanel';

class App extends Component {
  render(){
    var tools = ["pencil", "paint brush", "eraser", "rectangle"]
    return (
      <div className='index-container'>
        <h1>React-Paint</h1>
        <ToolPanel tools={tools}/>
        <DrawingCanvas width="800" height="400"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
