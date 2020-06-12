var x = 1 + Math.floor(Math.random() * 6);
var y = 1 + Math.floor(Math.random() * 6);

document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice" + x + ".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice" + y + ".png");

if (x > y) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!!!";
} else if (x < y) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!!!";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw!!!";
}
