/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 app.js 
 
 this file creates a new instance of the 'Game' class and adds event listeners
 for the start button and onscreen keyboard buttons 
 */

// -- Step Eight: EventListener for 'Start Game' Button
// Declare a new variable called `game` that’s not set to anything.
// Inside the callback function for this click event listener, use your `game` variable to instantiate a new Game object. 
let game = new Game();
// add a "click" event listener to the HTML `<button>` element with an `id` of `btn__reset`. 
const button = document.getElementById('btn__reset'); 
button.addEventListener('click', (e) => {
    
    
    // Call the `startGame()` method on this new Game object.
    game.startGame(); 
}); 

// random background colour refresh
const bg = document.querySelector('.start'); 
const colors =  ['#fb412d', '#2d9dfb', '#4a2dfb', '#ffacb9', '#000', '#']; 

// thanks CSS tricks for this line
// let colors = Math.floor(Math.random()*16777215).toString(16);

// console.log( Math.floor( Math.random() * Math.floor(4) ) );
bg.style.background = colors[Math.floor( Math.random() * Math.floor(4) )];

