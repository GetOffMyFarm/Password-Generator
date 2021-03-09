// Assignment Code
var generateBtn = document.querySelector("#generate");
var lower_chars = "abcdefghijklmnopqrstuvwxyz".split();
var upper_chars = "ABCDEFGHIJKLMNOPQRSTuVWXYZ".split();
var special_chars = "!@#$%&*?/:;]}[{\|".split();
var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function generatePassword() {
  var passwordLength = prompt("What's the password length? (Between 8-128 characters)");
  var isLowerCase = confirm("Should lower case characters be included?");
  var isUpperCase = confirm("Should upper case characters be included?");
  var ifNumbers = confirm("Should numbers be included?");
  var specialCharacters = confirm("Should it include special characters?");
  var result = "";
  function randomString(w, x, y, z) {
  var pwd = "";
  var newVariable = w + x + y + z;
    for (var i = 0; i < passwordLength; i++) {
    pwd += newVariable.charAt(Math.floor(Math.random() * newVariable.length));
    }
    return pwd;
  }
  if (isLowerCase && isUpperCase && ifNumbers && specialCharacters) {
   result = randomString(isLowerCase, isUpperCase, ifNumbers, specialCharacters);
  }
  else {
    result = console.log("This still worked.");
  }
 return result;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
