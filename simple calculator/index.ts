import inquirer from "inquirer";

const asnwer = await inquirer.prompt([
  { message: "Enter first number" , type: "number" , name: "firstNumber"},
  { message: "Enter second number" , type: "number" , name: "secondNumber"},
  {
    message: "select one of the operators to perform operation",
    type: "list",
    name:"operator",
    choices: ["Addition", "subtraction", "multiplication", "division"],
  },

]);

//conditional statement
if (asnwer.operator === "addition") {
  console.log(asnwer.firstNumber + asnwer.secondNumber);
} else if (asnwer.operator === "substraction") {
  console.log(asnwer.firstNumber - asnwer.secondNumber);
} else if (asnwer.operator ==="multiplication") {
  console.log(asnwer.firstNumber * asnwer.secondNumber);
}
else if (asnwer.operator === "division") {
  console.log(asnwer.firstNumber / asnwer.secondNumber);

} else {
  console.log("please select valid operators")
}