//3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
//• O menor valor de faturamento ocorrido em um dia do mês;
//• O maior valor de faturamento ocorrido em um dia do mês;
//• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.
//IMPORTANTE:
//a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
//b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

// Definindo o vetor de faturamento diário
const faturamentoDiario = [1000, 2000, 1500, 3000, 2500, 4000, 3500, 5000, 4500, 6000, 5500, 7000, 6500, 8000, 7500, 9000, 8500, 10000, 9500, 11000, 10500, 12000, 11500, 13000, 12500, 14000, 13500, 15000, 14500, 16000];

// Calculando o menor valor de faturamento
const menorFaturamento = Math.min(...faturamentoDiario);

// Calculando o maior valor de faturamento
const maiorFaturamento = Math.max(...faturamentoDiario);

// Calculando a média mensal de faturamento
const somaFaturamento = faturamentoDiario.reduce((acc, val) => acc + val, 0);
const mediaMensal = somaFaturamento / faturamentoDiario.length;

// Calculando o número de dias com faturamento superior à média mensal
const diasAcimaDaMedia = faturamentoDiario.filter(faturamento => faturamento > mediaMensal).length;

// Exibindo os resultados
console.log(`Menor valor de faturamento: ${menorFaturamento}`);
console.log(`Maior valor de faturamento: ${maiorFaturamento}`);
console.log(`Número de dias com faturamento acima da média mensal: ${diasAcimaDaMedia}`);