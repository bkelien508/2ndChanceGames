var games = {
  name: 'SuperMarioWorld',
  developer: 'Nintendo',
  released: '1990'
};

// Changes the color when the mouse goes over the title
// $(document).ready(function () {
//   $(".card-title").mousemove(function () {
//     $(".card-title").css("background-color", "yellow");
//   });
//   $(".card-title").mouseout(function () {
//     $(".card-title").css("background-color", "red");
//   });
// });

document.getElementById("game-title").addEventListener("mouseover", mouseOver);
document.getElementById("game-title").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("game-title").style.color = "blue";
}

function mouseOut() {
  document.getElementById("game-title").style.color = "lightgrey";
}