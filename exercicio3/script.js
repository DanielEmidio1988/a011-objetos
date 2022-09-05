// Observe o objeto abaixo e, utilizando o espalhamento resolva 
// os exercícios a seguir:

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
};

// a) Crie uma cópia do objeto, acima, mantendo a estrutura, mas trocando nome por “Squirtle” e tipo por “Água”
const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Agua"

// b) No objeto original, adicione mais uma propriedade, chamada ataques. Esta propriedade deve guardar um array de objetos 
//. Inicie a propriedade como um array vazio, e crie o objeto abaixo utilizando **push()**

pokemon1.ataques = []

pokemon1.ataques.push({nome: "Investida",dano:40,tipo:"Normal",precisao:100})

// c) Na cópia do objeto original, adicione a propriedade ataques a partir do espalhamento da propriedade criada para o objeto original;

pokemon2.ataques =[...pokemon1.ataques]

// d) para o objeto original, adicione o ataque “Folha Navalha”, com 45 de dano, 100 de precisão, e de tipo “Grama”;

pokemon1.ataques.push({nome:"Folha de Navalha",dano:45,tipo:"Grama",precisao:100})

// e) para a cópia, crie o ataque “Jato de Água”, com 40 de dano, 100 de precisão, e do tipo “Água”;

pokemon2.ataques.push({nome:"Jato de Água",dano:40,tipo:"Água",precisao:100})

// f) Imprima os dois objetos no console.

console.log(" ")
console.log("Pokedex 1: ", pokemon1)
console.log("Pokedex 2: ", pokemon2)
