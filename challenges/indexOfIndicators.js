let indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
let levels = [8, 15, 9, 12, 11];
let trainingTime = 30;


if (trainingTime<=30) {
    levels[indicators.indexOf('скорость')]+=3;
    levels[indicators.indexOf('ловкость')]+=3;
  }
else if (trainingTime>=30 && trainingTime<=60) {
    levels[indicators.indexOf('гибкость')]+=3;
    }
else if (trainingTime>60) {
    levels[indicators.indexOf('сила')]+=2;
    levels[indicators.indexOf('выносливость')]+=2;

  }
  
console.log(levels)

/* Техническое задание



Если тренировка от 30 минут (не включая это значение) до одного часа (включая это значение), увеличивай гибкость на 3.

Если тренировка длится больше одного часа (не включая это значение), увеличивай силу и выносливость на 2.

*/

/* Предыдущий код
let indicators = ['сила', 'гибкость', 'выносливость', 'скорость', 'ловкость'];
let levels = [8, 15, 9, 12, 11];
let trainingTime = 30;





if (trainingTime<=30) {
  levels[3]+=3;
  levels[4]+=3;
  }
else if (trainingTime>=30 && trainingTime<=60) {
  levels[1]+=3;
  }
else if (trainingTime>60) {
  levels[0]+=2;
  levels[2]+=2;
  }
  
console.log(levels)



*/
