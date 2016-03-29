import React from 'react'
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import ColorPicker from '../app/js/components/ColorPicker';
import {rgbToHex} from '../app/js/utilities/colorUtilities';
import App from '../app/js/container/App'

describe('the color picker component', () => {

  const app = TestUtils.renderIntoDocument(<App />)
  const colorPicker = TestUtils.findRenderedComponentWithType(app, ColorPicker);

  it ('should allow a user to set the stroke color', () => {
    const firstRow = TestUtils.scryRenderedDOMComponentsWithClass(colorPicker, 'cp-color-swatch-row')[0];
    const orangeColorSwatch = TestUtils.scryRenderedDOMComponentsWithClass(colorPicker, 'cp-color-swatch')[4];
    TestUtils.Simulate.click(orangeColorSwatch);
    const orangeHex = rgbToHex(orangeColorSwatch.style.background);
    expect(app.state.toolOptions.strokeColor).toEqual(orangeHex);
  });

  it ('should mark the selected color as selected', () => {
    const blueColorSwatch = TestUtils.scryRenderedDOMComponentsWithClass(colorPicker, 'cp-color-swatch')[9];
    TestUtils.Simulate.click(blueColorSwatch);
    expect(blueColorSwatch.className).toEqual('cp-color-swatch selected');
  });

});
