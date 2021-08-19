import {Quote} from './Quote.js';
class Game {

    currentStep = 0;
    lastStep = 5;

    quotes = [{
        text: 'python',
        category: 'Programming language'
    },{
        text: 'Justynka Wojszyczek',
        category: 'Tania labadziara'
    },{
        text: 'Szympiesio',
        category: 'Mily piesio'
    },{
        text: 'Lajcior',
        category: 'Mlody rockstar'
    },{
        text: 'Bedoes',
        category: 'Mlody Borek'
    },{
        text: 'Pascal',
        category: 'Best programming language'
    },{
        text: 'Messi',
        category: 'Best football player'
    },{
        text: 'Kajgus Marlsen',
        category: 'Best chess player'
    },{
        text: 'Dr Dre',
        category: 'Beats by...'
    },{
        text: 'Robert Lewangoalski',
        category: 'Sniper from Poland'
    },{
        text: 'Ngolo ngolo Kante',
        category: `Mais comment il s'appelle?`
    },{
        text: 'Maestro Kimpembe',
        category: 'Maestro...'
    },{
        text: 'Jozwiak',
        category: 'Polski Ronaldinho Gaucho'
    },{
        text: 'Aleksander Wyrwas',
        category: 'Bestia z Jarocina'
    },{
        text: 'Hondov',
        category: 'Wynalazca rolek'
    },{
        text: 'Srebrny Brek',
        category: 'Kurwa widzisz mnie?'
    }];

    constructor({
        lettersWrapper,
        categoryWrapper,
        wordWrapper,
        outputWrapper}) {

            this.lettersWrapper = lettersWrapper;
            this.categoryWrapper = categoryWrapper;
            this.wordWrapper = wordWrapper;
            this.outputWrapper = outputWrapper;

            const {text, category} = this.quotes[Math.floor(Math.random() * this.quotes.length)];
            this.categoryWrapper.innerHTML = category;
            this.quote = new Quote(text);
    }

    guess(letter, e) {
        e.target.disabled = true;
        const isCorrect = this.quote.guess(letter);
        if (!isCorrect) {
            this.currentStep++;
            document.getElementsByClassName('step') [this.currentStep].style.opacity = 1;
        } 

        if (this.currentStep === this.lastStep) {
            this.losing();
        }
        else this.drawQuote();
        
    }

    drawLetters() {
        for (let i = 10; i < 36; i++) {
            const label = (i).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (e) => this.guess(label, e)); 
            this.lettersWrapper.appendChild(button);
        }
    }

    drawQuote() {
        const content = this.quote.getContent();
        this.wordWrapper.innerHTML = content;
        if (!content.includes('_')) {
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('step') [this.currentStep].style.opacity = 1;
        this.drawQuote();
        this.drawLetters();
    }

    winning() {
        this.wordWrapper.innerHTML = "BRAVISSIMO!";
        this.lettersWrapper.innerHTML = '';
    }

    losing() {
        this.wordWrapper.innerHTML = "Bardzo się starałeś, lecz z gry wyleciałeś hehe";
        this.lettersWrapper.innerHTML = '';
    }
}

const game = new Game ({
    lettersWrapper: document.getElementById('letters'),
    categoryWrapper: document.getElementById('category'),
    wordWrapper: document.getElementById('word'),
    outputWrapper: document.getElementById('output')
});
game.start();
