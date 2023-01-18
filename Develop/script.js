// Assignment Code

var generateBtn = document.querySelector("#generate");
var combinedTrue = '';
var password = '';

function generatePassword() {
  var passwordLength = prompt(
    "Choose password length between 8 and 128"
  );
  
  
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
  //parseinit takes the argument introduced in the prompt and changes the boolean into an integer thats specifically used to define SCALE
  passwordLength = parseInt(passwordLength)
  
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
  
  if (numbers) combinedTrue += [... '1234567890'];
  if (lcAlphabet) combinedTrue += [...'abcdefghijklmnopqrstuvwxyz'];
  if (ucAlphabet) combinedTrue += [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'];
  if (sCharacters) combinedTrue += [...'"', " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"]
  console.log(combinedTrue);
  const ultimateTrue = [combinedTrue]

  const shuffledCombo = ultimateTrue.sort((a,b) => 0.5 - Math.random())
  console.log(shuffledCombo);

  for (let i = 0; i < passwordLength; i++) {
    var passwordShuffle = Math.floor(Math.random() * combinedTrue.length);
    password = combinedTrue[passwordShuffle];
  }

return password

  
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", generatePassword);

generateBtn.addEventListener("click", writePassword);
