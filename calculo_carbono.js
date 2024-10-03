document.getElementById('form-carbono').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita o refresh da página

    // Obtendo os valores do formulário
    const transporte = parseFloat(document.getElementById('transporte').value);
    const energia = parseFloat(document.getElementById('energia').value);

    // Fatores de emissão
    const fatorEmissaoTransporte = 0.2; // kg CO₂/km
    const fatorEmissaoEnergia = 0.5; // kg CO₂/kWh

    // Cálculo da pegada de carbono
    const pegadaTransporte = transporte * fatorEmissaoTransporte * 52; // anual
    const pegadaEnergia = energia * fatorEmissaoEnergia * 12; // anual
    const pegadaTotal = pegadaTransporte + pegadaEnergia;

    // Exibindo o resultado
    const resultadoDiv = document.getElementById('resultado-carbono');
    resultadoDiv.innerHTML = `
        <h3>Resultado da Pegada de Carbono:</h3>
        <p>Emissão Anual por Transporte: ${pegadaTransporte.toFixed(2)} kg</p>
        <p>Emissão Anual por Energia: ${pegadaEnergia.toFixed(2)} kg</p>
        <p>Emissão Total Anual: ${pegadaTotal.toFixed(2)} kg</p>
    `;
});
