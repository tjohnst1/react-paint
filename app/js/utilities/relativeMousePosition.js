export default function relativeMousePosition(ele, evt){
  const rect = ele.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}
