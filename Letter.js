var Letter = function(value) {
    this.value = value;
    this.guessed = false;
};

Letter.prototype.toString = function() {
    if (this.value === " ") {
        this.guessed = true;
        return " ";
    } else if (this.value === "'") {
        this.guessed = true;
        return "'";
    }
    else if (this.guessed === true) {
        return this.value;
    } else {
        return "_";
    };
};
  
Letter.prototype.guess = function(letter) {
    if (letter.toLowerCase() === this.value.toLowerCase()) {
        this.guessed = true;
        return true;
    }
};

module.exports = Letter;
  