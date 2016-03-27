import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import App from '../app/js/container/App'
import ToolPanel from '../app/js/components/ToolPanel';
import LineWeightSelector from '../app/js/components/LineWeightSelector';

describe('tool panel options component', () => {

  const app = TestUtils.renderIntoDocument(<App />);
  const toolPanel = TestUtils.findRenderedComponentWithType(app, ToolPanel);
  const paintBrush = TestUtils.scryRenderedDOMComponentsWithClass(toolPanel, 'tool-panel-tool')[1];
  TestUtils.Simulate.click(paintBrush);
  const LineWeightSelector = TestUtils.findRenderedComponentWithType(toolPanel, LineWeightSelector);

  it('should identify the currently selected stroke weight (with the selected class)', () => {
    const currentlySelectedLine = TestUtils.findRenderedDOMComponentWithClass(LineWeightSelector, 'line-container selected');
    const newlySelectedLine = TestUtils.scryRenderedDOMComponentsWithClass(LineWeightSelector, 'line-container')[3];
    TestUtils.Simulate.click(newlySelectedLine);
    expect(currentlySelectedLine.className).toEqual('line-container');
    expect(newlySelectedLine.className).toEqual('line-container selected');
  });

  it('should set the stroke weight in the application state', () => {
    const mediumWeightLine = TestUtils.scryRenderedDOMComponentsWithClass(LineWeightSelector, 'line-container')[2];
    TestUtils.Simulate.click(mediumWeightLine);
    expect(app.state.toolOptions.stroke).toEqual(3);
  });

});
