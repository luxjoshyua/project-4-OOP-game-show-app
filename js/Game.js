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
    }

    getRandomPhrase() {
        // -- Step Five: getRandomPhrase needs to select the random phrase then return the random phrase
        let randomPhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
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
        const phrase = new Phrase( this.activePhrase );
        // 4. Add the phrase to the gameboard
        // The selected phrase should be stored in the Game’s `activePhrase` property, so it can be easily accessed throughout the game. 
        phrase.addPhraseToDisplay( );
    }


    /*
    -- Step Nine: handleInteraction() method
    */

    // handleInteraction() {
    //     // all the submethods go in here
    // }



}