/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 Game.js

 this file creates a Game class methods for starting and ending the game, handling
 interactions, getting a random phrase, checking for a win, and removing a life
 from the scoreboard
 */

//  Create a constructor method inside each class
class Game {
    // -- Step Three: Create a constructor method inside each class
    constructor() {
        this.missed = 0;
        // -- Step Four: add 5 new Phrase objects directly in the empty array that was originally set as the value of the `phrases` property. 
        this.phrases = [
            {
                phrase: 'absolute power corrupts absolutely'
            },
            {
                phrase: 'I know you are here to kill me. Shoot, coward, you are only going to kill a man.'
            },
            {
                phrase: 'The history of all hitherto existing society is the history of class struggles.'
            },
            {
                phrase: 'I don\'t think any person in America should die because they are too poor to live.'
            },
            {
                phrase: 'How close we could look into a bright future should two, three or many Vietnams flourish throughout the world.'
            },
            {
                phrase: 'Democratic socialism means that we must create an economy that works for all, not just the very wealthy.'
            },
            {
                phrase: 'All of the police measures we’ve undertaken in the last 100 years against drug trafficking have multiplied crime. Drugs have spread and violence has overrun society.'
            },
            {
                phrase: 'Life is life. Some of the wisest people you meet are sweeping our streets.',
            },
            {
                phrase: 'But that is who we are, that is where we come from. We are the offspring of metropolitan annihilation and destruction.'
            },
            {
                phrase: 'Now is the time of the furnaces, and only light should be seen.'
            }
        
        ]
        this.activePhrase = 'null';

        // call click event on keyboard for Step Nine
        const keyboard = document.getElementById('qwerty');
        // const keyboard = document.querySelectorAll('#qwerty button'); 
        keyboard.addEventListener('click', (e) => {
            this.handleInteraction(e);
        });

        /* TODO: add Event listener has been added for the keydown or keyup event so that pressing a physical keyboard button results 
        in the handleInteraction() method being called for the associated onscreen keyboard button */

        // const keyDown = document.querySelectorAll('#qwerty button'); 
        // keyDown.addEventListener('keydown', (e) => {


        // }); 



    }

    getRandomPhrase() {
        // -- Step Five: getRandomPhrase needs to select the random phrase then return the random phrase
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }

    /* -- Step Seven: startGame()
        - this method begins game by selecting a random phrase and displaying it to user */
    startGame() {
        // 1. Hide the start screen overlay
        const hideScreen = document.getElementById('overlay');
        hideScreen.style.display = 'none';
        // 2. Call the `getRandomPhrase()` method to select a Phrase object from the Game object’s array of phrases
        this.activePhrase = this.getRandomPhrase();
        // console.log(this.activePhrase); 
        // 3. Setup phrase variable, then run it by calling the new Phrase(); 
        this.phrase = new Phrase(this.activePhrase);
        // 4. Add the phrase to the gameboard
        // The selected phrase should be stored in the Game’s `activePhrase` property, so it can be easily accessed throughout the game. 
        this.phrase.addPhraseToDisplay();
    }

    /*
    -- Step Nine: handleInteraction()
    */

    handleInteraction(e) {
        // console.log(e); check the event is actually registering
        // this variable holds the keyboard button clicked
        const clicked = e.target; 
        

        /* -- Step Eleven: build out the handleInteraction()
        */

        if (this.phrase.checkLetter(e.target.textContent) === true) {
            this.checkForWin();
            // add `chosen` class to the clicked character
            clicked.classList.add('chosen');
        } else {
            // add `wrong` class to the clicked character
            clicked.classList.add('wrong');
            // prevent the user from clicking the same wrong button again
            clicked.disabled = 'true'; 
            this.removeLife();
        }
    }

    /*
    -- Step Nine: checkForWin()
    Checks for winning move
    */
    checkForWin() {
        // select the phrase
        const currentPhrase = document.querySelectorAll('#phrase li');
        // you have to loop through because you're checking each character in the served phrase
        for (let i = 0; i < currentPhrase.length; i++) {
            // setup variable here that equals currentPhrase[i]
            const phrase = currentPhrase[i];
            if (phrase.classList.contains('hide')) {
                // return false if game hasn't been won
                return false;
            }
        }
        this.gameOver(true);
    }

    /*
    -- Step Nine: removeLife()
    Increases the value of the missed property
    Removes a life from the scoreboard
    Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        // select the heart images
        const hearts = document.querySelectorAll('.tries img');
        // select the heart, swap the image 
        hearts[this.missed].src = 'images/lostHeart.png';
        // console.log('removeLife method reached'); 
        this.missed += 1;
        if (this.missed >= 5) {
            // you need the `this` because it's all happening in the same Game class
            this.gameOver(false);
        } else {
            return;
        }
    }
    /*
    -- Step Nine: gameOver()
    Displays game over message
    */
    gameOver(gameWon) {
        // show the original start screen
        const startScreen = document.getElementById('overlay');
        startScreen.style.display = 'flex';
        const heading = document.querySelector('#game-over-message');
        // when you lose, you need to reset the grey hearts to blue hearts
        if (gameWon) {
            // If the player wins, update the h1
            heading.textContent = 'Congratulations, you win!';
            startScreen.classList.add('win');
        } else {
            // If the player loses, update the h1
            heading.textContent = 'Better luck next time, comrade!';
            startScreen.classList.add('lose');
            // call the resetLife(), which is needed 
            this.resetLife();
        }
    }

    // reset the hearts method
    resetLife() {
        // reset the hearts back to full blue
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(function (heart) {
            heart.src = 'images/liveHeart.png';
        });
        // reset the missed property to 0
        this.missed = 0;
        // remove the `wrong` and `chosen` classes for all buttons when the game resets
        const keys = document.querySelectorAll('#qwerty button'); 
        keys.forEach(function (key) {
            key.classList.remove('chosen', 'wrong'); 
            key.disabled = false; 
        });

    }

};