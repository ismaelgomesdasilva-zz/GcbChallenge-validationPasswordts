"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCheck = void 0;
//Variaveis usadas para verificações
// const password = 'ADASDASDASXZCXgZXVZXC@@ZXC'
const numbers = "0123456789";
const iChars = "!`@#$%^&*()+=-[]\\';,./{}|\":<>?~_";
const MIN_LENGTH_PASSWORD = 16;
const MAX_LENGTH_PASSWORD = 32;
//Variaveis usadas para verificações
// Criando uma tipagem para meus resultados
// Criando uma tipagem para meus resultados
//Estruturação dos meus resultados
//Estruturação dos meus resultados
//Primeira verificação: Tamanho da senha
function isValidLength(password) {
    //Condicional para saber se minha senha é menor ou maior que 16
    if (password.length < MIN_LENGTH_PASSWORD ||
        password.length > MAX_LENGTH_PASSWORD) {
        return false; //Caso não passar, irá me retornar um falso que posteriormente será usado na minha validação.
    }
    return true; //Porém caso passe, deve me retornar um result:true
}
function isValidSpecialCharacther(password) {
    //criando uma variavel e colocando minha senha como valor, optei por fazer desse modo para evitar bugs posteriormente
    const data = password;
    //criei essa variavel que vai servir como acumulador de caracteres especiais
    let characterSpecialAcc = [];
    //Crio um for para pecorrer minha senha
    for (let i = 0; i < data.length; i++) {
        //criando uma condição de que se meu caracter não for especial ele pula porém se for especial ele da um push no meu acumulador.
        if (iChars.indexOf(data.charAt(i)) != -1) {
            //O índice do último caractere é o comprimento da string - 1
            characterSpecialAcc.push(i); //Caso ache algum caracter especial, jogue dentro do meu acc
        }
    }
    //aqui eu verifico se tenho 2 caracter especial
    if (characterSpecialAcc.length < 2) {
        return false;
    }
    return true;
}
function isValidUppercase(password) {
    let upCase = false;
    password.split("").forEach((element) => {
        if (numbers.includes(element)) {
            return true;
        }
        if (iChars.includes(element)) {
            return true;
        }
        if (element.toUpperCase() === element) {
            upCase = true;
        }
    });
    return upCase;
}
function isValidLowerCase(password) {
    let lowCase = false;
    password.split("").forEach((element) => {
        if (numbers.includes(element)) {
            return true;
        }
        if (iChars.includes(element)) {
            return true;
        }
        if (element.toLowerCase() === element) {
            lowCase = true;
        }
    });
    return lowCase;
}
function isValidSequentialLetter(password) {
    let passwordUpper = password.toUpperCase();
    let sequentialLetters = true;
    for (let l = 0; l < password.length; l++) {
        // verificação de sequencia de letra pelo charcodeatt usando o metodo unicode.
        // o if verifica se o valor do segundo índice é igual a soma do indice atual + 1 e se o terceiro índice
        // é igual à soma do índice atual + 2, se for, então é uma sequência de letras.
        if (passwordUpper.charCodeAt(l + 1) == passwordUpper.charCodeAt(l) + 1 &&
            passwordUpper.charCodeAt(l + 2) == passwordUpper.charCodeAt(l) + 2) {
            sequentialLetters = false;
        }
    }
    return sequentialLetters;
}
function isValidSequentialNumber(password) {
    for (let j = 0; j < password.length; j++) {
        let passwordLower = password.toLowerCase();
        // a condição é: se o número atual do índice (0) somado com 1 for igual ao valor do segundo índice (1)
        // e se o valor atual do indice (0) somado com 2 for igual ao valor do terceiro indice (2)
        // significa que os caracteres são uma sequências.
        if (+passwordLower[j + 1] == +passwordLower[j] + 1 &&
            +passwordLower[j + 2] == +passwordLower[j] + 2) {
            return false;
        }
    }
    return true;
}
function isValidCheck(password) {
    let resultErros = {
        result: true,
        error: [],
    };
    if (!isValidLength(password)) {
        resultErros.result = false;
        resultErros.error.push("tamanho invalido");
    }
    if (!isValidSpecialCharacther(password)) {
        resultErros.result = false;
        resultErros.error.push("Não tem caracteres especiais");
    }
    if (!isValidUppercase(password)) {
        resultErros.result = false;
        resultErros.error.push("Não tem letra maiuscula");
    }
    if (!isValidLowerCase(password)) {
        resultErros.result = false;
        resultErros.error.push("Não tem letra minuscula");
    }
    if (!isValidSequentialLetter(password) || !isValidSequentialNumber(password)) {
        resultErros.result = false;
        resultErros.error.push("tem sequencia de caracteres");
    }
    return resultErros;
}
exports.isValidCheck = isValidCheck;
console.log(isValidCheck("EUNÃOTENH@LETR@MsINISCULA"));
