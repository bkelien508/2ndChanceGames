// Changes the color when the mouse goes over the title
document.getElementById("game-title").addEventListener("mouseover", mouseOver);
document.getElementById("game-title").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("game-title").style.color = "blue";
}

function mouseOut() {
  document.getElementById("game-title").style.color = "lightgrey";
}