// Muda cor do fundo ao clicar no botao no fim da pagina
document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.createElement('button');
    changeColorButton.textContent = 'Mudar Cor de Fundo';
    changeColorButton.style.marginTop = '20px';
    document.body.appendChild(changeColorButton);

    changeColorButton.addEventListener('click', function () {
        document.body.style.backgroundColor = getRandomColor();
    });
});
//function para escolher a cor
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.getElementById('contatoform').addEventListener('submit', function (event) {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome === '' || email === '' || mensagem === '') {
        alert('Por favor, preencha todos os campos.');
        event.preventDefault();
    } else {
        alert('Formulário enviado com sucesso!');
    }
});

// Evento de mouse e teclado: toda vez que o mouse se move ele gera um console.log no console da pagina mostrando as coordenadas de onde está a posição do mouse
// e quando é clicada qualquer tecla tambem gera um console.log mostrando qual tecla foi pressionada
document.addEventListener('mousemove', function (event) {
    console.log(`Mouse position: X ${event.clientX}, Y ${event.clientY}`);
});

document.addEventListener('keydown', function (event) {
    console.log(`Tecla pressionada: ${event.key}`);
});
