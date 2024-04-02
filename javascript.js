const body = document.body;
/* variables for the input */
let firstNumber = 0;
let operator = null;
let secondNumber = null;
let solution = null;

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

let numStorage = [];
/*selects the number buttons*/
const numButton = document.querySelectorAll(".number");
numButton.forEach((button) => {
   button.addEventListener("click", () => {
      let newVariableValue = button.textContent;
      numStorage.push(newVariableValue);
      /*MAYBE MAKE firstNumber A PARAMETER? TO DYNAMICALLY INTEGRATE THE NEW NUMBERS*/
   firstNumber = numStorage.join("");
   popDisplay(firstNumber);
   console.log(numStorage);
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
      numStorage = [];
     operator = button.textContent;
     console.log(operator);
     console.log(numStorage)
   });
});


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


 