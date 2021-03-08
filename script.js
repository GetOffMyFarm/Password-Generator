// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var passwordLength = prompt("What's the password length? (Between 8-128 characters)");
    var isLowerCase = confirm("Should lower case characters be included?");
    var isUpperCase = confirm("Should upper case characters be included?");
    var ifNumbers = confirm("Should numbers be included?");
    var specialCharacters = confirm("Should it include special characters?");
    

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
