function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.toString = function () {
        if (!this.guessed) {
            //If INPUT guessed is !=== ( true) letter then PUSH "_"
            return "_";

        } else {
            //if INPUT gueesed is ===( false) letter then PUSH LETTER
            if (this.guessed) {
                return this.letter;
            }

        }
    }        
}

module.export = Letter; 