let  getRepeats = function (massive)  {
  let result = {};
  for(let i = 0; i < massive.length; i++) {
    let word = massive[i]
    
    console.log(massive[i]) //
    if (result[word] != undefined) {
    result[word]++;
    console.log(result[word] != undefined) //
    }
    else {
      result[word] = 1;}
  };
  return result;
  }
