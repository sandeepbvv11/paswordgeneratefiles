// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  
  let lowerCasedCharacters_Check=confirm("WOuld you like it to contain lowercase characters?");
  let numericCharacters_Check=confirm("Would you like it to contain numeric characters?");
  let specialCharacters_Check=confirm("WOuld you like it to contain special characters?");
  let upperCasedCharacters_Check=confirm("Would you like it to contain uppercase characters?");

  return [lowerCasedCharacters_Check,numericCharacters_Check,specialCharacters_Check,upperCasedCharacters_Check]
  
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
  
}

// Function to generate password with user input
function generatePassword(length) {
  let check_array=getPasswordOptions();
  let temp_array=[];
  // Checking for which options are set true by the user
  for (let i=0;i<check_array.length;i++){
    if (check_array[i]==true){
      temp_array.push(i);}
  }
   
  let password_string=""
  for (let iter=0;iter<length;iter++){
    let  random_index=Math.floor(Math.random()*temp_array.length);
    console.log("temp",temp_array[random_index],random_index);
    // Making sure that randome characters are selected only from the ones that the user set true.
    switch (temp_array[random_index]) {
      case 0:
        password_string+=getRandom(lowerCasedCharacters);
        break;
      case 1:
        password_string+=getRandom(numericCharacters);
        break;
      case 2:
        password_string+=getRandom(specialCharacters);
        break;
      case 3:
        password_string+=getRandom(upperCasedCharacters);
        break;
    }    
  
    
    
    
  }
  return password_string;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  let number_Of_Characters = prompt("How many  characters would you like your password to have? Between 8 and 128");
  
  var password = generatePassword(number_Of_Characters);
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);