console.log('Operadores logicos');

var nome = 'Lucas';
var idade = 24;

console.log(nome == 'Lucas');
console.log(idade == 24);

// operador AND = E =  as duas condicoes precisam ser verdadeiras
console.log(nome == 'Lucas' && idade == 25)

// operador OR = ou =  uma duas condicoes precisa ser verdadeiras
console.log(nome == 'Maykon' || idade == 24)

// operador NOT = negacao =  inverte a validacao, 
//true passa a ser false e false a ser true
console.log(!(nome == 'Maykon'))

var usuario = 'mcluquinas'
var senha = '123'

console.log(!(usuario == 'mcluquinas' && senha == '123'));
