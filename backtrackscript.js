let overallIndex = 1;
let posOnLineIndex = 1;
let finalString = "";
let newNumberPasses;
let amountToCheck;


function setupPage() {

    generateNewNumber();
}

function generateNewNumber() {
    console.log("generate");
    let newNumber = Math.floor(Math.random() * 9 + 1);
    newNumber.toString();
    checkNumber(newNumber);

}

function checkNumber(newNumber) {
    console.log("check");
    let lineIndex = Math.floor(overallIndex / 9);
    if (lineIndex == 0) {
        lineIndex = 1;
    }


    if (finalString.length == 0) {
        finalString = newNumber;
        console.log("final string " + finalString);
        generateNewNumber();
    } else {
        let amountToCheck = 9 - ((9 * lineIndex) - overallIndex);
        console.log("final string " + finalString);
        
        let yo = finalString;
console.log(finalString.type);

        for (i = 0; i < amountToCheck; i++) {

            let charToCheck = finalString.charAt(0);
            console.log(charToCheck);
            /*
            let charToCheck = finalString.charAt(overallIndex - i);
            if (finalString.charAt(stringIndex) == newNumber) {
                console.log("picked an alread picked number");
                newNumberPasses = false;
                break;
            } else {
                newNumberPasses = true;
            }
            */
        }
        if (newNumberPasses) {
            finalString.concat(newNumber);

        } else {
            generateNewNumber();
        }
    }
}
