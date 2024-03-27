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

/* setting the buttons to variable bttns */
const bttns = document.querySelectorAll("button");

/* event listener for buttons */
bttns.forEach((button) => {
   button.addEventListener("click", () => {
      popDisplay(button.textContent);
      
   });
});


/*STILL NEED TO STORE THE CONTENT INTO VARIABLE*/
function popDisplay(buttonText) {
   document.querySelector('.numBank p').textContent = buttonText;
   let firstNumber = buttonText;
   console.log(firstNumber);
};
