let calculate = function (firstNumber, secondNumber, operator) {
  let result
  secondNumber = Number(secondNumber);
  firstNumber = Number(firstNumber);
  if (operator === "+") {
    result =firstNumber+secondNumber;
    }
    else if (operator === "-") {
    result=firstNumber-secondNumber;
    }
   else if (operator === "*") {
    result=firstNumber*secondNumber;
    }
   else if (operator === "/") {
    result=firstNumber/secondNumber;
    }
    return result
  
  }
