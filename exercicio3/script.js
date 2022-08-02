// Resolução do Exercício 3

const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

// a)

const copiaPokemon1 = {...pokemon1}
copiaPokemon1.nome = "Squirtle"
copiaPokemon1.tipo = "Água"

console.log ("Essa é a cópia do objeto pokemon 1", copiaPokemon1)

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

copiaPokemon1.ataque = [...pokemon1.ataque]
console.log ("Essa é a cópia do objeto pokemon 1 \"Ataque\"", copiaPokemon1)

// d)

pokemon1.ataque.push ({
    nome: "Folha Navalha",
    dano: 45,
    precisao: 100,
    tipo: "Grama",
})
console.log ("Aplicando o 2º ataque em Pokemon1", pokemon1)

// e)

copiaPokemon1.ataque.push ({
    nome: "Jato de Água",
    dano: 40,
    precisao: 100,
    tipo: "Água",
})
console.log ("Aplicando o 2º ataque em Cópia Pokemon1", copiaPokemon1)

// f)

console.log (pokemon1)
console.log (copiaPokemon1)
