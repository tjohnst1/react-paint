import React, {Component} from 'react';

export default class ColorPicker extends Component {

  render(){
    let colors = ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF']
    const newColors = colors.map((color, i) => {
      let styles = {
        background: `${color}`
      }
      return (<div style={styles} className="color-picker-color-swatch" key={i}> </div>)
    })
    return (
      <div>
        {newColors}
      </div>
    )
  }


}
