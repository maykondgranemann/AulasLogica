console.log('Comecando aula 0006 - Dicionarios com lista');
//Variável que contem varios dados, com descricoes, 
// serve para juntar dados de um dominio/ (caracteristics de um objeto )
var aluno1 = { 'nome':'Maykon', 'idade':18, 'cpf': '151165165156'};
console.log(aluno1);
console.log(aluno1['nome']);

var aluno2 = { 'nome':'Lucas', 'idade':24, 'cpf': '1211111111111111'};
console.log(aluno2);

var alunos = [aluno1, aluno2];
console.log(alunos);

console.log(alunos[1]['cpf'])