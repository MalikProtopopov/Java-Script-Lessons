let poly = 1221;
let ylop = 0;
let isPalindrome = false;


let arrayPoly = (""+poly).split("").map(Number);
let ylopArray = Number(arrayPoly.reverse().join(''));
if (poly === ylopArray) {
  isPalindrome = true;
  }
 

console.log(ylopArray);

/* Техническое задание

Второй вариант решения задачи

var poly = 7997;
var ylop = 0;
var isPalindrome = false;
var number = poly

var quantity = 0;
var i = 1;
while (poly / i >= 1) {
  quantity ++;
  i *= 10;
}

for (var i = quantity - 1; i >=0; i --) {
  ylop += (poly % 10) * Math.pow(10, i);
  poly = Math.floor(poly / 10);
}

  if (number === ylop) {
  isPalindrome = true;
}

  


Мяу! Напиши программу, которая проверяет, является ли число палиндромом.

Число записано в переменную poly.

Переменная, куда нужно записать «перевёрнутую» версию числа, называется ylop.

Выясни, является ли число из переменной poly палиндромом. Если да, значение флага isPalindrome должно быть true, если число не палиндром, то false.

*/
