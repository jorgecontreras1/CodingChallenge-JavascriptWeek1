var userInput = prompt(" are you yelling, whispering, or neither ");
function isUpperCase(userInput) {
    return userInput === userInput.toUpperCase();
}

if( isUpperCase(userInput) === true){
    console.log(' you are yelling ')
}
else if(isUpperCase(userInput) === false){
    console.log(' you are neither yelling or whispering ')
}
if (isUpperCase(userInput) === false){

    console.log(' you are whispering ')
}




