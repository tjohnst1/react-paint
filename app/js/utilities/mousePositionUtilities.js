export function relativeMousePosition(ele, evt){
  const rect = ele.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}

export function outsideOfCanvas(ele, evt){
  const rect = ele.getBoundingClientRect();
  const coords = {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
  return (coords.x < 0 || coords.x > rect.width || coords.y < 0 || coords.y > rect.height)
}
