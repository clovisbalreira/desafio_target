//2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.
//IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function fibonacciSequence(n) {
    let fibSequence = [0, 1];
    while (fibSequence[fibSequence.length - 1] < n) {
        fibSequence.push(fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2]);
    }
    return fibSequence;
}

function isInFibonacci(n) {
    let fibSequence = fibonacciSequence(n);
    if (fibSequence.includes(n)) {
        return `O número ${n} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${n} não pertence à sequência de Fibonacci.`;
    }
}

// Defina o número que deseja verificar
let numero = 21;
let resultado = isInFibonacci(numero);
console.log(resultado);