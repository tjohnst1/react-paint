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
  const coords = relativeMousePosition(ele, evt)
  return (coords.x < 0 || coords.x > rect.width || coords.y < 0 || coords.y > rect.height)
}
