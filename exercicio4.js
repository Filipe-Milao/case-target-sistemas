const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
};

//calcula o percentual do faturamento
function calcularPercentualFaturamento(faturamento) {
    // calcula o total do faturamento
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
    const percentuais = {};

    // calculo para o percentual
    for (const [estado, valor] of Object.entries(faturamento)) {
        percentuais[estado] = ((valor / totalFaturamento) * 100).toFixed(2) + '%';
    }


    return percentuais;
}

calcularPercentualFaturamento(faturamento);
