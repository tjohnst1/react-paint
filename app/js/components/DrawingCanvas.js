import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {relativeMousePosition, outsideOfCanvas} from '../utilities/mousePositionUtilities';

export default class DrawingCanvas extends Component {

  draw(canvas, context, toolOptions){

    canvas.addEventListener('mousedown', (e) => {
      context.strokeStyle = toolOptions.strokeColor;
      context.lineWidth = toolOptions.stroke;

      let coords = relativeMousePosition(canvas, e);
      context.beginPath();
      canvas.addEventListener('mousemove', onMouseMove);
      canvas.addEventListener('mouseup', onMouseUp);

      function onMouseMove(evt){
        if (outsideOfCanvas(canvas, evt)){
          onMouseUp()
        } else {
          context.moveTo(coords.x, coords.y);
          coords = relativeMousePosition(canvas, evt);
          context.lineTo(coords.x, coords.y);
          context.stroke();
        }
      }

      function onMouseUp(evt){
        canvas.removeEventListener('mousemove', onMouseMove);
        canvas.removeEventListener('mouseup', onMouseUp);
        context.closePath();
      }
    });
  }

  componentDidMount(){
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const context = canvas.getContext('2d');
    this.draw(canvas, context, this.props.toolOptions);
  }

  componentDidUpdate(){
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const context = canvas.getContext('2d');
    this.draw(canvas, context, this.props.toolOptions);
  }

  render(){
    return (
      <div className="drawing-canvas-container">
        <canvas width={this.props.width} height={this.props.height} id="canvas" ref="canvas" className={`${this.props.selectedTool}`}></canvas>
      </div>
    )
  }
}

DrawingCanvas.PropTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  toolOptions: PropTypes.object.isRequired,
  selectedTool: PropTypes.string.isRequired
}
