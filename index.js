var fs = require("fs");
var inquirer = require("inquirer");
var Word = require("./Word.js");

var words = [];
var currentWord = new Word();
var guesses = 10;

var start = function() {
    fs.readFile("words.txt", "utf8", function(error, data) {
        if (error) {
          return console.log(error);
        }
        words = (data.split(","));
        game();
    });
};

var game = function () {
    console.log("\n------------------");
    console.log(" New Game Started");
    console.log("------------------\n");
    newWord();
    display();
};

var newWord = function() {
    var index = Math.floor(Math.random() * words.length);
    currentWord.init(words[index]);
    guesses = 10;
};

var display = function() {
    console.log(`${currentWord}\n`);
    if (currentWord.isGuessed()) {
        console.log("You Win!\n");
        inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Play another round?"
            }
        ]).then(function(user) {
            if (user.continue) {
                game();
            } else {
                return;
            };
        });
    } else if (guesses === 0) {
        console.log("You Lose!\n");
        inquirer.prompt([
            {
                type: "confirm",
                name: "continue",
                message: "Play another round?"
            }
        ]).then(function(user) {
            if (user.continue) {
                game();
            } else {
                return;
            };
        });
    } else {    
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Guess a letter: "
            }
        ]).then(function(user) {
            if (!currentWord.guess(user.guess)) {
                guesses--;
                console.log(`Incorrect! Remaining guesses: ${guesses}`);
            };
            display();
        });
    };
};

start();