let lifeNo = parseInt(document.getElementById('life-no').innerHTML);
let myword = ['M', 'A', 'T', 'E', 'M', 'A', 'T', 'I', 'C', 'A'];
let updatedWord = [];

function wordToFind() {
    for (let i = 0; i < myword.length; ++i) {
        updatedWord[i] = '_';
        document.getElementById('word-to-find').innerHTML +=
        `${updatedWord[i]} `;
    }
    console.log(updatedWord);
}
wordToFind();

function chooseLetter() {
    let letterToSearch = document.getElementById('letter-to-search').value.toLocaleUpperCase();
    let isFound = 0;
    for (let i = 0; i < myword.length; ++i) {
        if (myword[i] === letterToSearch) {
            isFound = 1;
            updatedWord[i] = letterToSearch;
            updateWordToFind();
        } 
    }
    if (isFound === 0) {
        --lifeNo;
        if (lifeNo === 0) {
            document.getElementById('win_loose').innerHTML = `
            <h1>YOU LOST, TRY AGAIN!!!!</h1>`;
        }
    }
    document.getElementById('life-no').innerHTML = lifeNo;
}

function updateWordToFind() {
    document.getElementById('word-to-find').innerHTML = "";
    for (let i = 0; i < myword.length; ++i) {
        document.getElementById('word-to-find').innerHTML +=
        `${updatedWord[i]} `;
    }
    if (lifeNo > 0 && myword.every((value, index) => value === updatedWord[index])) {
        document.getElementById('win_loose').innerHTML = `
        <h1>YOU WON!!!!</h1>`;
    }
}


