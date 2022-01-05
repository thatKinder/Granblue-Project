const containerForGameContainer = document.querySelector('.container-for-a-container')
const gameContainer = document.querySelector('.game-container')
const player = document.querySelector('.player')
const monster = document.querySelector('.monster')

const mediaQuery = window.matchMedia('(max-width: 414px)')

let counter = 0
let highScoreTracker = 0
let highScoreActive = false
let startTimerSpeed = 1
let MonsterStartWidth = 480
let MonsterStart = 480
let gameOver = false

const score = document.createElement("h3")
score.classList.add("score")
score.innerHTML = `Points: ${counter}`
// gameContainer.prepend(score)

const highScore = document.createElement('h2')
highScore.classList.add('high-score')
highScore.innerHTML = `High score: ${highScoreTracker}`

const startButton = document.createElement("button")
startButton.classList.add("start-button")
startButton.innerHTML = "Start"
containerForGameContainer.appendChild(startButton)

function swingSword() {
	if(player.classList !== "attack") {
		player.classList.add("attack")
	}
	setTimeout(() => {
		player.classList.remove("attack")
	}, 500)
}

function startTimer() {
	const checkCollision = setInterval(() => {
		const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
		let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
		
		obstacle.style.left = `${obstaclePos -= 2}px`

//(for if Kat is hit by monster)
		if(obstacleLeft <= 50 && obstacleLeft > 30 && playerTop >= 130) {
			clearInterval(checkCollision)
			gameOver = true

			if(counter > highScoreTracker) {
				highScoreTracker = counter
				highScore.innerHTML = `High score: ${highScoreTracker}`
			}

			const gameOver = document.createElement("h1")
			gameOver.classList.add("game-over")
			gameOver.innerHTML = "YOU LOST LMAO"
			gameContainer.appendChild(gameOver)

			const restart = document.createElement("button")
			restart.classList.add("restart")
			restart.innerHTML = "Restart"
			gameContainer.appendChild(restart)

			const restartLocation = document.querySelector(".restart")
			restartLocation.addEventListener("click", () => {
				obstaclePos = obstaclePosWidth
				obstacle.style.left = `${obstaclePos}px`

				if(highScoreActive === false) {
					highScoreActive = true
					containerForGameContainer.appendChild(highScore)
				}

				counter = 0
				score.innerHTML = `Points: ${counter}`
				gameOver = false
				const gameOverLocation = document.querySelector('.game-over')
				gameOverLocation.remove()
				restartLocation.remove()
				startTimer()
				startScoreTracker()
			})
		}

		if(obstaclePos === 0) {
			obstaclePos = obstaclePosWidth
		}
	},startTimerSpeed)
}

function startScoreTracker() {
	const addScore = setInterval(() => {
		const playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
		const obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"))
		if(obstacleLeft < 50 && obstacleLeft > 30 && playerTop <= 129 && gameOver === false) {
			counter = counter += 1
		} 
		if(gameOver === true) {
			clearInterval(addScore)
		}
		score.innerHTML = `Points: ${counter}`
	},5)
}

function handleDeviceChange(event) {
	if(event.matches) {
		console.log("Media query matched!")
		obstaclePos = 280
		obstaclePosWidth = 280
		startTimerSpeed = 10
	}
}

// handleDeviceChange(mediaQuery)




// <html>
// <head>
// 	<meta charset="utf-8">
// 	<meta name="viewport" content="width=device-width">
// 	<meta property="og:image" content="https://i.imgur.com/K9jmhvj.png" />
// 	<link rel="preconnect" href="https://fonts.googleapis.com">
// 	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
// 	<link href="https://fonts.googleapis.com/css2?family=Rampart+One&family=Roboto&display=swap" rel="stylesheet">
// 	<link rel="stylesheet" type="text/css" href="css/style.css">
// 	<title>DIV JUMPER!</title>
// </head>
// <body>
// 	<div class="container-for-a-container">
// 		<h4 class="title">DIV JUMPER!</h4>
// 		<p class="description">Rack up as many points as you can!<br>Use the spacebar in desktop mode to jump.<br>On a mobile device, tap anywhere on the screen to jump.</p>
// 		<div class="game-container">
// 			<div class="player"></div>
// 			<div class="obstacle"></div>
// 		</div>
// 		<audio controls autoplay loop class="audio">
// 			<source src="./assets/soundtrack.wav" type="audio/wav">
// 		</audio>
// 	</div>

// 	<script type="text/javascript" src="js/app.js"></script>
// </body>
// </html>