/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 app.js 
 
 this file creates a new instance of the 'Game' class and adds event listeners
 for the start button and onscreen keyboard buttons 
 */

// -- Step Eight: EventListener for 'Start Game' Button
// Declare a new variable called `game` that’s not set to anything.
let game
// add a "click" event listener to the HTML `<button>` element with an `id` of `btn__reset`. 
const button = document.getElementById('btn__reset'); 
button.addEventListener('click', (e) => {
    // Inside the callback function for this click event listener, use your `game` variable to instantiate a new Game object. 
    game = new Game(); 
    // Call the `startGame()` method on this new Game object.
    game.startGame(); 
}); 







