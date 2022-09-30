let getPrice = function (hours, IsUrgency) {
  let bidPerHour = 1500;
  if (IsUrgency){
    bidPerHour*=2.5;
    hours = hours/2;
    }
  if (hours > 150) {
    bidPerHour-=250;
    }
  let costPerWork = bidPerHour* hours;
  return costPerWork
  }
  
