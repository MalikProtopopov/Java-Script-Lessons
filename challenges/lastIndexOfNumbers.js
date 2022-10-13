let numbers = [1, 4, 5, 9, 2, 5, 1];
let uniqueNumbers = [];

for (let i = 0; i<numbers.length; i++) {
  if (numbers.indexOf(numbers[i])===numbers.lastIndexOf(numbers[i])){
    uniqueNumbers.push(numbers[i])
    }
  } 
  console.log(uniqueNumbers)
  
