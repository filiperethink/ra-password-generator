import data from "./data.js";

const buttonElement = document.getElementById("generate-password");
const uppercaseButton = document.getElementById("uppercase");
const lowercaseButton = document.getElementById("lowercase");
const numbersButton = document.getElementById("numbers");
const specialCharsButton = document.getElementById("specialChars");
const sizePassword = document.getElementById("password-length");
const passwordDisplay = document.getElementById("password-display");

passwordDisplay.innerText = "Rethink Academy - Gerador de senha segura!";
passwordDisplay.className = "password-display password-display-off";

function handleOptions() {
  return [uppercaseButton, lowercaseButton, numbersButton, specialCharsButton]
    .filter((element) => element.checked)
    .map((element) => data[element.id]);
}

buttonElement.addEventListener("click", () => {
  passwordDisplay.className = "password-display";

  const options = handleOptions();
  if (options.length <= 0) {
    passwordDisplay.innerText = "Selecione uma opção!";
    return;
  }

  let passwordText = "";

  passwordText = generateRandomPassword(sizePassword.value, options);
  passwordDisplay.innerText = passwordText;
});

function generateRandomPassword(size, items) {
  let response = "";
  const allChars = [];
  items.map((item) => allChars.push(...item));

  for (let index = 0; index < size; index++) {
    const randomIndex = Math.floor(Math.random() * allChars.length);
    response = response.concat(allChars[randomIndex]);
  }
  return response;
}
