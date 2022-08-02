// Resolução do Exercício 3

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)

const pokemon2 = {...pokemon1}
pokemon2.nome = "Squirtle"
pokemon2.tipo = "Água"

console.log ("Essa é a cópia do objeto pokemon 1", pokemon2)

// b)

pokemon1.ataque = []
pokemon1.ataque.push ({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100,
})
console.log ("Esse é o objeto original", pokemon1.ataque)

// c)

pokemon2.ataque = [...pokemon1.ataque]
console.log ("Essa é a cópia do objeto pokemon 1 \"Ataque\"", pokemon2)

// d)

pokemon1.ataque.push ({
    nome: "Folha Navalha",
    dano: 45,
    precisao: 100,
    tipo: "Grama",
})
console.log ("Aplicando o 2º ataque em Pokemon1", pokemon1)

// e)

pokemon2.ataque.push ({
    nome: "Jato de Água",
    dano: 40,
    precisao: 100,
    tipo: "Água",
})
console.log ("Aplicando o 2º ataque em Cópia Pokemon1", pokemon2)

// f)

console.log (pokemon1)
console.log (pokemon2)
