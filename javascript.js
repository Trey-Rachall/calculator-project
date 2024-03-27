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
console.log(operate());
/* function operate(operator, operateOne, operateTwo) {
   let userOperator = operator;
   let userNumberOne = operateOne;
   let userNumberTwo = operateTwo;
   if (userOperator = "+") {
      add()
   }
}; */