const Wordjs = require("word.js");
const inquire = require("inquire");

const WordsToGuess = ["ABO", "MNS", "P", "Rh", "Lutheran", "Kell", "Duffy", "Kidd"]

let chances;
let WordsToGuess;
let wordjs;
let chosenWord;

//funtion starts he game
function intGame() {
    getWord();
    //reset WordToGuesss   

    //reset chnaces
    chances = 10

    // show current wins

    // show current Loss

};

function getWord() {
    var chosenWord = WordsToGuess[Math.floor(Math.random() * WordsToGuess.length)];

};

// THis function has the user geuss the letter using inquirer
function guessletter() {
    inquirer.prompt([]).then(function () {
        name: "guessedLetter",
        message: word.update() + 
                "\nGuess a letter!" +
                "\nGuesses Left: " + guesses

    })

};

//this function sees if the letter matches the user input

function matchLetter() { }

//if it does then PSU LETTER TO TERMINAL

function scoreKeep() { };


function stopGame() {
    // when all the number are completed  && chances >0  RETURN "YOU WIN"


    //when chances = 0  && not all letters in guessed RETURN "GAME OVER" -> show word  RETRUN
    // add to loss count


    // WHen chances >0  &&  all letter guess RETURN

};







// var chosenWor = WordsToGuess[Math.floor(Math.random() * WordsToGuess.length)];
// ///space where word is guesses
// var lettersRemain = chosenWor.length;  //remaining letters
// var blankAnswer = []; // slots for a randomized anwer
// var userwrongguesses = []; // slot for guessed letters 
// var choicearray = chosenWor.split([]);

// var chances = 10; //counts correct letters
// var guessedletter = 0;
// var losses = 0;
// var wins = 0;
// var match = false;


// for (var i = 0; i < chosenWor.length; i++) {
//   blankAnswer.push("_"); //push( adds on) blank sdashes for each character
//   wordtoguess.textContent = blankAnswer.join(" ");// add space instead of commas  betweeen blank dashes  
//   chances = 10;
// }

// document.onkeyup = function (event) {
//   if (event.keyCode >= 65 && event.keyCode <= 90) { /// code to use letters only 
//     userwrongguesses.push(event.key);
//     userText.textContent = userwrongguesses.join(" "); // linking usertext input to the line where wrong guesses will go 
//     // }
//     for (var i = 0; i < choicearray.length; i++) {  // loops all the letters
//       if (choicearray[i] === event.key) {
//         blankAnswer[i] = choicearray[i];
//         wordtoguess.textContent = blankAnswer.join(" ");
//         match = true;

//       }
//     }

//     if (!choicearray.includes(event.key)) {
//       chances--;
//       chanceText.textContent = chances;
//     if (chances <= 0) { 
//       alert("loose"); 
//     }
//     if( !blankAnswer === choicearray){
//       alert("WIN")
//     }
//     }
//   }
// };