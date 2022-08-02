const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// a)

console.log ("O nome do primeiro ator/atriz é:", filme.elenco[0])

// b)

console.log ("O nome do último ator/atriz é:", filme.elenco[3])

// c)

console.log ("As transmissões de hoje são:", filme.transmissoesHoje)

// d)

console.log ("O horário da transmissão no canal Brasil é:", filme.transmissoesHoje[1])
