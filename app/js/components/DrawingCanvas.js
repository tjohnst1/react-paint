import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {relativeMousePosition, outsideOfCanvas} from '../utilities/mousePositionUtilities';
import classNames from 'classnames'

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
        const pixelRatio = window.devicePixelRatio;
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

  createHighResCanvas(width, height){
    const pixelRatio = window.devicePixelRatio;
    const newWidth = width * pixelRatio;
    const newHeight = height * pixelRatio;
    const canvasStyles = { width: width, height: height, backgroundColor: this.props.backgroundColor }
    const canvasClasses = classNames({[`${this.props.selectedTool}`]: true});
    return (<canvas width={newWidth} height={newHeight} style={canvasStyles} id='canvas' className={canvasClasses} ref='canvas'></canvas>)
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
    const canvas = this.createHighResCanvas(this.props.width, this.props.height)
    return (
      <div className='drawing-canvas-container'>
        {canvas}
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
