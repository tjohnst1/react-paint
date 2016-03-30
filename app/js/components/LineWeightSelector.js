import React, { Component } from 'react';
import classNames from 'classnames'

export default class LineWeightSelector extends Component {
  render(){
    let lines = [];
    for (var i = 0; i < 5; i++){
      let stroke = 0;
      if (i === 0){
        stroke = 1;
      } else {
        stroke = i * 5;
      }
      const lineContainerClasses = classNames({"line-container": true, "selected": this.props.toolOptions.stroke === stroke});
      lines.push(
        <div className={lineContainerClasses} key={i} onClick={() => this.props.selectStroke(stroke)}>
          <div className="line"></div>
        </div>
      );
    }
    let circles = [];
    const sizeConstant = 12.5;
    for (var i = 0; i < 5; i++){
      const circleSize = i * sizeConstant + 1;
      const circleContainerClasses = classNames({"circle-container": true, "selected": (this.props.toolOptions.stroke === circleSize)});
      circles.push(
        <div className={circleContainerClasses} key={i} onClick={() => this.props.selectStroke(circleSize)}>
            <div className="circle"></div>
        </div>
      );
    }
    return (
      <div className="line-weight-selector-container">
        {this.props.selectedTool === 'pencil' ? <div>{lines}</div> : <div>{circles}</div>}
        <input type='range' min='1' max='150' step='1' value={this.props.toolOptions.stroke} onChange={(event) => this.props.selectStroke(Number(event.target.value))} />
        <p>Current Size: { this.props.toolOptions.stroke }</p>
      </div>
    )
  }
}
