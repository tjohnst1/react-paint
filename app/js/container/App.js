import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import DrawingCanvas from '../components/DrawingCanvas';
import ToolPanel from '../components/ToolPanel';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      selectedTool: "pencil",
      toolOptions: {
        stroke: 1,
        strokeColor: "#000000"
      },
      backgroundColor: "#FFFFFF"
    }
  }

  selectStroke(stroke){
    this.setState({toolOptions: {stroke: stroke}});
  }

  setSelectedTool(tool){
    switch (tool) {
      case 'eraser':
        this.setState({ selectedTool: tool, toolOptions: {strokeColor: this.state.backgroundColor, stroke: 30} });
        break;
      case 'brush':
        this.setState({ selectedTool: tool, toolOptions: {strokeColor: "#000000", stroke: 30} });
        break;
      default:
        this.setState({ selectedTool: tool, toolOptions: {strokeColor: "#000000", stroke: 1} });
    }
  }

  setStrokeColor(color){
    this.setState({toolOptions: {strokeColor: color}});
  }

  render(){
    var tools = ["pencil", "brush", "eraser"]
    return (
      <div className='index-container'>
        <h1 className='index-title'>React-Paint</h1>
        <div className="drawing-container">
          <ToolPanel tools={tools} selectedTool={this.state.selectedTool} selectStroke={(stroke) => this.selectStroke(stroke)}
            toolOptions={this.state.toolOptions} setSelectedTool={(tool) => this.setSelectedTool(tool)} setStrokeColor={(color) => this.setStrokeColor(color)}/>
          <DrawingCanvas width="800" height="400" backgroundColor={this.state.backgroundColor} selectedTool={this.state.selectedTool} toolOptions={this.state.toolOptions}/>
        </div>
      </div>
    )
  }
}
