import React, { Component } from 'react';

export default class DrawingCanvas extends Component {

  render(){
    return (
      <canvas width={this.props.width} height={this.props.height} id="canvas"></canvas>
    )
  }

}
