import React, { Component } from 'react';
import classNames from 'classnames'

export default class LineWeightSelector extends Component {
  render(){
    let lines = [];
    for (var i = 0; i < 5; i++){
      const stroke = i + 1;
      const lineContainerClasses = classNames({"line-container": true, "selected": this.props.toolOptions.stroke - 1 === i});
      lines.push(
        <div className={lineContainerClasses} key={i} onClick={() => this.props.selectStroke(stroke)}>
          <div className="line"></div>
        </div>
      );
    }
    let circles = [];
    const circleContainerClasses = classNames({"circle-container": true, "selected": this.props.toolOptions.stroke === i});
    for (var i = 0; i < 3; i++){
      const size = i * 10;
      circles.push(
        <div className={circleContainerClasses} key={i} onClick={() => this.props.selectStroke(size)}>
            <div className="circle"></div>
        </div>
      );
    }
    return (
      <div className="line-weight-selector-container">
        {this.props.selectedTool === 'pencil' ? <div>{lines}</div> : <div>{circles}</div>}
      </div>
    )
  }
}
