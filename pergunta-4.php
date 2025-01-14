<?php
//4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
//• SP – R$67.836,43
//• RJ – R$36.678,66
//• MG – R$29.229,88
//• ES – R$27.165,48
//• Outros – R$19.849,53
//Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.  

// Definindo o faturamento mensal por estado
$faturamento = [
    "SP" => 67836.43,
    "RJ" => 36678.66,
    "MG" => 29229.88,
    "ES" => 27165.48,
    "Outros" => 19849.53
];

// Calculando o valor total mensal
$totalMensal = array_sum($faturamento);

// Calculando o percentual de representação de cada estado
$percentuais = [];
foreach ($faturamento as $estado => $valor) {
    $percentuais[$estado] = ($valor / $totalMensal) * 100;
}

// Exibindo os resultados
foreach ($percentuais as $estado => $percentual) {
    echo "$estado: " . number_format($percentual, 2) . "%\n";
}
?>