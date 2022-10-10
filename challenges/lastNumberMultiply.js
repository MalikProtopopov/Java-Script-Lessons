let lastNumber = 5;
let multiplicationResult = 1;

for (let i = 1; i<=lastNumber; i++) {
  console.log(i + 'я иттерация ')
  if (!(i%2)) {
    console.log(i + 'число прибавллю')

    multiplicationResult*=i;
    }
  }
