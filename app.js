// VARIABLES
qwerty = document.querySelector('#qwerty');
phrase = document.querySelector('#phrase');
mainButton = document.querySelector('.btn__reset');
wrongGuessCounter = 0;

// PHRASES ARRAY
const phrases = [
    "BREAK A LEG",
    "PIECE OF CAKE",
    "EASY COME EASY GO",
    "THE EARLY BIRD GETS THE WORM",
    "PRACTICE MAKES PERFECT"
];

// EVENT LISTENER FOR START BUTTON
mainButton.addEventListener('click', () => {
    let hideOverlay = document.querySelector('#overlay');
    hideOverlay.style.display = 'none';

    let selectedPhrase = getRandomPhraseAsArray(phrases);
    addPhraseToDisplay(selectedPhrase);
});

// FUNCTION: GET RANDOM PHRASE AS ARRAY
function getRandomPhraseAsArray(arr) { 
    let randomNumber = Math.floor(Math.random() * arr.length); 
    let randomPhrase = arr[randomNumber];
    return randomPhrase.split(""); 
}

// FUNCTION: ADD PHRASE TO DISPLAY
function addPhraseToDisplay(arr) { // Loops through characters and adds to display
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

// FUNCTION: CHECK LETTER IN PHRASE
function checkLetter(letter) { // Checks each letter in the phrase
    let liElements = document.querySelectorAll('#phrase ul li');
    let match = null;

    for (let i = 0; i < liElements.length; i++) {
        let currentLetter = liElements[i];

        if (currentLetter.textContent.toUpperCase() === letter.toUpperCase()) {
            currentLetter.classList.add('show');
            match = letter;
        }
    }
    return match; // Returns results of the loop
}

// EVENT LISTENER: ON-SCREEN KEYBOARD
qwerty.addEventListener('click', (event) => {
    let chosenLetter = event.target; // Get the element that was clicked

    // Check if the clicked element is a button and doesn't already have the "chosen" class
    if (chosenLetter.tagName === "BUTTON" && !chosenLetter.classList.contains("chosen")) {
        console.log("Valid button clicked:", chosenLetter.textContent);
    }
});
