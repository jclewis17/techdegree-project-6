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


mainButton.addEventListener('click', () => { // Code contains resets so whether Start Game, Play Again or Try Again is clicked, game is always reset to default for new game
    let hideOverlay = document.querySelector('#overlay');
    hideOverlay.style.display = 'none';

    wrongGuessCounter = 0; //Reset guess counter

    let showOverlay = document.querySelector('#overlay');
    showOverlay.classList.remove('lose', 'win');

    let phraseUl = document.querySelector('#phrase ul'); //Remove current phrase
    phraseUl.innerHTML = "";

    let keyboardButtons = document.querySelectorAll('#qwerty button');
    keyboardButtons.forEach(button => { //Resets all the letters on the keyboard
        button.classList.remove('chosen'); 
        button.disabled = false;
    });

    let lives = document.querySelectorAll('.tries img');
    lives.forEach(heart => heart.src = "images/liveHeart.png"); // Resets all hearts

    let selectedPhrase = getRandomPhraseAsArray(phrases); // Picks a new phrase
    addPhraseToDisplay(selectedPhrase); 
});



function getRandomPhraseAsArray(arr) { 
    let randomNumber = Math.floor(Math.random() * arr.length); 
    let randomPhrase = arr[randomNumber];
    return randomPhrase.split(""); 
}


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

function checkLetter(letter) { // Checks each letter in the phrase
    let liElements = document.querySelectorAll('#phrase ul li');
    let match = null;

    for (let i = 0; i < liElements.length; i++) { //Check each letter of chosen phrase by looping through each li element
        let currentLetter = liElements[i];

        if (currentLetter.textContent.toUpperCase() === letter.toUpperCase()) {
            currentLetter.classList.add('show');
            match = letter;
        }
    }
    return match; // Returns results of the loop
}


qwerty.addEventListener('click', (event) => {
    let chosenLetter = event.target;

    if (chosenLetter.tagName !== "BUTTON") {
        return; // When clicking the white space, this code immediatley exits the function
    }

    if (!chosenLetter.classList.contains("chosen")) {
        chosenLetter.classList.add("chosen"); // Add "chosen" class to the clicked button
        chosenLetter.disabled = true;
    }

    let letterFound = checkLetter(chosenLetter.textContent)
    
    if (letterFound === null) {
        wrongGuessCounter++;
        let lives = document.querySelectorAll('.tries img')
        if (lives.length > 0) {
            lives[wrongGuessCounter - 1].src = "images/lostHeart.png"; //After checking for wrong guess (letterFound = null), replaces heart image starting with index 0
        }
    }

    let letterClassLi = document.querySelectorAll('.letter');
    let letterClassShow = document.querySelectorAll('.show');

    if (letterClassLi.length === letterClassShow.length) { //Take the two variables letterClassLi and letterClassShow and compares their length to determine a win condition
        let showOverlay = document.querySelector('#overlay');
        showOverlay.classList.add('win');
        showOverlay.style.display = 'flex';

        let endLi = document.querySelectorAll('#phrase ul li');
        endLi.forEach(li => { //Hide all lie elements in phrase
        li.style.display = "none"; 
    });

        let winHeading = document.querySelector('#overlay h2');
        winHeading.textContent = "YOU WON!"

        let endButton = document.querySelector('#overlay a');
        endButton.textContent = "Play Again";
    }

    if (wrongGuessCounter > 4) {
        let showOverlay = document.querySelector('#overlay');
        showOverlay.classList.add('lose');
        showOverlay.style.display = 'flex';

        let endLi = document.querySelectorAll('#phrase ul li');
        endLi.forEach(li => { //Hide all lie elements in phrase
        li.style.display = "none"; 
    });
        
        let loseHeading = document.querySelector('#overlay h2');
        loseHeading.textContent = "SORRY, YOU LOSE"
        
        let endButton = document.querySelector('#overlay a');
        endButton.textContent = "Try Again";
    }
    
});