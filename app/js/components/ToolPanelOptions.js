import React, { Component } from 'react';

export default class ToolPanelOptions extends Component {
  render(){
    let lines = [];
    for (var i = 0; i < 5; i++){
      lines.push(<div className="line" key={i}> </div>);
    }
    return (
      <div className="tool-panel-options">
        {lines}
      </div>
    )
  }
}
