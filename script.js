const SUBMIT_BTN = document.querySelector("button");
console.log(SUBMIT_BTN)
const PWORDS = document.querySelectorAll("input[type='password']")

let pword_check = () => {
    for (pword of PWORDS) {
        console.log(pword);
    }
}

SUBMIT_BTN.addEventListener("onsubmit",pword_check)