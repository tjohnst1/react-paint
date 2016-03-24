import React from 'react'
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ToolPanelOptions from './ToolPanelOptions';

describe('tool panel component', () => {

  const toolOptions = {
    stroke: 2,
    strokeColor: "#000000"
  }

  const renderer = TestUtils.createRenderer();
  renderer.render(<ToolPanelOptions toolOptions={toolOptions}/>);
  const toolPanelOptions = renderer.getRenderOutput();

  it('should mark the selected stroke weight as selected', () => {
    const selected = toolPanelOptions.props.children[1].props.className.includes('selected');
    expect(selected).toEqual(true);
  });
  it('should allow a user to change the stroke weight', () => {
    
  })

});
