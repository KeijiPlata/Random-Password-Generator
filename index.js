// array of characters
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

// grabbing the html element
let password1 = document.getElementById("pass1")
let password2 = document.getElementById("pass2")

// this will generate a random number to get a random element to our array
function generateNumber(){
    let generateRandomNumber = Math.floor(Math.random() * characters.length)
    return generateRandomNumber
}

// This will generate a random password
// As we can see in for loop, the ending number is 15 so our maximum characters is 15
// I generate a random number inside the index of characters so that it will  get a random character
// Then the last I did is to return the randomPassword so that we can now print it in our html document
function generatePassword(){
    let randomPassword = ""
    for(let i = 0; i < 15; i++){
        randomPassword += characters[generateNumber()]
    }
    return randomPassword 
}

// this btn will get the value of generatedPassword and print it inside our html document
function btnClick() {
    password1.textContent =  generatePassword()
    password2.textContent =  generatePassword()
    
}



        

