
let getDocumentsNumbers = function (docs, date) {
  let sumOfDocs = 0;
  
  for (let i = 0; i<docs.length; i++) {
    if (docs[i].indexOf(date,4)>-1); {
      console.log(docs[i].indexOf(date,4))
      sumOfDocs++
      }   
    } 
  return sumOfDocs;
   
  }

/* Техническое задание



let getDocumentsNumbers = function (docs, date) {
  let sumOfDocs = 0;
  for (let i = 0; i<docs.length; i++) {
    if (    docs[i].indexOf(date, 4)) {
      sumOfDocs+=1
      }   
    } 
    
  return sumOfDocs;
   
  }

Мяу! Напиши программу getDocumentsNumbers, которая будет возвращать число документов за указанный год.

У функции должно быть два параметра: массив с названиями документов и год, за который надо найти документы. Названия параметров могут быть любыми. Даты из массива записаны в виде строк.

Функция должна возвращать количество документов, в названии которых есть необходимый год.

Если таких документов в массиве нет, функция должна возвращать 0.

*/
