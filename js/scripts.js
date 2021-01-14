// Seleccionar elementos

// querySelector
//Seleccionando el h2
const heading = document.querySelector('.header__texto h2') //selecciona entre 0 y 1 Elementos
console.log(heading);

//Modificando el headding

heading.textContent = 'Heading modificado con Javascript'; //Edita el texto

heading.classList.add('nueva_clase'); //Añadir clases


// querySelectorAll

const enlaces = document.querySelectorAll('.navegacion a') //Selecciona todos los elementos que concuerden con el selector

console.log(enlaces); 
console.log(enlaces[0]); //Para acceder a cada elemento se usa la sintaxis de los array

enlaces[1].textContent = 'Enlace modificado con javascript';
enlaces[1].href = 'https://www.google.com.ar/'; //Mofidicando el href del enlace
enlaces[1].classList.remove('navegacion__enlace'); //Removiendo una clase

// getElementById


//Generar codigo html con javascript

//createElement

//Creando un nuevo enlace

const nuevoEnlace = document.createElement('A');

console.log(nuevoEnlace); //enlace creado 

//agregarle los atributos:

//href
nuevoEnlace.href = 'nuevo_enlace.html';
//Texto
nuevoEnlace.textContent = 'Enlace creado con javascript';
//Clase
nuevoEnlace.classList = 'navegacion__enlace';

//Agregar enlace al documento:

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

//Eventos en javascript

console.log(1);

window.addEventListener('load', imprimir());  //load espera a que suceda el evento escuchado para ejecutar la funcion

window.onload = () => console.log(3); //Otra forma de esperar a que el documento cargue antes de ejecutar codigo

document.addEventListener('DOMContentLoaded', () => console.log(4)); //Solo espera a que se descargue el html (no espera el css o las imagenes)

console.log(5);

function imprimir() {
    console.log(2);
}

window.onscroll = () => console.log('Scroleandooooo...');

//Seleccionar elementos y asociarles un evento

const btnEnviar = document.querySelector('.boton--primario');

//addEventListener registra un evento
/*
btnEnviar.addEventListener('click', evento => {
    console.log(evento); //datos del evento
    evento.preventDefault();  //previene la accion por default del evento (en este caso enviar los datos del submit)
    console.log('Enviando formulario');
}) */

//Eventos de los inputs y textarea

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

/*
nombre.addEventListener('input', event => {
    //console.log(event); //Muestra en tiempo real cada letra que se tipea
    console.log(event.target.value); //Muestra el valor completo de lo que se escribe

})
email.addEventListener('input', leerTexto)

mensaje.addEventListener('input', leerTexto)

//La funcion tambien se puede definir por fuera para leer todos los eventos con una sola funcion

function leerTexto(event) {
    console.log(event.target.value);

}

*/

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

function leerFormularios(evento) {
     datos[evento.target.id] = evento.target.value;
     console.log(datos);
}

nombre.addEventListener('input', leerFormularios);
email.addEventListener('input', leerFormularios);
mensaje.addEventListener('input', leerFormularios);


//Evento submit
//El evento submit se usa cuando se trata de un formulario
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();

    //Validar el formulario
    const {nombre, email, mensaje} = datos;

    if(nombre === '' || email === '' || mensaje === '') {
        mostrarAlerta('Completa todos los campos', true);
        return;
    }

    //Enviar el formulario
    mostrarAlerta('Envio Exitoso');
})


// Funcion del mensaje de error en pantalla
/*
function mostrarError(mensaje) {
    const error = document.createElement('P');
    error.textContent = mensaje;
    error.classList.add('error');
    formulario.appendChild(error);

    //que desaparezca en 5s
    setTimeout(() => {
        error.remove();
    }, 7000);
}

//funcion de alerta de envio exitoso


function envioExitoso(mensaje) {
    const sucess = document.createElement('P');
    sucess.textContent = mensaje;
    sucess.classList.add('sucess');
    formulario.appendChild(sucess);

    setTimeout(() => {
        sucess.remove();
    }, 7000);
}
*/

//Refactoring, acortando el codigo

function mostrarAlerta(mensaje, error =null) {
    const mostrarAlerta = document.createElement('P');
    mostrarAlerta.textContent = mensaje;
    if(error) {
        mostrarAlerta.classList.add('error');
    } else {
        mostrarAlerta.classList.add('sucess')
}

    formulario.appendChild(mostrarAlerta);
     setTimeout(() => {
         mostrarAlerta.remove();
     }, 7000);

}