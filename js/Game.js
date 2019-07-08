/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 Game.js
 
 this file creates a Game class methods for starting and ending the game, handling
 interactions, getting a random phrase, checking for a win, and removing a life
 from the scoreboard
 
 */

//  Create a constructor method inside each class
class Game {
    // Step Three: Create a constructor method inside each class
    constructor() {
        this.missed = 0;
        // Step Four: add 5 new Phrase objects directly in the empty array that was originally set as the value of the `phrases` property. 
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
        // Step Five: getRandomPhrase needs to select the random phrase then return the random phrase
        let randomPhrase = this.phrases[ Math.floor( Math.random() * this.phrases.length ) ];
        return randomPhrase;
    }

    /* Step Seven: startGame() method
        - this method begins game by selecting a random phrase and displaying it to user 
    */
    startGame() {

        // 1. Hide the start screen overlay(the `div` element with an `id` of `overlay`)
        const hideScreen = document.getElementById('overlay');
        hideScreen.style.display = 'none';

        // 2. Call the `getRandomPhrase()` method to select a Phrase object from the Game object’s array of phrases
        // you've already set this method up above, just call it here
        getRandomPhrase(); 

        // 3. Add the phrase to the gameboard by calling the `addPhraseToDisplay()` method (which is a method on the Phrase class) on the selected Phrase object.
        //   The selected phrase should be stored in the Game’s `activePhrase` property, so it can be easily accessed throughout the game. 
        
        // how do you call a method on the select object (this.phrases)
        addPhraseToDisplay(); this.phrases

        this.activePhrase = 






    }




}