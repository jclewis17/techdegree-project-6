// VARIABLES
qwerty = document.querySelector('#qwerty');
phrase = document.querySelector('#phrase');
mainButton = document.querySelector('.btn__reset');
wrongGuessCounter = 0;

//PHRASES ARRAY
const phrases = [
    "BREAK A LEG",
    "PIECE OF CAKE",
    "EASY COME EASY GO",
    "THE EARLY BIRD GETS THE WORM",
    "PRACTICE MAKES PERFECT"
];

mainButton.addEventListener('click', () => {
    let hideOverlay = document.querySelector('#overlay');
    hideOverlay.style.display = 'none';
});

function getRandomPhraseAsArray(arr) { //To pick a random phrase for the player to guess
    let randomNumber = Math.floor(Math.random() * arr.length);
    return randomNumber;
}

console.log(getRandomPhraseAsArray(phrases));