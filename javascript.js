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
   };
};


/*selects the number buttons*/
const numButton = document.querySelectorAll(".number");
numButton.forEach((button) => {
   button.addEventListener("click", () => {
      let newVariableValue = button.textContent;
      if (operator === '' || firstNumber === '') {
         currentNumber += newVariableValue;
         firstNumber = currentNumber;
      } else {
         currentNumber += newVariableValue;
         secondNumber = currentNumber;
      }
   popDisplay(currentNumber);
   console.log(currentNumber + "_currentNumber");
   console.log(firstNumber + "_firstNumber");
   console.log(secondNumber + "_secondNumber");
   
   });
});

/*displays content to numbank*/
function popDisplay(value) {
   document.querySelector(".numBank p").textContent = value;
};


/*selects the operator buttons*/
const operatorBttn = document.querySelectorAll(".symbol");
operatorBttn.forEach((button) => {
   button.addEventListener("click", () => {
      currentNumber = '';
     operator = button.textContent;
   });
});
