import React, { Component } from 'react';
import classNames from 'classnames';
import LineWeightSelector from './LineWeightSelector'
import ColorPicker from './ColorPicker'

export default class ToolPanel extends Component {
  render(){
    const tools = this.props.tools.map(
      (tool, i) => {
        const toolClasses = classNames({
          'tool-panel-btn': true,
          'active': (this.props.selectedTool === `${tool}`)
        });
        const iconStyles = {
          backgroundImage: `url('/images/icon-${tool}.svg')`
        }
        return (<button key={i} className={toolClasses} onClick={() => this.props.setSelectedTool(tool)} aria-label={tool}>
                 <span style={iconStyles} className="tool-panel-tool-icon" aria-hidden="true"></span>
               </button>)
      });
    return (
      <div className="tool-panel">
        {tools}
        { this.props.selectedTool === 'brush' ? <LineWeightSelector selectStroke={this.props.selectStroke} toolOptions={this.props.toolOptions}/> : null}
        <ColorPicker setStrokeColor={this.props.setStrokeColor} toolOptions={this.props.toolOptions}/>
      </div>
    )
  }
}
