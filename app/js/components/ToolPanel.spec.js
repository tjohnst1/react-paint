import React from 'react'
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import ToolPanel from './ToolPanel';

describe('toolPanel', () => {
  beforeEach(){
    const tools = ['pencil', 'paint brush', 'eraser', 'rectangle'];
    const renderer = TestUtils.createRenderer();
    renderer.render(<ToolPanel tools={tools} selectedTool="paintbrush"/>);
  }
  it('should have tools', () => {
    renderer.render(<ToolPanel tools={tools}/>);
    const firstTool = renderer.getRenderOutput().props.children[0].props.children;
    expect(firstTool).toEqual('pencil');
  });
});
