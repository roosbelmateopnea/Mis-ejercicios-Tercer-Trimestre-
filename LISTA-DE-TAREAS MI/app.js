const input = document.getElementById("ingresar-tarea");
const boton = document.querySelector("button");
const listaDeTarea = document.getElementById("lista-de-tareas");




function agregarTarea() {
    if(input.value){
        
        let tareaNueva = document.createElement("div");
        tareaNueva.classList.add("tarea");
        let texto = document.createElement("p");

        let numero = listaDeTarea.children.length + 1;
        texto.innerText = numero + ". " + input.value;


        tareaNueva.appendChild(texto);

        let iconos = document.createElement('div');
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);

        let completar = document.createElement('i');
        completar.classList.add('bi','bi-check-circle-fill','icono-completar');

        completar.addEventListener('click',completarTarea);
        let eliminar = document.createElement('i');

        eliminar.classList.add('bi','bi-trash-fill','icono-eliminar');
        eliminar.addEventListener('click',eliminarTarea);

        let modificar = document.createElement('i');
        modificar.classList.add('bi','bi-pencil-square','icono-modificar');
        modificar.addEventListener('click', modificarTarea); 




        iconos.append(completar,eliminar,modificar);

        listaDeTarea.appendChild(tareaNueva);

    } else{
        alert('Por Favor ingresa una Tarea.');
    }

}

function completarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
}


function eliminarTarea(e){
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
}


boton.addEventListener('click',agregarTarea);

input.addEventListener('keydown',(e) => {
    if(e.key == 'Enter'){
        agregarTarea();
    }

})

function contadorLista() {
    for (let i = 0; i < listaDeTarea.children.length; i++) {
        let tarea = listaDeTarea.children[i];

    }
    
}


function modificarTarea(e) {
    let tarea = e.target.parentElement.parentElement;
    let texto = tarea.querySelector("p");

    let nuevoTexto = prompt("Editar tarea:", texto.innerText);

    if (nuevoTexto !== null && nuevoTexto.trim() !== "") {
        texto.innerText = nuevoTexto;
    }
}
