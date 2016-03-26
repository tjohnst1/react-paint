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
      backgroundColor: "#EEEEEE"
    }
  }
  selectStroke(stroke){
    this.setState({toolOptions: {stroke: stroke}});
  }
  setSelectedTool(tool){
    this.setState({selectedTool: tool});
    if (tool === 'eraser'){
      this.setState({toolOptions: {strokeColor: this.state.backgroundColor}})
    } else {
      if (this.state.toolOptions.strokeColor === this.state.backgroundColor){
        this.setState({toolOptions: {strokeColor: "#000000"}})
      }
    }
  }
  setStrokeColor(color){
    this.setState({toolOptions: {strokeColor: color}});
  }
  render(){
    var tools = ["pencil", "paint brush", "eraser", "rectangle"]
    return (
      <div className='index-container'>
        <h1>React-Paint</h1>
        <div className="drawing-container">
          <ToolPanel tools={tools} selectedTool={this.state.selectedTool} selectStroke={(stroke) => this.selectStroke(stroke)}
           toolOptions={this.state.toolOptions} setSelectedTool={(tool) => this.setSelectedTool(tool)} setStrokeColor={(color) => this.setStrokeColor(color)}/>
         <DrawingCanvas width="800" height="400" backgroundColor={this.state.backgroundColor} selectedTool={this.state.selectedTool} toolOptions={this.state.toolOptions}/>
        </div>
      </div>
    )
  }
}
