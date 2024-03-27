const body = document.body;
/* variables for the input */
let firstNumber = 10;
let operator = '/';
let secondNumber = 10;


function add() {
   let addSolution = firstNumber + secondNumber;
   return addSolution;
};

function subtract() {
   let subtractSolution = firstNumber - secondNumber;
   return subtractSolution;
};


function multiply() {
   let multiplySolution = firstNumber * secondNumber;
   return multiplySolution;
};


function divide() {
   let divideSolution = firstNumber/secondNumber;
   return divideSolution;
};

function operate() {
   if (operator === "+") {
      solution = add();
      return solution;
   } else if (operator === "-") {
      solution = subtract();
      return solution;
   } else if (operator === "X") {
      solution = multiply();
      return solution;
   } else if (operator === "/") {
      solution = divide();
      return solution;
   };
};

/* event listener for buttons */
const bttns = document.querySelectorAll("button");
bttns.forEach((button) => {
   button.addEventListener("click", () => {
      /*ADD THE FUNCTION HERE */
   })
});



function popDisplay() {

};