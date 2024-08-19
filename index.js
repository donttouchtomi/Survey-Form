// const email = document.getElementById("email");
// const outputEmail = document.getElementById("outputEmail");

// let emailAddress;

const yes = document.getElementById("Yes");
const no = document.getElementById("No");
const maybe = document.getElementById("Maybe");
const outputRadio = document.getElementById("outputRadio")

const frontendDev = document.getElementById("frontend");
const backendDev = document.getElementById("backend");
const outputCheckbox = document.getElementById("outputCheckbox")

const number = document.getElementById("number");
const outputText = document.getElementById("outputText");

const submit = document.getElementById("submit");

let numberAge;

submit.onclick = function(){

    numberAge = number.value;
    numberAge = Number(numberAge);

    if ( numberAge >= 100){
        outputText.textContent = "You are TOO OLD to enter this site";
        
    } else if ( numberAge >= 0){
        outputText.textContent = "You age can not be below 0";
    
    } else if ( numberAge == 0){
        outputText.textContent = "You can not enter your too young";
    }
    else {
        outputText.textContent = "You must be 18+ to enter this site";
    }

    if( yes.checked) {
        outputRadio.textContent = "Thank You";
    }
    else if (no.checked){
        outputRadio.textContent = "";
    } 
    else if (maybe.checked){
        outputRadio.textContent = "";
    } else {
        outputRadio.textContent = "Please click on an option";
    }

    frontendDev.checked || backendDev.checked ? "" : outputCheckbox.textContent = "Please click on an option";
}
