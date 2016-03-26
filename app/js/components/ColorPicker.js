import React, {Component} from 'react';
import {hexToRgbObj, darkenHex, darkenRgbObj, rgbObjToHex} from '../utilities/colorUtilities.js'

export default class ColorPicker extends Component {

  render(){
    const baseColors = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF']
    let colorSwatches = [];
    for (var j = 0; j < 3; j++){
      let colorSwatchRow = [];
      baseColors.forEach((color, i) => {
        let styles = {};
        if (j === 0){
          styles.background = color;
        } else {
          styles.background = darkenHex(color, j * 20);
        }
        colorSwatchRow.push((<div style={styles} className="cp-color-swatch" key={(j + 1)*i}> </div>));
      })
      colorSwatches.push((<div className="cp-color-swatch-row" key={j * 50}>{colorSwatchRow}</div>));
    }
    return (
      <div>
        {colorSwatches}
      </div>
    )
  }


}
