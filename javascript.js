const body = document.body;
/* variables for the input */
let firstNumber = '';
let operator = '';
let secondNumber = '';
let currentNumber = '';
let solution = '';
let slicedSolution = '';

function add() {
   solution = firstNumber + secondNumber;
   return solution;
};

function subtract() {
   solution = firstNumber - secondNumber;
   return solution;
};


function multiply() {
   solution = firstNumber * secondNumber;
   return solution;
};


function divide() {
   solution = firstNumber/secondNumber;
   return solution;
};

function equal() {
   solution = firstNumber;
   return solution;
}

function operate() {
   if (operator === "+") {
      solution = add();
      return solution;
   } else if (operator === "-") {
      solution = subtract();
      return solution;
   } else if (operator === "×") {
      solution = multiply();
      return solution;
   } else if (operator === "÷") {
      solution = divide();
      return solution;
   } else if (operator === "=") {
      solution = equal();
      return;
   }
};


/*selects the number buttons*/
const numButton = document.querySelectorAll(".number");
numButton.forEach((button) => {
   button.addEventListener("click", () => {
      let newVariableValue = button.textContent;
      if (operator === '' || firstNumber === '') {
         currentNumber += newVariableValue;
         firstNumber = currentNumber;
         firstNumberInt = parseInt(firstNumber);
         firstNumber = firstNumberInt;
      } else {
         currentNumber += newVariableValue;
         secondNumber = currentNumber;
         secondNumberInt = parseInt(secondNumber);
         secondNumber = secondNumberInt;
      } 
      if (currentNumber.length < 10) {
         popDisplay(currentNumber);
      }
   
   console.log(typeof currentNumber + currentNumber + "_currentNumber");
   console.log(typeof firstNumber + firstNumber + "_firstNumber");
   console.log(typeof secondNumber + secondNumber + "_secondNumber");
   
   });
});
/*for (let i = value.toString().length; i < value.toString().length; i++)*/
/*displays content to numbank*/
function popDisplay(value) {
   
   document.querySelector(".numBank p").textContent = value;
};


/*selects the operator buttons*/
const operatorBttn = document.querySelectorAll(".symbol");
operatorBttn.forEach((button) => {
   button.addEventListener("click", () => {
      
      if (secondNumber === '') {
         currentNumber = '';
      } else {
         operate();
         secondNumber = '';
         currentNumber = '';
         firstNumber = solution;
         solution = solution.toString();
         if (solution.length < 10) {
            popDisplay(solution);
         } else {
            slicedSolution = solution.slice(0,9);
            popDisplay(slicedSolution);
         }
      } 
      
      
     operator = button.textContent;
     console.log(typeof solution);
   });
});

function clear() {
firstNumber = '';
operator = '';
secondNumber = '';
currentNumber = '';
solution = '';
document.querySelector(".numBank p").textContent = "0";
};

const clearBttn = document.querySelector(".clearButton");
clearBttn.addEventListener("click", clear);
