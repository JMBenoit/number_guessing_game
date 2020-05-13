let $ = (value) => document.getElementById(value)

let secretNum = parseInt(Math.random()*100)
let remainingGuesses = 10

function updateCount()
{
    remainingGuesses--
    $('remainGuesses').innerText = remainingGuesses
}

function winner()
{
    $('guessResultsText').innerText = "You guessed it! Congrats, you win!"
    $('guessInput').classList.add('hide')
    $('submitGuess').classList.add('hide')
    $('playAgainContainer').classList.remove('hide')
}

function loser()
{
    $('guessResultsText').innerText = "The number was " + secretNum + ". Sorry, try again."
    $('guessInput').classList.add('hide')
    $('submitGuess').classList.add('hide')
    $('playAgainContainer').classList.remove('hide')
}

$('submitGuess').addEventListener('click', function() {
    let currGuess = $('guessInput').value
    if (currGuess != '') {
        if (currGuess == secretNum) {
            winner()
        }
        else if (currGuess > secretNum) {
            $('guessResultsText').innerText = "Your guess is too high. Try again."
        }
        else if (currGuess < secretNum) {
            $('guessResultsText').innerText = "Your guess is too low. Try again."
        }
        else if (isNaN(currGuess) == true) {
            $('guessResultsText').innerText = "That was not a number. Try again."
        }
        $('guessInput').value = ''
        updateCount()
        if (remainingGuesses == 0) {
            loser()
        }
    }   
})


$('guessInput').onkeypress=function(e){
    if(e.keyCode==13){
        $('submitGuess').click();
    }
}

$('resetButton').addEventListener('click', function() {
    secretNum = parseInt(Math.random()*100)
    $('guessResultsText').innerText = "Good Luck!"
    $('guessInput').classList.remove('hide')
    $('submitGuess').classList.remove('hide')
    $('playAgainContainer').classList.add('hide')
    remainingGuesses = 10
    $('remainGuesses').innerText = remainingGuesses
})