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

    let selectedPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(selectedPhrase);
});

function getRandomPhraseAsArray(arr) { 
    let randomNumber = Math.floor(Math.random() * arr.length); 
    let randomPhrase = arr[randomNumber];
    return randomPhrase.split(""); 
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


