let getSortedArray = function (data, key) {
  for (let i = 0; i <= data.length - 2; i++) {
    let minValueTmp = data[i][key];
    let minItemIndex = i;
    
    for (let j = i + 1; j <= data.length - 1; j++) {
      if (minValueTmp>data[j][key]) {
            minValueTmp =data[j][key];
            minItemIndex = j;
        }
      }
      let swap = data[i];
      data[i] = data[minItemIndex];
      data[minItemIndex] = swap;
    }
    return data
  }
