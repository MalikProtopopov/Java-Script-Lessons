let calculateSalary = function (blackSalary) {
  let percent = 0.35;
  if (blackSalary >= 100000) {
    percent = 0.45;
    }
  let tax = blackSalary * percent;
  let cleanSalary = blackSalary-tax;
    return cleanSalary;

}
calculateSalary(1000);

