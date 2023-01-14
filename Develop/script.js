// Assignment Code

var generateBtn = document.querySelector("#generate");

const numbers = [... '1234567890'];
const lcAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const ucAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
// make sure '"' works
const sCharacters = [...'"', " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"];
console.log(sCharacters);


function passwordCriteria() {
  const passwordLength = prompt(
    "Choose password length between 8 and 128"
  );
  var number = confirm("Press OK to add numbers. Press Cancel to continue without.");
  var lcAlphabet = confirm("Press OK to add lowercase. Press Cancel to continue without.");
  var ucAlphabet = confirm("Press OK to add uppercase. Press Cancel to continue without.");
  var sCharacters = confirm("Press OK to add special characters. Press Cancel to continue without.");
  console.log(passwordLength, number, lcAlphabet, ucAlphabet, sCharacters);
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);

generateBtn.addEventListener("click", writePassword);
