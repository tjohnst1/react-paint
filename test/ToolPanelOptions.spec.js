import React from 'react'
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import ToolPanelOptions from '../app/js/components/ToolPanelOptions';
import App from '../app/js/container/App'

describe('tool panel options component', () => {

  const app = TestUtils.renderIntoDocument(<App />);
  const toolPanelOptions = TestUtils.findRenderedComponentWithType(app, ToolPanelOptions);

  it('should identify the currently selected stroke weight (with the selected class)', () => {
    const currentlySelectedLine = TestUtils.findRenderedDOMComponentWithClass(toolPanelOptions, 'line-container selected');
    const newlySelectedLine = TestUtils.scryRenderedDOMComponentsWithClass(toolPanelOptions, 'line-container')[3];
    TestUtils.Simulate.click(newlySelectedLine);
    expect(currentlySelectedLine.className).toEqual('line-container');
    expect(newlySelectedLine.className).toEqual('line-container selected');
  });

  it('should set the stroke weight in the application state', () => {
    const toolPanelOptions = TestUtils.findRenderedComponentWithType(app, ToolPanelOptions);
    const mediumWeightLine = TestUtils.scryRenderedDOMComponentsWithClass(toolPanelOptions, 'line-container')[2];
    TestUtils.Simulate.click(mediumWeightLine);
    expect(app.state.toolOptions.stroke).toEqual(3);
  });

  it('should show line weight options if the paint brush is selected', () => {
    const paintBrush = TestUtils.scryRenderedDOMComponentsWithClass(toolPanel, 'tool-panel-tool')[1];
    TestUtils.Simulate.click(paintBrush);
    const toolPanelOptions = TestUtils.scryRenderedDOMComponentsWithClass(toolPanel, 'tool-panel-options');
    expect(toolPanelOptions).to.have.length(1)
  })

});
