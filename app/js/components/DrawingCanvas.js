import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import {relativeMousePosition, outsideOfCanvas} from '../utilities/mousePositionUtilities';
import classNames from 'classnames'

export default class DrawingCanvas extends Component {
  constructor(){
    super();
    this.state = {
      isMouseDown: false,
      lastPoint: {},
      currentPoint: {}
    };
  }

  init(canvas, context){

    canvas.addEventListener('mousedown', (e) => {
      e.preventDefault();
      this.mouseDown(canvas, context, e);
    });
    document.addEventListener('mousemove', (e) => {
      e.preventDefault();
      this.mouseMove(canvas, context, e);
    });
    document.addEventListener('mouseup', (e) => {
      e.preventDefault();
      this.mouseUp(context);
    });
  }

  mouseDown(canvas, context, e){
    this.setState({isMouseDown: true});
    const lastPoint = relativeMousePosition(canvas, e);
    this.setState({lastPoint: lastPoint});
    context.beginPath();
  }

  mouseMove(canvas, context, e){
    if (!this.state.isMouseDown) return;
    const currentPoint = relativeMousePosition(canvas, e);
    this.setState({currentPoint: currentPoint});
    requestAnimationFrame(() => {
      this.draw(canvas, context);
    });
  }

  mouseUp(context){
    context.closePath();
    this.setState({isMouseDown: false});
  }

  draw(canvas, context){
    context.lineJoin = context.lineCap = "round";
    context.strokeStyle = this.props.toolOptions.strokeColor;
    context.lineWidth = this.props.toolOptions.stroke;
    context.moveTo(this.state.lastPoint.x, this.state.lastPoint.y);
    context.lineTo(this.state.currentPoint.x, this.state.currentPoint.y);
    context.stroke();
    this.setState({lastPoint: this.state.currentPoint});
  }

  createHighResCanvas(width, height){
    const pixelRatio = window.devicePixelRatio;
    const newWidth = width * pixelRatio;
    const newHeight = height * pixelRatio;
    const canvasStyles = { width: width, height: height, backgroundColor: this.props.backgroundColor }
    const canvasClasses = classNames({[`${this.props.selectedTool}-cursor`]: true});
    return (<canvas width={newWidth} height={newHeight} style={canvasStyles} id='canvas' className={canvasClasses} ref='canvas'></canvas>)
  }

  componentDidMount(){
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const context = canvas.getContext('2d');
    this.init(canvas, context);
  }

  componentDidUpdate(){
    console.log(this.props.toolOptions.stroke);
    const canvas = ReactDOM.findDOMNode(this.refs.canvas);
    const context = canvas.getContext('2d');
  }

  render(){
    const canvas = this.createHighResCanvas(this.props.width, this.props.height);
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
