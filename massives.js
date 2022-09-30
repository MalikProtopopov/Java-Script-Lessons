let qualificationDistance = 200;
let attempts = [120, 150, 160, 201, 203, 180, 202];
let qualified = false;
let averageBest = 0;
let swap;


for (let i = 0; i <= attempts.length - 2; i++) {
  let minValue = attempts[i];
  for (let j = i+1; j <= attempts.length - 1; j++) {
    if (attempts[j] < minValue) {
      minValue = attempts[j];
      let swap = attempts[i];
      attempts[i] = minValue;
      attempts[j] = swap;    
    }
  }
}
averageBest = (attempts[attempts.length - 1] + attempts[attempts.length - 2]  + attempts[attempts.length - 3])/3
console.log(averageBest);
if (averageBest > qualificationDistance) {
  qualified = true;
  }
else {
  qualified = false;

  }
