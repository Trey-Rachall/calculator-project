const body = document.body;
/* variables for the input */
let firstNumber = '';
let operator = '';
let secondNumber = '';
let currentNumber = '';
let solution = '';

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

   popDisplay(currentNumber);
   console.log(currentNumber + "_currentNumber");
   console.log(firstNumber + "_firstNumber");
   console.log(secondNumber + "_secondNumber");
   
   });
});
/*for (let i = value.toString().length; i < value.toString().length; i++)*/
/*displays content to numbank*/
function popDisplay(value) {
   if (currentNumber.toString().length >= 4) {
      let displayValueString = currentNumber.toString();
      let commaDisplayValueString = displayValueString.slice(0,1) + "," + displayValueString.slice(1);
      value = commaDisplayValueString;
   } else if (currentNumber.toString().length >= 7) {
      let displayValueString = currentNumber.toString;
      let commaDisplayValueString = displayValueString.slice(3,4) + "," + displayValueString.slice(4);
      value = commaDisplayValueString;
   }
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
         popDisplay(firstNumber);
      }
     operator = button.textContent;
     console.log(solution);
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
