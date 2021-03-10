// Assignment Code
var generateBtn = document.querySelector("#generate");
//Assigns different character types to variables
var lower_chars = "abcdefghijklmnopqrstuvwxyz";
var upper_chars = "ABCDEFGHIJKLMNOPQRSTuVWXYZ";
var special_chars = "!@#$%&*?:;";
var nums = "1234567890";
//creates empty variables for functions below so they can be reassigned and still have a global scope.
var newVariable = "";
var passwordLength = 0;
//Function that creates a random string, length will be what the user inputs as passwordLength once within the generatePassword() function.
function randomString() {
  var pwd = "";
  for (var i = 0; i < passwordLength; i++) {
  pwd += newVariable.charAt(Math.floor(Math.random() * newVariable.length));
  }
  return pwd;
}
//Function that runs once the page is opened.
function generatePassword() {
  //Assigns user prompts to variables so their value is stored.
  passwordLength = prompt("What's the password length? (Between 8-128 characters)");
  var isLowerCase = confirm("Should lower case characters be included?");
  var isUpperCase = confirm("Should upper case characters be included?");
  var ifNumbers = confirm("Should numbers be included?");
  var specialCharacters = confirm("Should it include special characters?");
  //reassigns newVariable to original blank value so that when the user hits the Generate button again the value is reset.
  newVariable = "";
  
  //Ensures criteria for length of password is honored, otherwise process restarts.
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters!");
    generatePassword();
  }
  //Adds the different character types to newVariable based on what the user input, newVariable is what we'll draw our random string from.
  if (isLowerCase) {
    newVariable += lower_chars;
  }

  if (isUpperCase) {
    newVariable += upper_chars;
  }

  if (ifNumbers) {
    newVariable += nums;
  }
  
  if (specialCharacters) {
    newVariable += special_chars;
  }
  //Ensures process restarts if user does not select any criteria.
  if (isLowerCase == false && isUpperCase == false && ifNumbers == false && specialCharacters == false) {
    alert("You must select at least one character type in order to generate a password!");
    generatePassword();
  }
  //final input back to user, variables dependent on user input.
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
