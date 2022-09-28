const allnumbers = document.querySelectorAll('.numbers')
const symbols = document.querySelectorAll('.symbol')
const equalButton = document.querySelectorAll('.equal')
const clearButton = document.querySelectorAll('.clear')


const display = document.querySelectorAll('.display')

let sign = '';
let result = null;
let outputone = '';
let outputtwo = '';
let dot = false;


allnumbers.forEach(Number => {
    Number.addEventListener('click',shownumber)
} );
// show function

function shownumber(e){
    outputtwo = outputtwo + e.target.innertext;
    display.innertext = outputtwo
}

