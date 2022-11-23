// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  // Ask the user how many characters he wants in his password
  const passwordLength = prompt("How many characters do you want in your password?");

  // choose a number between 4 and 150
  if (passwordLength >= 4 && passwordLength <= 150) {
    // The user will be asked if he wants: lowercase, uppercase, numbers, special characters in his password
    const NumberConfirm = confirm("Do you want Numbers in your Password?");
    const LowerCasesConfirm = confirm("Do you want Lower Cases in your Password?");
    const UpperCasesConfirm = confirm("Do you want Upper Cases in your Password?");
    const SpecialCharacterConfirm = confirm("Do you want Special Character in your Password?");

   //One of these characters should be included in the password 
    if (LowerCasesConfirm || UpperCasesConfirm || NumberConfirm || SpecialCharacterConfirm) {
      const NumberArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const LowerCasesArray = [ "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
      const UpperCasesArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
      const SpecialCharacterArray = ["!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~",];
      let passwd = "";

      // Rnadomly generate password: random Lower Cases, Upper Cases, Numbers, and Special Characters
      for (let i = 0; passwd.length < passwordLength; i++) {
        let randomsType = Math.floor(Math.random() * 9);

        if (randomsType === 0 && LowerCasesConfirm) {
          console.log(`randomsType: ${randomsType} = lowercases`);
          let randomLowerC =
          LowerCasesArray[Math.floor(Math.random() * LowerCasesArray.length)];
          console.log(`randomLowerC: ${randomLowerC}`);
          passwd = passwd + randomLowerC;
        }
        else if (randomsType === 1 && UpperCasesConfirm) {
          console.log(`randomsType: ${randomsType} = uppercases`);
          let randomUpperC =
          UpperCasesArray[Math.floor(Math.random() * UpperCasesArray.length)];
          console.log(`randomUpperC: ${randomUpperC}`);
          passwd = passwd + randomUpperC;
        }
        else if (randomsType === 2 && NumberConfirm) {
          console.log(`randomsType: ${randomsType} = number`);
          let randomNumber =
          NumberArray[Math.floor(Math.random() * NumberArray.length)];
          console.log(`randomNumber: ${randomNumber}`);
          passwd = passwd + randomNumber;
        }
        else if (randomsType === 3 && SpecialCharacterConfirm) {
          console.log(`randomsType: ${randomsType} = specialcharacters`);
          let randomSpecialC =
          SpecialCharacterArray[Math.floor(Math.random() * SpecialCharacterArray.length)];
          console.log(`randomSpecialC: ${randomSpecialC}`);
          passwd = passwd + randomSpecialC;
        }
      }

      // if the user dont select a choice or select a password less than 4 and more than 150 
      console.log(`passwd: ${passwd}`);
      console.log(`passwd length: ${passwd.length}`);
      return passwd;
    } else {
      alert("Please select at least one character type.");
      generatePassword();
    }
  } else {
    alert("Please select a Password beetween 4 and 128 characters.");
    generatePassword();
  }
}

