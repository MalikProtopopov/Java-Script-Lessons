let fibonacciNumbers = [1, 1];
let numbersQuantity = 7;

for(let i=0; i<numbersQuantity;i++) {
  let lastNumber = fibonacciNumbers[i] + fibonacciNumbers[i+1]
  
  fibonacciNumbers.push(lastNumber)
  console.log(fibonacciNumbers)
  }
