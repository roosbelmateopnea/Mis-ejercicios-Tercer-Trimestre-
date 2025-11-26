
const toppings = document.getElementsByClassName('topping');

for (const topping of toppings) {

    topping.addEventListener('mouseenter', () => {
        topping.classList.add('hover-color');
    });

    topping.addEventListener('mouseleave', () => {
        topping.classList.remove('hover-color');
    });

    topping.addEventListener('click', () => {

        for (const t of toppings) {
            t.classList.remove('selected-color');
        }

        topping.classList.add('selected-color');

        console.log(topping.innerText);
    });
}


document.getElementById("zapatos").addEventListener("click", () => {
    document.body.style.backgroundImage = "url('Imagenes/zapatos.png')";
});

document.getElementById("camisas").addEventListener("click", () => {
    document.body.style.backgroundImage = "url('Imagenes/camisas.png')";
});

document.getElementById("blusas").addEventListener("click", () => {
    document.body.style.backgroundImage = "url('Imagenes/blusas.png')";
});

document.getElementById("pantalones").addEventListener("click", () => {
    document.body.style.backgroundImage = "url('Imagenes/pantalones.png')";
});
