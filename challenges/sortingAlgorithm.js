let numbers = [3, 5, 15, 6, 2, 1];

for (let i = 0; i<numbers.length; i++) {
  for (let j = i; j<numbers.length; j++ ) {
    if (numbers[i]>numbers[j]) {
      let temp = numbers[i];
      numbers[i] = numbers[j];
      numbers[j] = temp;   
    }
  } 
} 
