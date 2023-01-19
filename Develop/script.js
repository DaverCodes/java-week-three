// Assignment Code

var generateBtn = document.querySelector("#generate");
var combinedTrue = '';
// var password = '';
var passwordLength = '';

const numbers = [... '1234567890'];
const lcAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const ucAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const sCharacters = [...'"', " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"];

function passwordChoices() {
  passwordLength = parseInt(prompt(
    "Choose password length between 8 and 128"
  ));

  if (passwordLength < 8) {
    alert('this password is too short')
    alert('choose a number greater than 8')
    return
  }
  if (passwordLength > 128 ) {
    alert("I'm getting carpal tunnel just thinking about writing a password that long")
    alert("it's best to keep your password under 128")
    alert("let's try this again")
    return
  }
  if(isNaN(passwordLength)) {
    alert ("For this function, the number cannot be written out")
    return
  }
  
  var numbers = confirm("Press OK to add numbers. Press Cancel to continue without.");
  var lcAlphabet = confirm("Press OK to add lowercase. Press Cancel to continue without.");
  var ucAlphabet = confirm("Press OK to add uppercase. Press Cancel to continue without.");
  var sCharacters = confirm("Press OK to add special characters. Press Cancel to continue without.");
  console.log(passwordLength, numbers, lcAlphabet, ucAlphabet, sCharacters);
  
  
  if (!numbers && !lcAlphabet && !ucAlphabet && !sCharacters) {
    alert('you gotta choose something')
    alert('choose at least one prompt')
    alert('please')
  }  
  combinedTrue.concat += numbers
  combinedTrue.concat += lcAlphabet
  combinedTrue.concat += ucAlphabet
  combinedTrue.concat += sCharacters

  console.log(combinedTrue);

  
}

function writePassword() { 
  var promptResults = passwordChoices();
  if(promptResults) {
    var passwordAlpha = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = passwordAlpha;
    
    
  }
};
console.log(password);

function generatePassword() {
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomLetter = Math.floor(Math.random() * combinedTrue.length);
    password = password + combinedTrue[randomLetter]

  }
  return password;
}

// function writePassword() {


// generateBtn.addEventListener("click", generatePassword);

generateBtn.addEventListener("click", writePassword);
