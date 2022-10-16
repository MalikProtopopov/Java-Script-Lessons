let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

let getDayOfWeek = function(firstDay, date) {
let d = date + days.indexOf(firstDay) - 1;
return days[d % 7];
};


getDayOfWeek('воскресенье', 26)

