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


    addPhraseToDisplay() {

        // 1. Create a div with id `phrase` and class `section`, append to DOM
        const phraseDiv = document.getElementById('phrase');
        const oldListUl = phraseDiv.getElementsByTagName('ul');

        for (let i = 0; i < oldListUl.length; i++) {
            phraseDiv.removeChild(oldListUl[i]);
        }

        // // 2. Create a ul, appendChild to div
        const ul = document.createElement('ul');
        phraseDiv.appendChild(ul);

        // split phrase 
        const phraseSplit = this.phrase.split('');
        console.log(phraseSplit);

        // 3. Create li elements in a loop, then nest within ul
        for (let i = 0; i < phraseSplit.length; i++) {
            // console.log(phraseSplit[i]);
            const currentLetter = phraseSplit[i];
            // setup loop for inserting li elements
            const li = document.createElement('li');
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