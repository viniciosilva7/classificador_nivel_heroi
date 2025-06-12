let nome = "Darian, o Implacável"
let nivel = 7502
let classificacao = ""

if (nivel <= 1000) {
    classificacao = "Ferro"
} else if (nivel <= 2000) {
    classificacao = "Bronze"
} else if (nivel <= 5000) {
    classificacao = "Prata"
} else if (nivel <= 7000) {
    classificacao = "Ouro"
} else if (nivel <= 8000) {
    classificacao = "Platina"
} else if (nivel <= 9000) {
    classificacao = "Ascendente"
} else if (nivel <= 10000) {
    classificacao = "Imortal"
} else if (nivel >= 10001) {
    classificacao = "Radiante"
}

console.log("O Heroí de nome " + nome + ", está no nível de " + nivel + " e sua classificação é " + classificacao)