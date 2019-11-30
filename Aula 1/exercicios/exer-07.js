// Temos um vetor de 5 posições (mochila do jogador), com o nome de 5 itens que
// nosso herói carrega na mochila. Quando o personagem chega numa porta,
// queremos detectar automaticamente se ele tem o não uma chave para deixá-lo
// passar. Crie uma função TemChave que percorre o vetor comparando se cada
// item tem o nome “chave” e retorne verdadeiro se encontrar alguma. Caso
// contrário, a função deve retornar falso.

let bag  = ['HP potion', 'sword', 'mace', 'Mana potion', 'key'];

// ***** OPÇAO 1 *****
// function temChave(x){
// return x.includes('key') ? 'Abriu a porta com o item' : 'Porta fechada, procure a chave'
// }

// ***** OPÇAO 2 *****
// function temChave(x){
//   for(let i =0; i< x.length; i++){
//     const item = x[i];
//     if(item === 'key'){
//       return true;
//     } 
//     }
// }

// ***** OPÇAO 3 *****
let temChave = x => x.indexOf('key') >= 0;
console.log(temChave(bag));