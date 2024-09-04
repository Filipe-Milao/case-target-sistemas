const jsonData = require('./dados.json');

function calcularFaturamento(dados) {
    //filtrando os valores na array, buscando apenas os valores maiores que 0
    const valores = dados
        .map(item => item.valor)
        .filter(valor => valor > 0);

    // calcula o maior e o menor valor 
    const menorValor = Math.min(...valores);
    const maiorValor = Math.max(...valores);

    //calcula a soma dos valores e a média
    const somaDosValores = valores.reduce((acc, item) => acc + item, 0);
    const mediaValores = somaDosValores / valores.length;

    // calcula a quantidade de dias que o valor foi acima da média
    const diasAcimaMedia = valores.filter(valor => valor > mediaValores).length;

    return { menorValor: menorValor.toFixed(2), maiorValor: maiorValor.toFixed(2), diasAcimaMedia: diasAcimaMedia };
};
// chama a função e exibe o resultado
calcularFaturamento(jsonData);

