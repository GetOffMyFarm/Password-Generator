// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower_chars = "abcdefghijklmnopqrstuvwxyz";
var upper_chars = "ABCDEFGHIJKLMNOPQRSTuVWXYZ";
var special_chars = "!@#$%&*?:;";
var nums = "1234567890";
var newVariable = "";
var passwordLength = 0;
function randomString() {
  var pwd = "";
  for (var i = 0; i < passwordLength; i++) {
  pwd += newVariable.charAt(Math.floor(Math.random() * newVariable.length));
  }
  return pwd;
}

function generatePassword() {
  passwordLength = prompt("What's the password length? (Between 8-128 characters)");
  var isLowerCase = confirm("Should lower case characters be included?");
  var isUpperCase = confirm("Should upper case characters be included?");
  var ifNumbers = confirm("Should numbers be included?");
  var specialCharacters = confirm("Should it include special characters?");
  newVariable = "";
  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters!");
    generatePassword();
  }

  if (isLowerCase) {
    newVariable += lower_chars.toLowerCase();
  }

  if (isUpperCase) {
    newVariable += upper_chars.toUpperCase();
  }

  if (ifNumbers) {
    newVariable += nums;
  }
  
  if (specialCharacters) {
    newVariable += special_chars;
  }

  if (isLowerCase == false && isUpperCase == false && ifNumbers == false && specialCharacters == false) {
    alert("You must select at least one character type in order to generate a password!");
    generatePassword();
  }
  
  return randomString();
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
