import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DrawingCanvas from './components/DrawingCanvas';
import ToolPanel from './components/ToolPanel';

class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedTool: "pencil",
      toolOptions: {
        stroke: 1,
        strokeColor: "#000000"
      }
    }
  }
  selectStroke(stroke){
    this.setState({toolOptions: {stroke: stroke}});
    console.log(this.state.toolOptions.stroke);
  }
  render(){
    var tools = ["pencil", "paint brush", "eraser", "rectangle"]
    return (
      <div className='index-container'>
        <h1>React-Paint</h1>
        <div className="drawing-container">
          <ToolPanel tools={tools} selectedTool={this.state.selectedTool} selectStroke={(stroke) => this.selectStroke(stroke)} toolOptions={this.state.toolOptions}/>
          <DrawingCanvas width="800" height="400" toolOptions={this.state.toolOptions}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
