let getYears = function (yearFrom, YearTo, sumInYear) {
  let years = []
  let sumOfYears = [];
  let sumArray = []
  let resultYears = [];

  for (let j = yearFrom; j<=YearTo; j++){
    years.push(j);
    }
  for (let i = 0; i<years.length; i++){
    sumOfYears[i] = (""+years[i]).split("").map(Number);
    sum = sumOfYears[i].map(i=>x+=i, x=0).reverse()[0]
    sumArray.push(sum)
    }
  for (let i = 0; i<=sumArray.length; i++) {
      if (sumArray[i]===sumInYear) {
        resultYears.push(years[i])
        }
      }
return resultYears
}

getYears(2011,2045, 10)
