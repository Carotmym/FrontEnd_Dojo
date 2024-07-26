document.getElementById("toggleInOut").addEventListener("click", function() {
    this.textContent = this.textContent === "Iniciar sesión" ? "Cerrar sesión" : "Iniciar sesión";
});

document.getElementById("definicionBtn").addEventListener("click", function() {
    this.style.display = "none";
});



// Seleccionamos todos los botones de "Me gusta" por clase o identificador
const botonesMeGusta = document.querySelectorAll('button[id^="megusta_"]');

// Añadimos un event listener a cada botón
botonesMeGusta.forEach(boton => {
    boton.addEventListener('click', function() {
        
        const contenedorDefinicion = this.parentElement;
        
        const tituloDefinicion = contenedorDefinicion.querySelector('h3').textContent;
        
    
        const spanNumero = this.querySelector('span');
        
        let numeroMeGusta = parseInt(spanNumero.textContent);
        numeroMeGusta++;
    
        spanNumero.textContent = numeroMeGusta;
        

        alert(`Te gustó la definición: ${tituloDefinicion}`);
    });
});
/* console.log("Conectado, OK!!!")

let cualquiercosa_cualquirNombre = document.querySelector("#toggleInOut");
let removerBoton = document.querySelector("#definicionBtn");
let megustaGato = document.querySelector("#megusta_gato")
let numeroGato = document.querySelector("#numero_gato")

// Toggle Inicio de Sesion
cualquiercosa_cualquirNombre.addEventListener('dblclick', (evento) => {
if(evento.target.innerText === "Iniciar Sesion"){
    evento.target.innerText = "Cerrar Sesion";
}else{
    evento.target.innerText = "Iniciar Sesion";
}
})

// Remover Boton
removerBoton.addEventListener('click', function(evento){
    removerBoton.remove()
})

// Incrementar likes
megustaGato.addEventListener("click",  function(evento){
    numeroGato.innerText ++;
}) */