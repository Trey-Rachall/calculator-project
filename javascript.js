const body = document.body;
/* variables for the input */
let firstNumber = "";
let operator = '/';
let secondNumber = null;


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
   } else if (operator === "×") {
      solution = multiply();
      return solution;
   } else if (operator === "÷") {
      solution = divide();
      return solution;
   };
};
const numStorage = [];
let counter = 0;
/*selects the number buttons*/
const numButton = document.querySelectorAll(".number");
numButton.forEach((button) => {
   button.addEventListener("click", () => {
      let newVariableValue = button.textContent;
      numStorage.push(newVariableValue);
      console.log(newVariableValue);
      console.log(numStorage);
   });
});



/*selects the operator buttons*/
const operatorBttn = document.querySelectorAll(".symbol");
operatorBttn.forEach((button) => {
   button.addEventListener("click", () => {
      console.log(12);
   });
});

function popDisplay() {

}
/* setting the buttons to variable bttns */
/*const bttns = document.querySelectorAll("button");*/

/* event listener for buttons */
/*bttns.forEach((button) => {
   button.addEventListener("click", () => {
      if (button.textContent === "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9"){
      let firstNumber = button.textContent;
      console.log(firstNumber);
      popDisplay(button.textContent);} else if (button.textContent === "+" || "-" || "×" || "/") {
      let operator = button.textContent;
      console.log(operator);
      };
      
});
});*/


/*displays content to numbank*/
/*function popDisplay(buttonText) {
   document.querySelector('.numBank p').textContent = buttonText;
   
};*/


 