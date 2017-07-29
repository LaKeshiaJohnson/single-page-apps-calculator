console.log("hello");
//Create an HTML file that has two input fields to accept the two numbers to perform operations on.
//Create 4 buttons to perform each of the basic mathematical functions (add, subtract, multiply, divide).
//In your JavaScript, put an event listener on each of the buttons.
//Copy the code below an implement a basic calculator.
//When the user performs one of the operations, output the result to another DOM element of your choice.
 

 let num1 = document.getElementById("input1");
let num2 = document.getElementById("input2");

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
let multiplication = document.getElementById("multiplybtn");
multiplication.addEventListener("click", multiply);

function multiply(n1, n2) {
  let output = parseInt(num1.value) * parseInt(num2.value);
   document.getElementById("output").innerHTML = output;
  //console.log(output);
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
 let addition = document.getElementById("addbtn");
addition.addEventListener("click", add);

function add(n1, n2) {
  let output = parseInt(num1.value) + parseInt(num2.value);
   document.getElementById("output").innerHTML = output;
  //console.log(output);
}


/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
let subtraction = document.getElementById("subtractbtn");
subtraction.addEventListener("click", subtract);

function subtract(n1, n2) {
  let output = parseInt(num1.value) - parseInt(num2.value);
   document.getElementById("output").innerHTML = output;
  //console.log(output);
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
let division = document.getElementById("dividebtn");
division.addEventListener("click", divide);

function divide(n1, n2) {
  let output = parseInt(num1.value) / parseInt(num2.value);
   document.getElementById("output").innerHTML = output;
   //console.log(output);
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

/*function  performCalculation(n1, n2, action){
  let answer = action(n1, n2);
  return answer;

let addNums = performCalculation(5, 5, add);
console.log("Number 1 plus number 2 = ", addNums);
}
*/






