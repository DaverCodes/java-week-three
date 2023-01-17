// Assignment Code

var generateBtn = document.querySelector("#generate");

const numbers = [... '1234567890'];
const lcAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const ucAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
// make sure '"' works the special key \ is not visible in the string
const sCharacters = [...'"', " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"];
let combinedTrue = '';




function passwordCriteria() {
  let passwordLength = prompt(
    "Choose password length between 8 and 128"
  );
  const numbers = confirm("Press OK to add numbers. Press Cancel to continue without.");
  const lcAlphabet = confirm("Press OK to add lowercase. Press Cancel to continue without.");
  const ucAlphabet = confirm("Press OK to add uppercase. Press Cancel to continue without.");
  const sCharacters = confirm("Press OK to add special characters. Press Cancel to continue without.");
  console.log(passwordLength, numbers, lcAlphabet, ucAlphabet, sCharacters);
  
  if (numbers) combinedTrue += [... '1234567890'];
  if (lcAlphabet) combinedTrue += [...'abcdefghijklmnopqrstuvwxyz'];
  if (ucAlphabet) combinedTrue += [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  if (sCharacters) combinedTrue += [...'"', " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"]
  console.log(combinedTrue);

}
  // const passwordLength = prompt(
  //   "Choose password length between 8 and 128"
  // );
  //if number = true then combinedTrue = number.concat


  // function (checkRequirments) {
  //   if (number) { 

    // var hasNumber = /\d/;
      
  //   } else {
      
  //   }
    
  // }

// const combined = functoion
// if const=true add const to combined
// pword = pwordNum + pwordAlphaUp + pwordAlphaLow + pwordChar


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// function random_item(items)
// {
  
// return items[Math.floor(Math.random()*items.length)];
     
// }

// console.log(random_item(numbers));



// Add event listener to generate button
generateBtn.addEventListener("click", passwordCriteria);

generateBtn.addEventListener("click", writePassword);
