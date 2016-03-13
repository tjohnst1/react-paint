export default function relativeMousePosition(ele, evt){
  const rect = ele.getBoundingClientRect();
  console.log(rect)
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  }
}
