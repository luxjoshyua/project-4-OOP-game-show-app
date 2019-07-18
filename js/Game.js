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
        this.phrases = [{
                phrase: 'good morning sunshine'
            },
            {
                phrase: 'hello world'
            },
            {
                phrase: 'good morning Vietnam'
            },
            {
                phrase: 'absolute power corrupts absolutely'
            },
            {
                phrase: 'welcome home honey'
            }
        ]
        this.activePhrase = 'null';

        // call click event on keyboard for Step Nine
        const keyboard = document.getElementById('qwerty');
        keyboard.addEventListener('click', (e) => {
            this.handleInteraction(e);
        })
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
    -- Step Nine: handleInteraction() method
    */
    handleInteraction(e) {
        // console.log(e); 
        // all the submethods go in here
        // this is the character clicked
        // console.log( e.target.textContent ); 
        if (this.phrase.checkLetter(e.target.textContent) === true) {
            this.checkForWin();
        } else {
            this.removeLife();
        }
    }

    /*
    -- Step Nine: checkForWin()
    checks for winning move
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
    */
    removeLife() {
        // select the heart images
        const hearts = document.querySelectorAll('.tries img');
        // select the heart, swap the image 
        hearts[this.missed].src = 'images/lostHeart.png';
        console.log('removeLife method reached'); 
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
        const heading = document.querySelector('#overlay .title');
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
        const hearts = document.querySelectorAll('.tries img');
        // for (let i = 0; i < hearts.length; i++) {
        //     hearts[i].src = 'images/liveHeart.png';
        // }
        hearts.forEach(function(heart){
            heart.src = 'images/liveHeart.png';
        });
        // reset the missed property to 0
        this.missed = 0;
    }

    

};