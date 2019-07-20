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
    // -- Step Six: addPhraseToDisplay()
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
                li.classList.add('hide', 'letter', currentLetter);
                li.innerText = currentLetter;
            }
            ul.appendChild(li);
        }
    }

    /* -- Step Nine: checkLetter()
    Checks if passed letter is in phrase
    */
    checkLetter(letter) {
        // 1. Capture the clicked/chosen letter in an event   
        // select the active phrase you are going to compare against, but split it into characters
        // const phrase = this.activePhrase.split('');
        // 2. Check the clicked letter against the phrase for a match
        if (this.phrase.includes(letter)) {
            this.showMatchedLetter(letter);
            return true;
        } else {
            return false;
        }
    }

    /* -- Step Nine: showMatchedLetter()
    Displays passed letter on screen after a match is found
    */
    showMatchedLetter(letter) {
        // find the UL first (this is where the letters live)
        // change the const name
        const currentPhrase = document.querySelectorAll('#phrase li.hide');
        // loop through the ul, remove old one
        for (let i = 0; i < currentPhrase.length; i++) {
            // check whether the letter is in the li
            if (currentPhrase[i].classList.contains(letter)) {
                // if the letter is in the li , replace the class `hide` with `show`
                currentPhrase[i].classList.remove('hide');
                currentPhrase[i].classList.add('show');
            } 
        }
    }
}