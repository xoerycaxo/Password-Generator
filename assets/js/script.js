// Assignment code here
function generatePassword() {
  var criteria = {
    lowercase: false,
   uppercase: false,
   numbers: false,
   specialCharacters: false,
   length: 0
  }

 if (confirm("Use lowercase characters?")) criteria.lowercase = true;

 if (confirm("Use uppercase characters?")) criteria.uppercase = true;

 if (confirm("Use numbers?")) criteria.numbers = true;

 if (confirm("Use special characters?")) criteria.specialCharacters = true;

 if (!criteria.lowercase && !criteria.uppercase && !criteria.numbers && !criteria.specialCharacters) {
   return "You must select at least one criteria.  Please try again.";
 }
 criteria.length = prompt("How long will your password be?");
 criteria.length = Math.max(8, criteria.length);
 criteria.length = Math.min(128, criteria.length);

 var results = "";
 var characters = {
   lowercase: "abcdefghijklmnopqrstuvwxyz",
   uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   numbers: "1234567890",
   specialCharacters: "!@#$%&*",
 }
var allowedCharacters = ""

if (criteria.lowercase) {
  allowedCharacters += characters.lowercase;
}
if (criteria.uppercase) {
  allowedCharacters += characters.uppercase;
}
if (criteria.numbers) {
  allowedCharacters += characters.numbers;
}
if (criteria.specialCharacters) {
  allowedCharacters += characters.specialCharacters;
}
var finishedPassword = ""
for (let i = 0; i < criteria.length; i++) {
  var randomNumber = Math.floor(Math.random()*allowedCharacters.length)
  finishedPassword +=(allowedCharacters[randomNumber])
}
return finishedPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);