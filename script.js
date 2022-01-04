/*
 * DOTS: Level One
 *
 */

//impliment event listener in dot
let monster = document.querySelector(".js-monster")
let score1 = document.querySelector(".js-score")
let gameover = document.querySelector(".game-over")
let points = 0

function increaseScore() 
{
  points += 10
  console.log (points)
  score1.innerHTML = points
  if (points == 100)
  {
    gameover.style.opacity = 1
    console.log ("Katalina got hit!")
  }
}

monster.addEventListener("click", increaseScore);

