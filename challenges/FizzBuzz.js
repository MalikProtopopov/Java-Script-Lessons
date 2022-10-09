let number = 15;
let taskResult;

if (!(number%3)) {
    if (!(number%5)) { 
      taskResult = 'FizzBuzz';
      } else {
  taskResult = 'Fizz';
  }
  }
else if (!(number%5))  {
    taskResult = 'Buzz';
  }


else if (number%3 && number%5) {
  taskResult = number;
  }
  
