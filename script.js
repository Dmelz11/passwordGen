// Assignment Code


function generatePassword() {
  var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  var numberChars = "0123456789";
  var symbolChars = "~`!@#$%^&*()_-+=}{[]':;?/<>,.";

  let password = "";
  let charSet = "";

  if (confirm("include uppercase characters?")) {
    charSet += uppercaseChars;
  }
  if (confirm("include lowercase characters?")) {
    charSet += lowercaseChars;
  }
  if (confirm("include numbers?")) {
    charSet += numberChars;
  }
  if (confirm("include symbols?")) {
    charSet += symbolChars;
  }
//Using prompt for minimum or maximum length criteria and alerts for invalid inputs.
var length = prompt("Choose the length of your password (between 8 and 128 characters):");

  if (charSet ==="") {
    alert("Please select at least one character option");
    return;
  }

  if (length < 8 || length > 128) {
    alert("Invalid length.Please enter a length between 8 and 128 characters.");
    return; 
  }
  //using Math.floor/Math.random to run loop on character options.
  for (let i = 0; i < length; i++) {
    const randomIndex= Math.floor(Math.random ()* charSet.length);
    password += charSet[randomIndex];
     }
return password;
}
// Write password to the #password input
function writePassword (){
  var generatedPassword = generatePassword();
  console.log(generatedPassword);
}

var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
passwordText.value = password;

// Add event listener to generate button document 
generateBtn.addEventListener("click", (writePassword));




 
 
