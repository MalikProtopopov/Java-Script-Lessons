let numbers = [2, 4, 7, 4, 7, 2];
let number = 4;
let lastIndex = 0;

for (let i = 0; i<numbers.length; i++) {
  if (numbers[i]===number) {
    lastIndex = i;
    } 
}
if (!lastIndex) {
      lastIndex = -1;
  }
