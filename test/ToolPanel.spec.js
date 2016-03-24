import React from 'react'
import expect from 'expect';
import TestUtils from 'react-addons-test-utils';
import ToolPanel from '../app/js/components/ToolPanel';

describe('tool panel component', () => {

  const tools = ['pencil', 'paint brush', 'eraser', 'rectangle'];
  const renderer = TestUtils.createRenderer();
  renderer.render(<ToolPanel tools={tools} selectedTool="paint brush"/>);

  it('should have tools', () => {
    const firstTool = renderer.getRenderOutput().props.children[0][0].props.children;
    expect(firstTool).toEqual('pencil');
  });

  it('should display the selected tool as active', () => {
    const actual = renderer.getRenderOutput().props.children[0][1].props.className.includes('active')
    const expected = true
    expect(actual).toEqual(true);
  });

});
