# Granblue-Project
//create main menu
	//place instructions above the 'start' button.
	//make start button start the game
// Create instances of 2 shapes
	//create a Square to represent Katalina
	//create a circle to represent a monster

//Set Circle (monster) to move toward the square (Katalina) over a span of a few seconds
	//Set circle to move up in 2 phases (incoming phase + Attack phase)

//Set the game over menu to appear if the circle and the box collide (Katalina got hit!)
// display the “You’ve been got!” Text in the middle if and after the square changes states.
//Create button under “you’ve been Got” to try the game Again

//Set the square (Katalina) to change states (change color?) when E Key is clicked for a 1/5 second or so, then revert.
	//set E key ‘click’ to change color
	//set timer to change the color back after .2 second wait.
	//Disable E click during the .2 second wait to avoid button mashing.

//Set E Key to reset circle’s transformation to stop and vanish (opacity 100 => 0) and restart its move across the screen if the circle is within 'x' pixels of Katalina when the chosen button is pressed.
	//link reset to (if circle within X pixils && keypress function is started, restart transformation)
        //have current box stop, change red, 
        //then have the box vanish (transform from opacity 1 to opacity 0)
        //After the box vanishes, restart the box transforming across the board.



——Minimum Viable Product achieved——



//Set up fetch function for Katalina data;
//Replace square with Katalina standing.
//Replace action when E key is pressed with Katalina swinging her sword
//Add 2 more rotating animatinos for Katalina swinging.
//Set up fetch function of monster sprite data;
//turn circle into the sprite of an oncoming monster
//Add a background image behind Katalina and the monster.
//display directions for the game (under a “start” button; consider changing the start button to “Try again” for later attempts)
	//make “start button”
	// design start button to begin the game and hide itself.
	// change Start button to “try again” button after first start and make it start the game again when the first game ends.
//Add a score-board for how many times Katalina wards off the monster
	//Add a high score to show the highest score achieved.
//Add an animation to the monster when it ‘dies’ and goes away.
//set Font for “You’ve been Got”, scoreboard, “start” and “Try Again”
