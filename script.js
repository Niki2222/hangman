let lifeNo = parseInt(document.getElementById('life-no').innerHTML);
let wordsList = ['MATEMATICA', 'AFARA', 'BUCURIE', 'INVATARE', 'PROGRAMARE', 
    'INSPIRATIE', 'PRIETENIE', 'APA', 'BIBLIOTECA'];
let myWord;
let updatedWord = [];

function generateRandomWord() {
    let randomWord = wordsList[Math.floor(Math.random() * (6 - 0) + 0)];
    myWord = randomWord.split('');
    document.getElementById('life-no').innerHTML = 7;
}

function wordToFind() {
    generateRandomWord();
    for (let i = 0; i < myWord.length; ++i) {
        updatedWord[i] = '_';
        document.getElementById('word-to-find').innerHTML += `${updatedWord[i]}`;
    }
    updateWordToFind();
    document.getElementById('win_loose').innerHTML = '';
}

function chooseLetter() {
    let letterToSearch = document.getElementById('letter-to-search').value.toUpperCase();
    let isFound = 0;
    for (let i = 0; i < myWord.length; ++i) {
        if (myWord[i] === letterToSearch) {
            isFound = 1;
            updatedWord[i] = letterToSearch;
            updateWordToFind();
        } 
    }
    if (isFound === 0) {
        --lifeNo;
        if (lifeNo === 0) {
            document.getElementById('win_loose').innerHTML = `<h1>YOU LOST, TRY AGAIN!!!!</h1>`;
        }
    }
    document.getElementById('life-no').innerHTML = lifeNo;
}

function updateWordToFind() {
    document.getElementById('word-to-find').innerHTML = "";
    for (let i = 0; i < myWord.length; ++i) {
        document.getElementById('word-to-find').innerHTML += `${updatedWord[i]} `;
    }
    if (lifeNo > 0 && myWord.every((value, index) => value === updatedWord[index])) {
        document.getElementById('win_loose').innerHTML = `<h1>YOU WON!!!!</h1>`;
    }
}





