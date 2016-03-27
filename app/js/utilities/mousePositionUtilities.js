export function relativeMousePosition(ele, evt){
  const rect = ele.getBoundingClientRect();
  const pixelRatio = window.devicePixelRatio
  return {
    x: (evt.clientX - rect.left) * pixelRatio,
    y: (evt.clientY - rect.top) * pixelRatio
  }
}

export function outsideOfCanvas(ele, evt){
  const rect = ele.getBoundingClientRect();
  const coords = {
    x: evt.clientX,
    y: evt.clientY
  }
  return !(coords.x > rect.left || coords.x < rect.right || coords.y > rect.top || coords.y < rect.bottom)
}
