window.addEventListener("keyup", drawfunction);
function drawfunction(){
  if (document.getElementById("polygon1") != null){document.getElementById("polygon1").remove()};
  const thesvg = document.getElementById("thesvg");
  const firstarea = document.getElementById("firstarea");
  const contents = firstarea.value;
  if (contents.split("<coordinates>")[1] != null){
    const contents1 = contents.split("<coordinates>")[1];
    const contents2 = contents1.split(",0 ");
    console.log(contents2);
    const polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    polygon.setAttribute("id", "polygon1");
    polygon.setAttribute("stroke", "black");
    for (const location of contents2) {
      const point = thesvg.createSVGPoint();
      point.x = location.split(",")[0]+180;
      point.y = location.split(",")[1]+180;
      polygon.points.appendItem(point);
    }
    thesvg.appendChild(polygon);
  }
}
