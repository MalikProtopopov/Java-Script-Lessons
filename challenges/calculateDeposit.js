let calculateDeposit = function (startDeposit, percents, monthAmount, capitalized) {
 let finishDeposit
    if (!(capitalized)) {
      var perMonth = percents / 12 * monthAmount;
      return Math.floor(startDeposit += startDeposit / 100 * perMonth);
      }
    if (capitalized) {
      for (let i = 1; i<=monthAmount; i++) { 
        var perMonth = percents / 12;
        startDeposit = Math.floor(startDeposit += startDeposit / 100 * perMonth)
        
  }
  return startDeposit
};
};
calculateDeposit(100000,10,2,true)
