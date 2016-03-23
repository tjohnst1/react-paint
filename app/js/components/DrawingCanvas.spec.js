import React from 'react'
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import DrawingCanvas from './DrawingCanvas';

describe('drawing canvas component', () => {
  const toolOptions = {
    stroke: 1,
    strokeColor: "#000000"
  }
  const renderer = TestUtils.createRenderer();
  renderer.render(<DrawingCanvas width="800" height="400" toolOptions={toolOptions} />)

  it('should render a canvas element with the input height and width', () => {
    const type = renderer.getRenderOutput().props.children.type;
    expect(type).toEqual('canvas');
    expect(renderer.getRenderOutput()).toIncludeJSX('height="400"')
    expect(renderer.getRenderOutput()).toIncludeJSX('width="800"')
  });

});
