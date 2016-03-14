import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import relativeMousePosition from '../utilities/relativeMousePosition';

export default class DrawingCanvas extends Component {
  constructor(){
    super();
    this.state = {
      selectedTool: 'Pencil'
    }
  }

  selectTool(toolName){
    this.setState({selectedTool: toolName})
  }

  componentDidMount(){
    // Find the canvas
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const context = canvas.getContext('2d');
    canvas.addEventListener('click', (e) => {
      context.beginPath();
      const mouseCoords = relativeMousePosition(canvas, e);
      context.strokeRect(mouseCoords.x, mouseCoords.y, 250, 250);
    })
  }

  render(){
    return (
      <canvas width={this.props.width} height={this.props.height} id="canvas" ref="canvas"></canvas>
    )
  }

}

DrawingCanvas.PropTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired
}
