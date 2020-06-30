window.addEventListener("keyup", drawfunction);
function drawfunction(){
  if (document.getElementById("polygon1") != null){document.getElementById("polygon1").remove()};
  const thesvg = document.getElementById("thesvg");
  const firstarea = document.getElementById("firstarea");
  const contents = firstarea.value;
  const contents2 = contents.split(" ");
  console.log(contents2);
  const element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  svg.appendChild(element);
}
