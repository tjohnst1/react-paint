import React, { Component } from 'react';
import classNames from 'classnames';
import ToolPanelOptions from './ToolPanelOptions'
import ColorPicker from './ColorPicker'

export default class ToolPanel extends Component {
  render(){
    const tools = this.props.tools.map(
      (tool, i) => {
        const toolClasses = classNames({
          'tool-panel-tool': true,
          'active': (this.props.selectedTool === `${tool}`)
        });
        return <button key={i} className={toolClasses} onClick={() => this.props.setSelectedTool(tool)}>{tool}</button>
      });
    return (
      <div className="tool-panel">
        {tools}
        { this.props.selectedTool === 'paint brush' ? <ToolPanelOptions selectStroke={this.props.selectStroke} toolOptions={this.props.toolOptions}/> : null}
        <ColorPicker setStrokeColor={this.props.setStrokeColor}/>
      </div>
    )
  }
}
