const gameHTML = (hint, guesses) => `
    <div class="game">
        <div class="wrapper">
            <div class="hangman">
            </div>
            <div class="hangman__content">
                <div class="word">
                kjhjhg
                </div>
                <div class="hint">
                    <div class="hintQuestions">Hint: ${hint}</div>
                </div>
                <div class="incorrectGuesses">
                    <div class="incorrectGuesses__content">Incorrect guesses: <span class="falseGuesses">${guesses}/6</span></div>
                </div>
                <div class="virtualKeyboard">
                </div>
            </div>
        </div>
    </div>
`
export default gameHTML;
