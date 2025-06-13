## 🛡️ Classificador de Nível de Herói

Este é um projeto simples desenvolvido na linguagem de programação **JavaScript**, com o objetivo de praticar a **lógica de programação** e os **principais conceitos** como: **variáveis**, **operadores** e **estruturas condicionais**.

## 🚀 Objetivo

Classificar o nível de um herói com base na quantidade de experiência (XP) adquirida e exibir uma mensagem com o nome, o nível e a classificação correspondente.

## 🧠 Lógica de Classificação

| Experiência         | Nível        |
|---------------------|--------------|
| XP <= 1.000         | Ferro        |
| 1.001 – 2.000       | Bronze       |
| 2.001 – 5.000       | Prata        |
| 5.001 – 7.000       | Ouro         |
| 7.001 – 8.000       | Platina      |
| 8.001 – 9.000       | Ascendente   |
| 9.001 – 10.000      | Imortal      |
| XP => 10.001        | Radiante     |

## 🖥️ Exemplo de Uso

```javascript

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

```
## 🧾 Saída Esperada

```javascript
O Heroí de nome Darian, o implacãvel, está no nível 7502 e sua classificação é Platina

```
## 📚 Tecnologias Utilizadas

* JavaScript 
* Node.js

## 📂 Como Executar

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/classificador_nivel_heroi.git

```
2. Navegue até o diretório:

```
cd classificador_nivel_heroi

```
3. Execute com Node.js:

```
node nivel_heroi.js

```
Feito com 💻 por **Vinicios Ruan Silva**
