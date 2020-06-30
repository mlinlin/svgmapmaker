window.addEventListener("keyup", drawfunction);
function drawfunction(){
  const thesvg = document.getElementById("thesvg");
  const firstarea = document.getElementById("firstarea");
  const contents = firstarea.value;
  const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  const contents2 = contents.split(" ");
  thesvg.appendChild(polygon);
  for (location of contents2) {
    const point = svg.createSVGPoint();
    point.x = location.split(",")[0];
    point.y = location.split(",")[1];
    polygon.points.appendItem(point);
  }
  polygon {
    stroke: black;
  }
}
