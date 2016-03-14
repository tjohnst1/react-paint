import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DrawingCanvas from './components/DrawingCanvas';
import ToolPanel from './components/ToolPanel';

class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedTool: "pencil"
    }
  }
  render(){
    var tools = ["pencil", "paint brush", "eraser", "rectangle"]
    return (
      <div className='index-container'>
        <h1>React-Paint</h1>
        <ToolPanel tools={tools} selectedTool={this.state.selectedTool}/>
        <DrawingCanvas width="800" height="400"/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
