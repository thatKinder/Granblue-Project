const containerForGameContainer = document.querySelector('.container-for-a-container')
// const gameContainer = document.querySelector('.game-container')
const Katalina = document.querySelector('.Katalina')
const monster = document.querySelector('.monster')

const mediaQuery = window.matchMedia('(max-width: 414px)')

let counter = 0
let highScoreTracker = 0
let highScoreActive = false
let startTimerSpeed = 1
let gameOver = false
let Kposition = Katalina.getBoundingClientRect()
let Mposition = monster.getBoundingClientRect()
// console.log(Mposition.left)

monster.animate([
  { transform: 'translateX(0px)' },
  { transform: 'translateX(1020px)' }
], {
  // timing options (done in milleseconds)
  duration: 4000,
  iterations: Infinity
});

let timer=setInterval(function(){
let Mposition = monster.getBoundingClientRect()
//(for if Kat is hit by monster)
if(Mposition.right >= Kposition.left) {
            console.log("They touched! They touched!")
			//clearInterval(checkCollision)
			gameOver = true
    }
},100)

//(put this start button in a main menu.)

const startButton = document.createElement("button")
startButton.classList.add("start-button")
startButton.innerHTML = "Start"
containerForGameContainer.appendChild(startButton)


// function KatalinaStab() 
// {
    
// }
function startScoreTracker() 
{
	const addScore = setInterval(() => 
    {
		const Katalina = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
		const monster = parseInt(window.getComputedStyle(monster).getPropertyValue("left"))
		if(monster < 50 && monster > 30 && Katalina <= 129 && gameOver === false) {
			counter = counter += 1
	} 
		if(gameOver === true) 
        {
			clearInterval(addScore)
		}
		score.innerHTML = `Points: ${counter}`
	},1)
}

