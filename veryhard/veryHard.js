var userCalculatorChoice = prompt(' do you want to add, subtract, multiply, or divide ');
if (userCalculatorChoice === 'add'){
   var num1 = prompt(' enter first number you want to add ');
   var x = parseInt(num1);
   var num2 = prompt(' enter second number you want to add ');
   var y = parseInt(num2);
    add(x,y);
}
if (userCalculatorChoice === 'subtract'){
    var num1 = prompt(' enter first number you want to subtract ');
    var x = parseInt(num1);
    var num2 = prompt(' enter second number you want to subtract ');
    var y = parseInt(num2);
     subtract(x,y);
 }
 if (userCalculatorChoice === 'multiply'){
    var num1 = prompt(' enter first number you want to multiply ');
    var x = parseInt(num1);
    var num2 = prompt(' enter second number you want to multiply ');
    var y = parseInt(num2);
     multiply(x,y);
 }
 if (userCalculatorChoice === 'divide'){
    var num1 = prompt(' enter first number you want to divide ');
    var x = parseInt(num1);
    var num2 = prompt(' enter second number you want to divide ');
    var y = parseInt(num2);
     divide(x,y);
 }
function add(x,y){
  var  z = x + y;
  console.log(' answer is ' + z);

}
function subtract(x,y){
   var z = x - y;
    console.log(' answer is ' + z);

}
function multiply(x,y){
  var  z = x * y;
    console.log(' answer is ' + z);

}
function divide(x,y){
   var z = x / y;
    console.log(' answer is ' + z);

}