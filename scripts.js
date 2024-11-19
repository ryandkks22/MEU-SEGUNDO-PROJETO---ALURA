// Lógica para navegação entre as etapas
document.addEventListener('DOMContentLoaded', () => {
    const botoes = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');

    // Função para mudar de passo
    const mudarPasso = (proximo) => {
        passos.forEach((passo) => passo.classList.remove('ativo')); // Remove o ativo atual
        document.getElementById(`passo-${proximo}`).classList.add('ativo'); // Ativa o próximo passo
    };

    // Adiciona evento de clique nos botões
    botoes.forEach((botao) => {
        botao.addEventListener('click', () => {
            const proximoPasso = botao.getAttribute('data-proximo'); // Obtém o próximo passo
            mudarPasso(proximoPasso); // Altera o passo
        });
    });
});
