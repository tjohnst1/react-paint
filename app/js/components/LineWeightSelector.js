import React, { Component } from 'react';
import classNames from 'classnames'

export default class LineWeightSelector extends Component {
  render(){
    let lines = [];
    for (var i = 0; i < 5; i++){
      let stroke = i + 1;
      let lineContainerClasses = classNames({"line-container": true, "selected": this.props.toolOptions.stroke - 1 === i})
      lines.push(
        <div className={lineContainerClasses} key={i} onClick={() => this.props.selectStroke(stroke)}>
          <div className="line"></div>
        </div>
      );
    }
    return (
      <div className="line-weight-selector-container">
        {this.props.selectedTool === 'brush' ? <div>{lines}</div> : null}
      </div>
    )
  }
}
