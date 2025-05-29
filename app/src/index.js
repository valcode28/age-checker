const ageInput = document.querySelector("#ageInput");
const checkBtn = document.querySelector("#checkBtn");
const messageAge = document.querySelector("#message")

let currentAge;
let message;


checkBtn.addEventListener("click", function () {
    ageChecker()
});

const ageChecker = () => {
    currentAge = ageInput.value;

    if (currentAge <= 10) {
        message = "You are still a child";
    } else if (currentAge > 10 && currentAge <= 20) {
        message = "You are an teen"
    } else if (currentAge >= 40 && currentAge <= 80) {
        message = "You are an adult"
    } else {
        message = "You are old"
    }

    messageAge.innerHTML = message;
}