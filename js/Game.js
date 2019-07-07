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
        let randomPhrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];
        return randomPhrase;
    }


    /* Step Six: create a method called `addPhraseToDisplay()`. 

    This method adds letter placeholders to the display when the game starts. 
    Each letter is presented by an empty box, one list item for each letter. 
    See the example_phrase_html.txt file for an example of what the render HTML for a phrase 
    should look like when the game starts, including any `id` or `class` attributes needed. 
    When the player correctly guesses a letter, the empty box is replaced with the matched letter 
    (see the `showMatchedLetter()` method below). 
    Make sure the phrase displayed on the screen uses the `letter` CSS class for letters and the
     `space` CSS class for space. */

    addPhraseToDisplay() {

        // 1. Create a div with id `phrase` and class `section`, append to DOM
        const phraseDiv = document.createElement('div');
        phraseDiv.id = 'phrase'; 
        phraseDiv.classList.add('section');
        const body = document.getElementsByTagName('body');
        body.appendChild(phraseDiv); 
       
        // 2. Create a ul, appendChild to div
        const ul = document.createElement('ul');
        phraseDiv.appendChild(ul); 

        // 3. Create 11 li elements, nest within ul
        


    }

}