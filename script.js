function playHoverSound() {
    var audio = document.getElementById("hoverSound");
    audio.play();
}

// Função para pausar o som ao retirar o cursor do botão
function pauseHoverSound() {
    var audio = document.getElementById("hoverSound");
    audio.pause();
    audio.currentTime = 0;
}

// função para recarregar a página
function recarregarPagina() {
    location.reload();
}

function voltar() {
    window.history.back();
}

function avancar() {
    window.history.go(1);
}

function educationRef() {
    window.location.href = 'education.html';
}
