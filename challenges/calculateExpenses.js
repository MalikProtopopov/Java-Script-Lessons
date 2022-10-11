let incomeTax = 13;
let contributions = 30;

let calculateExpenses = function (netSalary) {
  
  netSalary = Math.round(netSalary/(100-incomeTax)*100 + netSalary/(100-incomeTax)*30)
  
  return netSalary
  }
