// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.

const button = document.getElementById('convert-btn');
let ret = document.getElementById('response');
let div = document.getElementById('output');

function intToRom() {
    let input = document.getElementById('num-input').value;
    div.style.display = "";
    let response = "";
    const romanNumerals = [
        { key: "M", amount: 1000 },
        { key: "CM", amount: 900 },
        { key: "D", amount: 500 },
        { key: "CD", amount: 400 },
        { key: "C", amount: 100 },
        { key: "XC", amount: 90 },
        { key: "L", amount: 50 },
        { key: "XL", amount: 40 },
        { key: "X", amount: 10 },
        { key: "IX", amount: 9 },
        { key: "V", amount: 5 },
        { key: "IV", amount: 4 },
        { key: "I", amount: 1 }
    ];
    if (input > 3999) {
        ret.innerHTML = `Please enter a number less than or equal to 3999`;
        return;
    } if (input < 1) {
        if (input === "") {
            ret.innerHTML = `Please enter a valid number`;
            return;
        }
        else {
            ret.innerHTML = `Please enter a number greater than or equal to 1`;
            return;
        }
    }
    else {
        for (let i = 0; i < romanNumerals.length; i++) {
            // iteration works? cant get the if statement to trigger
            if (input >= romanNumerals[i].amount) {
                input -= romanNumerals[i].amount;
                response += romanNumerals[i].key;
            }
        }
    }

    let answer = `${response}`
    ret.innerHTML = answer;
}


button.addEventListener('click', intToRom)