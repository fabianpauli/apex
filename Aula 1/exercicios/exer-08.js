// Precisamos limitar as posições em que um inimigo pode andar na tela. A menor
// posição possível é 0 e a maior, 100: qualquer valor maior que 100 ou menor que
// 0 sairia fora da tela. Precisamos de uma função LimitaPosicao que recebe uma
// POSICAO que pode ter qualquer valor positivo ou negativo, verifica se ela é
// válida ou não e retorna sempre um valor corrigido entre 0 e 100. Ex: 110 = 90;


function enemyPos(pos){
  //se posição for menor que 0 ou maior q 100
  if(pos < 0){
    return 100 - (pos * -1)
  }  else if(pos > 100){
    return pos - 100 
  }else {
    return 'Try again'
  }
    
}

console.log(enemyPos(130));
console.log(enemyPos(-20));