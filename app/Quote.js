export class Quote {
    constructor(text) {
        this.text = text;
        this.guessed = [];
    }

    getContent() {
        let content = "";
        for (const char of this.text) {
            if (char == ' ' || this.guessed.includes(char)) {
                content += char;
            }

            else content += '_';
        }

        return content;
    }

    guess(letter) {
        const upperCaseLetter = letter.toUpperCase();
        const lowerCaseLetter = letter;

        if (this.text.includes(upperCaseLetter)) {
            this.guessed.push(upperCaseLetter);
            if (this.text.includes(lowerCaseLetter)) {
                this.guessed.push(lowerCaseLetter);
            }
            return true;
        }

        if (this.text.includes(lowerCaseLetter)) {
                this.guessed.push(lowerCaseLetter);
                if (this.text.includes(upperCaseLetter)) {
                    this.guessed.push(upperCaseLetter);
                }
                return true;
            }

        return false;
    }
}