const containerForGameContainer = document.querySelector('.container-for-a-container')
// const gameContainer = document.querySelector('.game-container')
const Katalina = document.querySelector('.Katalina')
const monster = document.querySelector('.monster')
const restartPrompt = document.querySelector('.restartPrompt')

// const mediaQuery = window.matchMedia('(max-width: 414px)')

let counter = 0
let highScoreTracker = 0
let highScoreActive = false
let startTimerSpeed = 1
let KatSlash = false
let gameOver = false
let Kposition = Katalina.getBoundingClientRect()
let Mposition = monster.getBoundingClientRect()
let monMove = monster.animate([
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
        console.log("Game Over!")
        clearInterval(timer)
        monMove.pause()
        createGameOver()
    }
},100)

// if (Mposition.right >= (Kposition.left -300px) &&
//   Katslash == true{
//     return monMove
//     counter = counter += 1
//   }

// addEventListener("keydown", function(KatSlash){
//   switch(event.code) {
//     case "KeyE":
//     case "KeySpace":
//    (KatSlash = true)}

function createGameOver (){
  const divider = document.createElement('div')
  const GOMessage = document.createElement('h1')
  GOMessage.textContent = "Game Over" 
  GOMessage.style.textAlign = "center"
  const GOSubtitle = document.createElement('p')
  GOSubtitle.textContent = "Katalina got hit. Do you want to try again?"
  GOSubtitle.style.textAlign = "center"
  containerForGameContainer.appendChild(GOMessage)
  containerForGameContainer.appendChild(GOSubtitle)
// create a new div element?
//create and modify the image of Katalina
// const animationKat = document.createElement('img')
// animationgraphic.setAttribute('sre', "https://gbf-img.com/character-idcharacter/3030005000_Katalina/3030005000_Katalina_01_sd.png")
// animationgraphic.setAttribute('3030005000_Katalina_01_sd.png')
//The Start Over button
  // const startButton = document.createElement("button")
  // startButton.classList.add("start-button")
  // startButton.innerHTML = "Start Over"
  // containerForGameContainer.appendChild(startButton)
  // containerForGameContainer.style.Align = "center"

  // const StartOver = document.createElement('h4')
  // StartOver.textContent = "Start Over"
  // containerForGameContainer.appendChild(StartOver){ if MouseEvent: 
  }
  console.log("Is this even working?")

// if (gameOver == true) 
//    {
        //stop monster; Stop timer
        //Animate Katalina's hurt pose.
        //display "Game Over; Katalina got hit! Do you want to try again?"
        //call current score and replace high score if its higher
        //create "Start Over" button.
//    }
//})


// function KatalinaStab() 
// {
    //make Katalina animate her stab
    //set box to vanish and restart its trek across the screen if stab happens while Mposition is within (300px?) of Kposition
    //raise score/kill count by 1
// }

//-----Score tracker (reference from "Div Jumper")-----

// function startScoreTracker() 
// {
// 	const addScore = setInterval(() => 
//     {
// 		const Katalina = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
// 		const monster = parseInt(window.getComputedStyle(monster).getPropertyValue("left"))
// 		if(monster < 50 && monster > 30 && Katalina <= 129 && gameOver === false) {
// 			counter = counter += 1
// 	} 
// 		if(gameOver === true) 
//         {
// 			clearInterval(addScore)
// 		}
// 		score.innerHTML = `Points: ${counter}`
// 	},1)
// }

