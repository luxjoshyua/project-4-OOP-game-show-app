/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 Phrase.js 
 
 this file creates a Phrase class to handle the creation of phrases
 */

class Phrase {
    // Step Three: Create a constructor method inside Phrase class
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    // Step Six: addPhraseToDisplay() method
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
        for ( let i = 0; i < phraseSplit.length; i++ ) {
            // console.log(phraseSplit[i]);
            const currentLetter = phraseSplit[i];
            // setup loop for inserting li elements
            const li = document.createElement('li');
            // here we add the classes defined in example_phrase_html.txt file
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
}