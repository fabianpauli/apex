function soma(x, y) {
  return x + y;
}

let subs =(x, y) => x - y;
let divisao = (x, y) => x / y ;
let multiply = (x, y) => x * y;
let resto = (x, y) => x % y;

console.log('Soma de 10 e 5: ' + soma(5,10));
console.log('Substração de 10 é 5: ' + subs(10, 5));
console.log('Multiplicação de 10 é 5: ' + multiply(10, 5));
console.log('Divisão de 10 é 5: ' + divisao(10, 5));
console.log('Resto de 10 é 5: ' + resto(10, 5));

  //precedencia : * / %  + -
// function more100(x, y){
//   let total = x + y;
//   if(total >= 100){
//     return total;
//   }

// }

// console.log(more100(50, 60)

//biblioteca para vetores lodash.com/docs