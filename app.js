var btn3 = document.querySelector(".btn-3");
let x = parseInt(Math.random() * 20 + 1);
var score = 20;
var highscore = 0;
var two = document.querySelector("#two");
two.innerHTML = "YOUR SCORE:20";
btn3.addEventListener("click", function chekout() {
  //---decration of variable inside an function --//
  let input1 = parseInt(document.querySelector("#input-1").value);
  if (input1 <= 0 || input1 > 20) {
    alert("provide write input");
  }
  var btn2 = document.querySelector(".btn-2");
  var king = document.querySelector("#king");
  var two = document.querySelector("#two");
  if (input1 == x && score > highscore) {
    btn2.innerHTML = x;
    highscore = highscore + score;
    king.classList.add("body");
    document.querySelector("#one").innerHTML = "...CORRECT GUSS...";
    document.querySelector("#three").innerHTML = "HIGH SCORE:" + highscore;
  } else if (input1 > x) {
    document.querySelector("#one").innerHTML = "...TOO HIGH...";
    score = score - 1;
    two.innerHTML = "YOUR SCORE:" + score;
  } else if (input1 < x) {
    document.querySelector("#one").innerHTML = "...TOO LOW...";
    score = score - 1;
    two.innerHTML = "YOUR SCORE:" + score;
  }
});
var btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", () => {
  console.log("btn-1clickd");
  document.querySelector("#one").innerHTML = "...START GUSSING...";
  document.querySelector("#two").innerHTML = "YOUR SCORE:20";
  document.querySelector(".btn-2").innerHTML = " ? ";
  highscore = 0;
  score = 20;
  king.classList.remove("body");
});
