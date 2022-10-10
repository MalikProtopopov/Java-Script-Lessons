let books = ['Улисс', 'Маугли', 'Сияние', 'Ревизор', 'Гамлет', 'Обломов', 'Дюймовочка', 'Шантарам', 'Вий', 'Сильмариллион', 'Оно'];
let minNumber = 3;
let maxNumber = 5;
let filteredBooks = [];


for (let i=0; i < books.length; i++) {
  if (minNumber <= books[i].length && maxNumber >= books[i].length    ) {
    filteredBooks.push(books[i])

    }
  }
