const boton = document.querySelector('button');
const color = document.getElementById('color');


let colorAnterior = '#FFFFFF'; 

function generarColorHexAleatorio() {
    const digitos = '0123456789ABCDEF';
    let colorHex = '#';
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * 16);
        colorHex += digitos[indiceAleatorio];
    }
    return colorHex;
}

boton.addEventListener('click', function () {
    let colorNuevo = generarColorHexAleatorio();
    document.querySelector('.arriba').style.backgroundColor = colorAnterior;
    document.querySelector('.abajo').style.backgroundColor = colorNuevo;
    color.textContent = colorNuevo;
    colorAnterior = colorNuevo;
});