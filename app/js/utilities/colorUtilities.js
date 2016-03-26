export function hexToRgbObj(hex){
  const hexValues = hex.substring(1);
  return {
    r: parseInt(hexValues.substring(0, 2), 16),
    g: parseInt(hexValues.substring(2, 4), 16),
    b: parseInt(hexValues.substring(4, 6), 16)
  }
}

export function darkenRgbObj(rgbObj, percent){
  let newColor = {};
  for(var key in rgbObj){
    let newVal = rgbObj[key] - (255 * percent / 100);
    if (newVal < 0) {
      newVal = 0;
    }
    newColor[key] = Math.round(newVal);
  }
  return newColor;
}

export function rgbObjToHex(rgbObj){
  let rgbVals = [rgbObj.r, rgbObj.g, rgbObj.b];
  function toBase16(num){
    return Number(num).toString(16).toUpperCase()
  }
  rgbVals = rgbVals.map(
    (num) => {
      let convertedVal = toBase16(num)
      if (convertedVal.length === 1){
        convertedVal = '0' + convertedVal
      }
      return convertedVal
    }
  )
  return '#' + rgbVals.join('');
}

export function darkenHex(hex, percent){
  return rgbObjToHex(darkenRgbObj(hexToRgbObj(hex), percent));
}
