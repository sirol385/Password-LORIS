function isVercel() {
    return window.location.hostname.includes('vercel.app');
}
function updateHomeButton() {
    const homeButton = document.querySelector('.back-button');
    if (homeButton && isVercel()) {
        homeButton.href = 'https://accueil-loris.vercel.app';
    }
}
const passwordInput = document.getElementById("password");
const copyBtn = document.getElementById("copy-btn");
const generateBtn = document.getElementById("generate");
const lengthInput = document.getElementById("length");
const upperCaseCheck = document.getElementById("uppercase");
const numbersCheck = document.getElementById("numbers");
const symbolsCheck = document.getElementById("symbols");
const copiedMsg = document.getElementById("copied-message");
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "*@-_.!?#%&";
function generatePassword() {
  const length = parseInt(lengthInput.value);
  let chars = lowerCaseLetters; 
  if (upperCaseCheck.checked) chars += upperCaseLetters;
  if (numbersCheck.checked) chars += numbers;
  if (symbolsCheck.checked) chars += symbols;
  if (chars.length === 0) {
    passwordInput.value = "⚠️ Aucune option sélectionnée";
    return;
  }
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  passwordInput.value = password;
  copiedMsg.style.display = "none";
}
function copyPassword() {
  if (passwordInput.value.trim() === "") return;
  navigator.clipboard.writeText(passwordInput.value);
  copiedMsg.style.display = "block";
  setTimeout(() => copiedMsg.style.display = "none", 5000);
}
generateBtn.addEventListener("click", generatePassword);
copyBtn.addEventListener("click", copyPassword);
document.addEventListener('DOMContentLoaded', updateHomeButton);