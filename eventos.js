const textoElemento = document.getElementById("botao-form");
textoElemento.addEventListener('mouseover', () => {
    textoElemento.style.color = 'blue';
});

textoElemento.addEventListener('mouseout', () => {
    textoElemento.style.color = 'black';
});

