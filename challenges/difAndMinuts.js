let temperature = 25;
let itsRaining = false;

let minutes;

if (itsRaining || temperature<0 || temperature>35) {
  minutes = 0;
  console.log('Прогулка не состоится')
  } 
else if (!itsRaining && temperature===20) {
    minutes = 20;
  console.log('Прогулка состоится и длится '+minutes +" минут")
  }
else {
  let diff = 20 - temperature;
  if (diff>0) {
    minutes = 20-diff
    } else if (diff<0) {
        minutes = 20+diff
        } 

}
  
