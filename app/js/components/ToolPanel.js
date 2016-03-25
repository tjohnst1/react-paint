import React, { Component } from 'react';
import classNames from 'classnames';
import ToolPanelOptions from './ToolPanelOptions'

export default class ToolPanel extends Component {
  render(){
    var tools = this.props.tools.map(
      (tool, i) => {
        const toolClasses = classNames({
          'tool-panel-tool': true,
          'active': (this.props.selectedTool === `${tool}`),
        });
        return <button key={i} className={toolClasses} onClick={() => this.props.setSelectedTool(tool)}>{tool}</button>
      });
    return (
      <div className="tool-panel">
        {tools}
        <ToolPanelOptions selectStroke={this.props.selectStroke} toolOptions={this.props.toolOptions}/>
      </div>
    )
  }
}
