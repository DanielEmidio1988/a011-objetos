// Crie um array vazio chamado sacolao, e siga os passos abaixo:

// a) Crie três objetos que vão representar frutas do sacolão. 
// Os objetos devem ter as seguintes propriedades:

const sacolao =[]
console.log("Itens no Sacolão: ", sacolao)

// a) Crie três objetos que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades:

// nome: string;
// preco: number;
// disponibilidade: boolean;

const Fruta1 = {
    nome: "Mamão",
    preco: 4.50,
    disponibilidade: true
}

const Fruta2 = {
    nome: "Banana",
    preco: 5,
    disponibilidade: false
}

const Fruta3 = {
    nome: "Limão",
    preco: 2,
    disponibilidade: true
}

// b) Adicione os objetos ao array sacolao utilizando o método push()

sacolao.push(Fruta1,Fruta2,Fruta3)


// c) Imprima a o array sacolao, e certifique-se de que agora ela seja um array com três objetos

console.log("Itens no Sacolão: ", sacolao)