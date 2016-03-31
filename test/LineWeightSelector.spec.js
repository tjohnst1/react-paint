import React from 'react';
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import App from '../app/js/container/App'
import ToolPanel from '../app/js/components/ToolPanel';
import LineWeightSelector from '../app/js/components/LineWeightSelector';

describe('tool panel options component', () => {

  const app = TestUtils.renderIntoDocument(<App />);
  const toolPanel = TestUtils.findRenderedComponentWithType(app, ToolPanel);
  const pencil = TestUtils.scryRenderedDOMComponentsWithClass(toolPanel, 'tool-panel-btn')[0];
  const brush = TestUtils.scryRenderedDOMComponentsWithClass(toolPanel, 'tool-panel-btn')[1];
  TestUtils.Simulate.click(pencil);
  const lineWeightSelector = TestUtils.findRenderedComponentWithType(toolPanel, LineWeightSelector);

  it('should identify the currently selected pencil stroke weight (with the selected class)', () => {
    const currentlySelectedLine = TestUtils.findRenderedDOMComponentWithClass(lineWeightSelector, 'line-container selected');
    const newlySelectedLine = TestUtils.scryRenderedDOMComponentsWithClass(lineWeightSelector, 'line-container')[3];
    TestUtils.Simulate.click(newlySelectedLine);
    expect(currentlySelectedLine.className).toEqual('line-container');
    expect(newlySelectedLine.className).toEqual('line-container selected');
  });

  it('should set the pencil stroke weight in the application state', () => {
    const mediumWeightLine = TestUtils.scryRenderedDOMComponentsWithClass(lineWeightSelector, 'line-container')[2];
    TestUtils.Simulate.click(mediumWeightLine);
    expect(app.state.toolOptions.stroke).toEqual(10);
  });

  it('should set the brush stroke weight in the application state', () => {
    TestUtils.Simulate.click(brush);
    const mediumWeightBrush = TestUtils.scryRenderedDOMComponentsWithClass(lineWeightSelector, 'circle-container')[2];
    TestUtils.Simulate.click(mediumWeightBrush);
    expect(app.state.toolOptions.stroke).toEqual(30);
  });

  it('should identify the currently selected brush stroke weight (with the selected class)', () => {
    const currentlySelectedCircle = TestUtils.findRenderedDOMComponentWithClass(lineWeightSelector, 'circle-container selected');
    const newlySelectedCircle = TestUtils.scryRenderedDOMComponentsWithClass(lineWeightSelector, 'circle-container')[3];
    TestUtils.Simulate.click(newlySelectedCircle);
    expect(currentlySelectedCircle.className).toEqual('circle-container');
    expect(newlySelectedCircle.className).toEqual('circle-container selected');
  });

});
