console.log('Comecando a aula 0004');
//Lista uma variavel que contem varios dados
var nomes = ['Maykon', 'Lucas', 'Carol'];
console.log(nomes);
console.log(nomes[2]);
console.log(nomes.length);
console.log(nomes.reverse());
console.log(nomes.indexOf('Carol'));

var elemento = nomes.pop();
console.log('Elemento retirado:'+  elemento)

console.log(nomes);

nomes.push(elemento);
nomes.push('Talita')
console.log(nomes);

nomes[1] = 'Lucas Hostin';
console.log(nomes);
