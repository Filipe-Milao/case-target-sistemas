function inverteString(texto) {
    // inicializa uma string vazia para armazenar o resultado invertido
    let stringInvertida = '';

    // percorre a string de trás para frente
    for (let i = texto.length - 1; i >= 0; i--) {
        // adiciona cada caractere ao resultado
        stringInvertida += texto[i];
    }

    return stringInvertida;
}

// Definindo a string diretamente no código
const stringOriginal = "Exemplo de string";

inverteString(stringOriginal);

