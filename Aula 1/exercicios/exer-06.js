// Para um jogo, precisamos saber se um personagem morreu ou não depois de
// sofrer um ataque. Faça uma função que receba 2 parâmetros, DANO e SAÚDE.
// A função deve retornar verdadeiro se o dano for matar o personagem (ou seja,
// deixar sua saúde menor ou igual a zero); falso caso contrário.

// function isDead(dmg, hp){
//  return hp - dmg <= 0 ? 'true' : 'false'
// }
let isDead = (hp, dmg) => hp - dmg <= 0 ? 'true' : 'false';

console.log(isDead(100, 50)); 
console.log(isDead(49, 50)); 
