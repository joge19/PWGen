const variables1 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "§", "%", "&", "/", "(", ")", "?", "!", "<", ">", "#", "=", "_"]
const variables2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
const btnOne = document.getElementById("btn-1")
const btnTwo = document.getElementById("btn-2")
const btnCopy = document.getElementById("btn-copy")
const pwEl = document.getElementById("pw-el")

let PassWord = [];

btnOne.addEventListener("click", function() {
    createPW(variables1)
})
btnTwo.addEventListener("click", function() {
    createPW(variables2)
})

let pwCopy = ""
btnCopy.addEventListener("click", function() {
    for (let i = 0; i < PassWord.length; i++) {
        pwCopy += PassWord[i]
    }
    navigator.clipboard.writeText(pwCopy)
})

function createPW(variables) {
    let pwLength = document.getElementById("number").value;
    for (let a = 0; a < pwLength; a++) {
        x = Math.floor(Math.random() * variables.length);
        PassWord.push(variables[x]);
    }
    for (let b = 0; b < pwLength; b++) {
        pwEl.textContent += PassWord[b];
    }
}

function resetPw() {
    PassWord = [];
    pwEl.textContent = "";
}
