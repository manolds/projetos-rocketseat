// let user

console.log("leozin")

// Declara uma variavel com valor

let email = "leonardomtzsouza@gmail.com"

console.log(email)

email = "leozin@gmail.com"

console.log(email)

// usando const

const number = 42
console.log(number)

number = 55
console.log(number)

// var é facil de ser manipulado, let nao pode ser passado o valor duas vezes mas pode ser alterado,
//  const nao pode ser alterado seu valor, ele mntem sua constante em um valor fixo
//  sua dif para let é que let ainda da para manipular, porem nao pode ser passada como parametro novamente

// AGORA COMPREENDENDO COMO FUNCIONAM OS ESCOPOS, CADA ESCOPO ETC, CONCEITOS

// ESCOPO DE var assim undefinded

// famoso hoisting
// console.log(user)
// var user = "Leo"

// ESCOPO global
var Email = "leozinho"

// escopo de bloco
{
    console.log(email)
}

// var pega em escopo global e funciona, e fosse let ele nao acessava o escopo global, ele respeita seu escopo
{
    var age = 18
}

console.log(age)


//  nomes de variaveis

let username = "leo"
let userName = "leo"

console.log(username)
console.log(userName)


// PODEMOS 

let $email = "dsadsa"
let _email = "dsadsa"

console.log(_email)
console.log(email)

// recomendações
// use nomes descritivos em ingles, o mais recomendado, maior legibilidade
// camelcase recomendado ou snake_case, os mais utilizados com nomes de variaveis e funcoes

let produtcName = "Teclado"
let lastName = "Souza"
let product_name = "Keyboard"

// Tipos de Dados

// string - leonardo -- number - 1234 -- boolean - true -- null - vazio -- undefinded - nao definido

let userrname = "leozin"

console.log(typeof userrname);

// aspas duplas e dentro usa aspas simples dela
console.log("aspas simpes vs dupla");
console.log('aspas simpes vs dupla');


console.log(`acento grave permite escrever 
    com multiplas linhas`)

// TEMPLATE LITERALS

let nameR = "leozin"
let emailS = "@gmail"

// passar mais de um parametro
console.log(nameR, emailS, "teste")

// concatenar texto

let message = "Olá" + nameR + "vc conectou com o email" + emailS

console.log(message)

console.log(`Olá, ${userName}. Vc conectou com o e-mail ${emailS}`)


//  tipo number

console.log(120.70);

console.log(12.5 / 2)

//  boolean

console.log(true);
console.log(false);

let isLoading = true

console.log(typeof isLoading)

// Undefined e Null

let emptiness
console.log("O valor é:", emptiness);

let empty = null
console.log("O valor é:", empty);

// Conversao de tipos e coerçao de tipos

let option = 1
console.log(Boolean(option))
console.log(typeof Boolean(option))

// OPERADORES

console.log("SOMA:", 12 + 8)
console.log("CONCAT:", "12" + "8")


// incremento e decremento

let numero = 10

numero++

//  o ++ incrementa depois, apos (++number) (number++)

// e decremento será tirar ou seja number-- ou --number

// Ordem de Precedência (10 + 2) * 2 ou 10 + 2 * 2
let total = 2 + 3 * 4

let total2 = (2 + 3) * 4

//  Igual a e Diferente de

let one = 1
let two = 2

// se é igual
console.log(one == two)

// se é diferente
console.log(one != two)

// Estritamente Igual e Diferente

let three = 3
let four = 4

console.log(one === 1) 
console.log(one !== 1) 
console.log(one === "1")

// Maior, Menor e Igual
let balance = 500
let payment = 120


// > Maior que ou < Menor que
console.log(balance > payment)
console.log(balance < payment)
// Maior ou igual a - Menor ou igual a
console.log(balance >= payment)
console.log(balance <= payment)


// Operadores de Atribuição "="

value = 1

// incremento

value += 2

// Operadores Lógicos

let e_email = true
let password = true

// AND (E) &&

console.log(e_email && password)

// OR (OU) ||
console.log(e_email || password)

// NOT (negacao) !
// esta verificacao ve se ele eh oposto de verdadeira, se for false ele retorna true, pois sera
// oposto de verdadeiro
console.log(!password)

// DOM DOCUMENT OBJECT MODEL


