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

function addPhraseToDisplay(arr) { //To loop through an array of chracters and add to display
    let phraseUl = document.querySelector('#phrase ul');

    for (let i = 0; i < arr.length; i++) {
        let character = arr[i];
        
        let li = document.createElement('li');
        li.textContent = character;

        if (character !== " ") {
            li.classList.add('letter');
        } else {
            li.classList.add('space');
        }

        phraseUl.appendChild(li);
    }
}

addPhraseToDisplay(["H", "E", "L", "L", "O", " ", "W", "O", "R", "L", "D"]);
