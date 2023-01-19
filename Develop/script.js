// Assignment Code

var generateBtn = document.querySelector("#generate");
var combinedTrue = '';
// var password = '';
var passwordLength = '';


//this new form of writing out strings was fun but it may be the root cause of my concat issue, I will nbe revisiting this
const numbers = [... '1234567890'];
const lcAlphabet = [...'abcdefghijklmnopqrstuvwxyz'];
const ucAlphabet = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
const sCharacters = [...'"', " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"]

function passwordChoices() {
  // when the user writes their desired length, it is a boolean and needs to be redefined as ain integer- parseInt to the rescue
  passwordLength = parseInt(prompt(
    "Choose password length between 8 and 128"
  ));
// I decided to add different alerts to better guide the user
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
  //the confirm function is a true or false statement- making my life easier 
  var numbers = confirm("Press OK to add numbers. Press Cancel to continue without.");
  var lcAlphabet = confirm("Press OK to add lowercase. Press Cancel to continue without.");
  var ucAlphabet = confirm("Press OK to add uppercase. Press Cancel to continue without.");
  var sCharacters = confirm("Press OK to add special characters. Press Cancel to continue without.");
  console.log(passwordLength, numbers, lcAlphabet, ucAlphabet, sCharacters);
  let choice = true;
// im not sure why this didn't work- this should be an acceptable concat statement
  if (choice) {
    let combinedTrue = numbers.concat(lcAlphabet, ucAlphabet, sCharacters);
    console.log(combinedTrue);
    
  };
  
  //if the user chose nothing, this will let them know
  if (!numbers && !lcAlphabet && !ucAlphabet && !sCharacters) {
    alert('you gotta choose something')
    alert('choose at least one prompt')
    alert('please')
    return
  }  

  //this set of statements unfortunately did not work in concat form although they did outside of concat form.
  // combinedTrue.concat += numbers
  // combinedTrue.concat += lcAlphabet
  // combinedTrue.concat += ucAlphabet
  // combinedTrue.concat += sCharacters
  
}

//this function is designed to take the password length variable that we converted to an integer and utilize it to shorten all of
//the combined arrays, but that part is not working at this time.
function generatePassword() {
  var password = '';
  for (var i = 0; i < passwordLength; i++) {
    var scrambledEggs = Math.floor(Math.random() * combinedTrue.length);
    password = password + combinedTrue[scrambledEggs]
    
  }
  return password;
}

// function writePassword() {
  
  function writePassword() { 
    var promptResults = passwordChoices();
    if(promptResults) {
      var passwordAlpha = generatePassword();
      var passwordText = document.querySelector("#password");
      
      passwordText.value = passwordAlpha;
      
      
    }
  };
  console.log(password);

// generateBtn.addEventListener("click", generatePassword);

generateBtn.addEventListener("click", writePassword);
