
function tabuada(x) {
  let result = [];
  for(let i=1; i <=10; i++){
    let value = i * x;
    result.push(value);
    console.log( i + ' X '  + x +' = ' + x * i);
  }
  return result;
}

