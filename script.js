// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordRangeArray = [];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeralsArray = ["0", "1","2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharactersString = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var specialCharactersArray = [specialCharactersString.split("")];
var password = "";
var passwordText = document.querySelector("#password");
var passwordLength = "";
var upperCasePrompt = "";
var lowerCasePrompt = "";
var numeralsPrompt = "";

// Write password to the #password input
function writePassword() {
    //requests password length input, and will continue to prompt until a valid length is entered, then saves valid input as password length, working appropriately
    passwordRangeArray = [];
    passwordLength = prompt("Please choose a password length as a whole number from 8 to 128 characters.");
   
    //accepts user input for password length, verifies and confirms length selected, saves for later use
    {
    if (8 <= passwordLength && passwordLength <= 128) {
        alert("Thank you. Your password will be " + passwordLength + " characters long.");
    } else {
      do {passwordLength = prompt("Please choose a whole number password length from 8 to 128.");
    } while (passwordLength < 8 || passwordLength > 128);    
        alert("Thank you. Your password will be " + passwordLength + " characters long.");
};
    }
    //accepts user preference for upper case letters, confirms selection, pushes upper case array if selected
    {upperCasePrompt = prompt("Should the password include upper case letters? Y or N");

    if (upperCasePrompt == "y") {
        passwordRangeArray.push(upperCaseArray);
        alert("Thank you. Your password will include upper case letters.");

    } else if (upperCasePrompt == "n") {
        alert("Thank you. Your password will NOT include upper case letters.");
    };
    console.log(passwordRangeArray);
    }
    //accepts user preference for lower case letters, confirms selection, pushes lower case array if selected
    {lowerCasePrompt = prompt("Should the password include lower case letters? Y or N");

    if (lowerCasePrompt == "y") {
        passwordRangeArray.push(lowercaseArray);
        alert("Thank you. Your password will include lower case letters."); 
    } else if (lowerCasePrompt == "n") {
        alert("Thank you. Your password will NOT include lower case letters.");
    };
    console.log(passwordRangeArray);
    }
    //accepts user preference for numerals, confirms selection, pushes numeral array if selected
    {numeralsPrompt = prompt("Should the password include numerals? Y or N");

    if (numeralsPrompt == "y") {
        passwordRangeArray.push(numeralsArray);
        alert("Thank you. Your password will include numerals.");   
    } else if (numeralsPrompt == "n") {
        alert("Thank you. Your password will NOT include numerals.");
  };
    console.log(passwordRangeArray);
    }
    //accepts user preference for special characters, confirms selection, pushes character array if selected
    {specialCharactersPrompt = prompt("Should the password include special characters? Y or N");

    if (specialCharactersPrompt == "y") {
        passwordRangeArray.push(specialCharactersArray);
        alert("Thank you. Your password will include special characters.");
    } else if (specialCharactersPrompt == "n") {
        alert("Thank you. Your password will NOT include special characters.");
    };  
    console.log(passwordRangeArray);
}
    //figure out this function to finalize challenge
function generatePassword(){
    var passwordArray = [];
    
    for(var i = 0; i < passwordLength; i++){
      for(var x = 0; x < passwordRangeArray.length; x++){
        passwordArray.push(passwordRangeArray[x][Math.floor(Math.random() * (passwordRangeArray[x].length))]);
      }
    }
      alert("Please view your password below.")
      
      password = passwordArray.join(" ");
      passwordText.value = password;
    };

generatePassword(); 
};
    
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);