/* Treehouse FSJS Techdegree
 Project 4 - OOP Game App
 Game.js
 
 this file creates a Game class methods for starting and ending the game, handling
 interactions, getting a random phrase, checking for a win, and removing a life
 from the scoreboard
 
 */


 class Game {

    /* create a constructor method 

    The Game class has the following properties: 
    ○ missed: Used to track the number of missed guesses by the player. The initial value is `0`, since no guesses have been made at the start of the game. 
    ○ phrases: An array of Phrase objects to use with the game. For now, initialize the property to an empty array. In the next step you'll work on initializing this property with an array of Phrase objects. 
    ○ activePhrase: This is the Phrase object that’s currently in play. The initial value is `null`. 

    */  

    this.missed = 0;

    this.phrases = [];
    this.activePhrase = 'null'; 




 }