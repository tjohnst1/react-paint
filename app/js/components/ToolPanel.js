import React, { Component } from 'react';
import classNames from 'classnames';

export default class ToolPanel extends Component {
  render(){
    var tools = this.props.tools.map((tool) => (<button>{tool}</button>));
    return (
      <div>
        {tools}
      </div>
    )
  }
}
