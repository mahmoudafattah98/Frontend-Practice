const generateButton = document.querySelector("button");
const textBox = document.querySelector(".textBox");
let small1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let small = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let cap = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let symbol = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];
let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

let randCharacter = [["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
["!", "@", "#", "$", "%", "^", "&", "*", "_"],
["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
]


function generate2() {
    let string = "";
    for (let index = 0; index < 12; index++) {
        let randType = random(randCharacter.length)
        let randSelection = random(randCharacter[randType].length)
        string = string + randCharacter[randType][randSelection];

    }
    textBox.value = string;
    console.log(string);
}

function copy() {
    navigator.clipboard.writeText(textBox.value);

}

function generate() {
    let str = "";
    for (i = 0; i < 3; i++) {
        let smallN = random(small.length)
        let capN = random(cap.length)
        let symbolN = random(symbol.length)
        let numN = random(num.length)

        str = str + small[smallN] + cap[capN] + symbol[symbolN] + num[numN]
    }
    console.log(str)
    textBox.value = str
}
function random(length) {
    let rand = Math.floor(Math.random() * length)
    return rand
}