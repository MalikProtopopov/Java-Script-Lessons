
let getData = function (keys, values) {
  var newArray = [];
  for (var i = 0; i <= values.length - 1; i++) {
    var newObject = {};
    if (values[i].length - 1 <= keys.length - 1) {
      var length = values[i].length - 1;
    } else {
      length = keys.length - 1
    }
    for (var j = 0; j <= length; j++) {
      newObject[keys[j]] = values[i][j];
    } 
    newArray.push(newObject);
  }
  return newArray
};
 
