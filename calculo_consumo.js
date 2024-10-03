document.getElementById('form-calculo').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o refresh da página

    // Obtendo os valores do formulário
    const material = document.getElementById('material').value;
    const quantidade = parseFloat(document.getElementById('quantidade').value);
    const periodo = document.getElementById('periodo').value;

    // Fator de emissão por material (kg de CO₂ por kg de material)
    const fatorEmissao = {
        plastico: 1.8,
        papel: 0.9,
        vidro: 0.5,
        metal: 2.5,
        organico: 0.1
    };

    // Cálculo do consumo total
    let multiplicador;
    switch (periodo) {
        case 'diario':
            multiplicador = 1;
            break;
        case 'semanal':
            multiplicador = 7;
            break;
        case 'mensal':
            multiplicador = 30;
            break;
    }

    const consumoTotal = quantidade * multiplicador;
    const impactoCO2 = consumoTotal * fatorEmissao[material];

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = `
        <h3>Resultado do Cálculo:</h3>
        <p>Material: ${material.charAt(0).toUpperCase() + material.slice(1)}</p>
        <p>Quantidade Total Gerada: ${consumoTotal.toFixed(2)} kg</p>
        <p>Estimativa de Emissão de CO₂: ${impactoCO2.toFixed(2)} kg</p>
    `;
});
