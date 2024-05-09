// alert("Bienvenido a mi portfolio!")
// const nombre = prompt ("Ingrese su nombre: ")
// alert("Hola " + nombre + "! Bienvenido a mi portfolio!")

// Array de frases
const frases = [
        "La vida es lo que pasa mientras estás ocupado haciendo otros planes.",
        "El único modo de hacer un gran trabajo es amar lo que haces.",
        "No cuentes los días, haz que los días cuenten.",
        "La mente es todo. Lo que pienses, eso serás.",
        "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.",
        "La mejor venganza es un gran éxito.",
        "No te preocupes por los fracasos, preocúpate por las oportunidades que pierdes cuando ni siquiera lo intentas.",
        "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello."
    ];
    // Función para generar una frase aleatoria
    function generarFrase() {
        // Genera un índice aleatorio dentro del rango de la longitud del array de frases
        const indice = Math.floor(Math.random() * frases.length);
        // Obtiene la frase correspondiente al índice generado
        const fraseAleatoria = frases[indice];
        // Muestra la frase en el footer
        document.getElementById("frase").innerText = fraseAleatoria;
    }
    // Agrega un listener al botón para ejecutar la función generarFrase cuando se haga clic
    document.getElementById("btn-generar").addEventListener("click", generarFrase);


// Función para agregar la clase de animación cuando pasa el mouse sobre la imagen
function agregarAnimacion(event) {
    event.target.classList.add('animated', event.target.dataset.animacion);
}

// Función para quitar la clase de animación cuando el mouse sale de la imagen
function quitarAnimacion(event) {
    event.target.classList.remove('animated', event.target.dataset.animacion);
}

// Seleccionar todas las imágenes con la clase "acerca-imagen"
const imagenes = document.querySelectorAll('.acerca-imagen');

// Agregar eventos de mouse a cada imagen
imagenes.forEach(imagen => {
    imagen.addEventListener('mouseenter', agregarAnimacion);
    imagen.addEventListener('mouseleave', quitarAnimacion);
});

// Función para activar la animación de desvanecimiento cuando el elemento está completamente dentro de la vista
function activarDesvanecimiento(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        } else {
            entry.target.classList.remove('fade-in');
        }
    });
}

// Crear un observador de intersección
const observer = new IntersectionObserver(activarDesvanecimiento, { threshold: 0 });

// Observar todos los elementos con la clase "fade-in-element"
document.querySelectorAll('.fade-in-element').forEach(elemento => {
    observer.observe(elemento);
});



