// Escreva um algoritmo que recebe como parâmetro dois números e uma opção:
// A- Soma de 2 números. B- Diferença entre 2 números (maior pelo menor). C-
// Produto entre 2 números. D- Divisão entre 2 números (o denominador não pode
// ser zero). E execute a operação com os dois números lidos anteriormente. Caso
// a opção digitada seja inválida, apresente a mensagem de “Opção inválida” para
// o usuário. Lembre-se de usar funções para organizar seu programa.

function exer4(x, y, tipo){
  if(x < 0 || y < 0){
    return 'Informe dois numeros validos'
  }

  if(tipo == 'A'){
    return x + y;
  }
  else if(tipo == 'B'){
    return x > y ? x - y : y - x;
  }
  else if(tipo == 'C'){
    return x % y;
  }
  else if(tipo == 'D'){
    return x == 0 || y == 0 ? 'Invalido' : x / y;
  }
 else{
    console.log('Opção Invalida.');
    return 
  }
}

console.log(exer4(5, 10, 'C'));