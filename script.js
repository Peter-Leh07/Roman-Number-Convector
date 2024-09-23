/*nahráme si hodnoty z DOM*/
const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output")
convertBtn.addEventListener("click" , (event) => {event.preventDefault()

let number = numberInput.value;
/*vylúčime situácie pre ktoré by sa kód nemal spustiť*/
if(number == null){
    output.textContent = "Please enter a valid number"
}
else if(number <= -1){
    output.textContent = "Please enter a number greater than or equal to 1"
}
else if(number >= 4000){
    output.textContent = "Please enter a number less than or equal to 3999"
}
else{
let multipliedNumber = [];
let romanNumber = []

const splittedNumber = number.toString().split(''); // Rozdelíme číslo na pole číslic
/*funkcia roznásobí reťazec na hodnotou 10 na x */
const multiplyNumber = (array) => {
    let toPower = array.length-1; // Inicializujeme premennú toPower pred cyklom
    for (let i = 0; i < array.length; i++) {
        multipliedNumber.push(array[i] * (10 ** toPower)); // Vypočítame násobok
        toPower--; // Znížime toPower
    }
};
multiplyNumber(splittedNumber); // Voláme funkciu na pole


/*čísla v array multipliedNumber konvertuje do rímskej sústavy*/ 
for(let i=0; i < multipliedNumber.length; i++){
    if(multipliedNumber[i] === 3000){
        romanNumber.push("MMM")
    }
    else if(multipliedNumber[i] === 2000){
        romanNumber.push("MM")
    }
    else if(multipliedNumber[i] === 1000){
        romanNumber.push("M")
    }
    else if(multipliedNumber[i] === 900){
        romanNumber.push("CM")
    }
    else if(multipliedNumber[i] === 800){
        romanNumber.push("DCCC")
    }
    else if(multipliedNumber[i] === 700){
        romanNumber.push("DCC")
    }
    else if(multipliedNumber[i] === 600){
        romanNumber.push("DC")
    }
    else if(multipliedNumber[i] === 500){
        romanNumber.push("D")
    }
    else if(multipliedNumber[i] === 400){
        romanNumber.push("CD")
    }
    else if(multipliedNumber[i] === 300){
        romanNumber.push("CCC")
    }
    else if(multipliedNumber[i] === 200){
        romanNumber.push("CC")
    }
    else if(multipliedNumber[i] === 100){
        romanNumber.push("C")
    }
    else if(multipliedNumber[i] === 90){
        romanNumber.push("XC")
    }
    else if(multipliedNumber[i] === 80){
        romanNumber.push("LCCC")
    }
    else if(multipliedNumber[i] === 70){
        romanNumber.push("LCC")
    }
    else if(multipliedNumber[i] === 60){
        romanNumber.push("LX")
    }
    else if(multipliedNumber[i] === 50){
        romanNumber.push("L")
    }
    else if(multipliedNumber[i] === 40){
        romanNumber.push("XL")
    }
    else if(multipliedNumber[i] === 30){
        romanNumber.push("XXX")
    }
    else if(multipliedNumber[i] === 20){
        romanNumber.push("XX")
    }
    else if(multipliedNumber[i] === 10){
        romanNumber.push("X")
    }
    else if(multipliedNumber[i] === 9){
        romanNumber.push("IX")
    }
    else if(multipliedNumber[i] === 8){
        romanNumber.push("VIII")
    }
    else if(multipliedNumber[i] === 7){
        romanNumber.push("VII")
    }
    else if(multipliedNumber[i] === 6){
        romanNumber.push("VI")
    }
    else if(multipliedNumber[i] === 5){
        romanNumber.push("V")
    }
    else if(multipliedNumber[i] === 4){
        romanNumber.push("IV")
    }
    else if(multipliedNumber[i] === 3){
        romanNumber.push("III")
    }
    else if(multipliedNumber[i] === 2){
        romanNumber.push("II")
    }
    else if(multipliedNumber[i] === 1){
        romanNumber.push("I")
    }
}
output.textContent = romanNumber.join(''); // Zobrazíme výsledok
}});

