import React from 'react'
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import App from '../app/js/container/App'

import DrawingCanvas from '../app/js/components/DrawingCanvas';

describe('drawing canvas component', () => {
  const app = TestUtils.renderIntoDocument(<App />);
  const drawingCanvas = TestUtils.findRenderedComponentWithType(app, DrawingCanvas);
  const canvasElement = TestUtils.findRenderedDOMComponentWithTag(drawingCanvas, 'canvas')

  const toolOptions = {
    stroke: 1,
    strokeColor: "#000000"
  }

  it('should render a canvas element with the input height and width', () => {
    expect(canvasElement.style.height).toEqual("400px");
    expect(canvasElement.style.width).toEqual("800px");
  });

});
