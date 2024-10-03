// Função para animar os números
function animateNumbers() {
    const numbers = document.querySelectorAll('.number h3');

    numbers.forEach(number => {
        const target = parseInt(number.getAttribute('data-target')); // Valor final do número
        const speed = 200; // Ajuste da velocidade da animação

        const updateNumber = () => {
            const currentNumber = parseInt(number.innerText); // Valor atual exibido
            const increment = Math.ceil(target / speed); // Incremento a ser adicionado a cada ciclo

            if (currentNumber < target) {
                number.innerText = currentNumber + increment; // Incrementa o valor
                setTimeout(updateNumber, 20); // Ajusta a velocidade da atualização
            } else {
                number.innerText = target; // Assegura que o número final seja o valor correto
            }
        };

        updateNumber();
    });
}

// Chamar a função de animação assim que a página carregar
window.addEventListener('DOMContentLoaded', animateNumbers);
