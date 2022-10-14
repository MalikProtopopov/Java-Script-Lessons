let numbers = [3, 5, 15, 6, 2, 1];



for (let i = 0; i<=numbers.length; i++) {
let indexMin = i;

for (let j = i+1; j<numbers.length; j++) {
  if (numbers[indexMin] > numbers[j]){
    indexMin = j;
    }
  if (indexMin !== i) {
[numbers[i], numbers[indexMin]] = [numbers[indexMin], numbers[i]];
          }
        }
      }

console.log(numbers);

/* Техническое задание

Напиши сортировку массива выбором.

Массив записан в переменную numbers.

Отсортируй значения в массиве по возрастанию, от самого маленького значения к наибольшему.

*/
