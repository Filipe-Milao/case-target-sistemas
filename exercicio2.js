function pertenceFibonacci(numero) {
    // Inicializa os dois primeiros números da sequência de Fibonacci
    let a = 0, b = 1;

    // Caso o número informado seja 0 ou 1, ele já pertence à sequência
    if (numero === 0 || numero === 1) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    }

    // Calcula a sequência até que o número seja maior ou igual ao número informado
    while (b < numero) {
        let temp = b;
        b = a + b;
        a = temp;
    }

    // Verifica se o número informado é igual ao último número calculado da sequência
    if (b === numero) {
        return `O número ${numero} pertence à sequência de Fibonacci.`;
    } else {
        return `O número ${numero} não pertence à sequência de Fibonacci.`;
    }
}
// Definindo o número diretamente no código
const numero = 10;


pertenceFibonacci(numero);