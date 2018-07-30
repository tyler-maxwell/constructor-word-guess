var Letter = require("./Letter.js");

var Word = function() {
    this.letters = [];
};

Word.prototype.init = function(word) {
    this.letters = [];
    for (var i = 0; i < word.length; i++) {
        this.letters.push(new Letter(word[i]));
    };
};

Word.prototype.toString = function() {
    var word = "";
    this.letters.forEach(letter => {
        word += letter + " ";
    });
    return word;
};

Word.prototype.reveal = function() {
    var word = "";
    this.letters.forEach(letter => {
        word += letter.value + " ";
    });
    return word;
};

Word.prototype.guess = function(value) {
    var goodGuess = false;
    this.letters.forEach(letter => {
        if (letter.guess(value)) {
            goodGuess = true;
        };
    });
    return goodGuess;
};

Word.prototype.isGuessed = function() {
    var status = true;
    this.letters.forEach(letter => {
        if (letter.guessed === false) {
            status = false;
        }
    });
    return status;
};

module.exports = Word;