let getPrice = function (time, urgency) {

  if (!urgency) {
    ratePerHour= 1500;
    }
  else {
    ratePerHour= 1500*2.5;
    time/=2;
    }
  if (time > 150) {
    ratePerHour-=250
    }
  return time*ratePerHour;
  }

let getProfitableProject = function (time, profit) {
 let urgency = getPrice(time, true) - profit;
 let usual = getPrice(time, false);
 if (urgency < usual) {
   return 'Выгодней срочный проект. Потратишь на него ' + urgency;
   }
  else {
    return 'Выгодней обычный проект. Потратишь на него ' + usual
    } 
}

getProfitableProject(10,345)
