import React from 'react'
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import ToolPanel from '../app/js/components/ToolPanel';
import App from '../app/js/container/App';

describe('tool panel component', () => {

  const app = TestUtils.renderIntoDocument(<App />);
  const toolPanel = TestUtils.findRenderedComponentWithType(app, ToolPanel);

  it('should have tools', () => {
    const tools = ['pencil', 'paint brush', 'eraser', 'rectangle'];
    expect(toolPanel.props.tools).toEqual(tools);
  });

  it('should display the selected tool as active', () => {
    const currentlySelectedTool = TestUtils.findRenderedDOMComponentWithClass(toolPanel, 'tool-panel-tool active');
    const secondTool = TestUtils.scryRenderedDOMComponentsWithClass(toolPanel, 'tool-panel-tool')[1];
    TestUtils.Simulate.click(secondTool);
    expect(currentlySelectedTool.className).toEqual('tool-panel-tool');
    expect(secondTool.className).toEqual('tool-panel-tool active');
  });

});
