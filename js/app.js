/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 app.js 
 
 this file creates a new instance of the 'Game' class and adds event listeners
 for the start button and onscreen keyboard buttons
 
 */

// Step Six testing method
// const phrase = new Phrase('test phrase here'); 
// phrase.addPhraseToDisplay();


const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);