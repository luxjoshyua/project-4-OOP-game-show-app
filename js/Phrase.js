/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 Phrase.js 
 
 this file creates a Phrase class to handle the creation of phrases
 */

class Phrase {
    // -- Step Three: Create a constructor method inside Phrase class
    constructor(phrase) {
        this.phrase = phrase.phrase.toLowerCase();
    }

    // -- Step Six: addPhraseToDisplay() method
    addPhraseToDisplay() {
        // 1. Create a div with id `phrase` and class `section`, append to DOM
        const phraseDiv = document.getElementById('phrase');
        // setup a var to remove the old ul element from the DOM
        const oldListUl = phraseDiv.getElementsByTagName('ul');
        // loop through the ul, remove old one
        for (let i = 0; i < oldListUl.length; i++) {
            phraseDiv.removeChild(oldListUl[i]);
        }

        // 2. Create a ul, appendChild to div
        const ul = document.createElement('ul');
        phraseDiv.appendChild(ul);

        // split phrase, so we have each character separate e.g. 'w', 'e', 'l', 'c', 'o', 'm', 'e'
        const phraseSplit = this.phrase.split('');
        // console.log(phraseSplit);

        // 3. Create li elements in a loop, then nest within ul
        for (let i = 0; i < phraseSplit.length; i++) {
            // console.log(phraseSplit[i]);
            const currentLetter = phraseSplit[i];
            // setup loop for inserting li elements
            const li = document.createElement('li');
            // add the classes defined in example_phrase_html.txt file
            if (currentLetter === ' ') {
                li.classList.add('space');
            } else {
                li.classList.add('hide', 'letter');
                li.innerText = currentLetter;
            }
            // console.log(li); 
            ul.appendChild(li);
        }
    }

    /* -- Step Nine: checkLetter()
    Checks if passed letter is in phrase
    This method needs to do two specific things:
        1. The clicked/chosen letter must be captured
        2. The clicked letter must be checked against the phrase for a match
    */

    checkLetter(letter) {
        // 1. Capture the clicked/chosen letter in an event   
        const letterClicked = document.getElementsByClassName('key').textContent();
        letterClicked.addEventListener('click', (e) => {
            // select the active phrase you are going to compare against, but split it into characters
            const phrase = this.activePhrase.split('');
            // 2. Check the clicked letter against the phrase for a match
            if ( letterClicked === phrase ) {
            // if ( letterClicked.includes( phrase.split('') ) ) {
                return true;
            } else {
                return false;
            }
        });

    }

    /* Step Nine: showMatchedLetter()
    Displays passed letter on screen after a match is found

    To reveal the matching letter(s):
        1. select all of the letter DOM elements that have a CSS class name that matches the selected letter and
        2. replace each selected element's `hide` CSS class with the `show` CSS class

    */


    // showMatchedLetter(letter) {

    //     // 1. Select all of the letter DOM elements that have a CSS class name that matches the selected letter

    //     const match = 

    // chosen class or wrong class


    //     // 2. Replace each selected element's `hide` CSS class with the `show` CSS class

    // }






}