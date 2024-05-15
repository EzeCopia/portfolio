// alert("Bienvenido a mi portfolio!")
// const nombre = prompt ("Ingrese su nombre: ")
// alert("Hola " + nombre + "! Bienvenido a mi portfolio!")


//-------------------------------------- ANIMACIONES SOBRE IMÁGENES   
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

//-------------------------------------- LOGOTIPO
// Selecciona todos los logotipos por su clase
const logotipos = document.querySelectorAll('.logotipo');

// Agrega un evento de escucha a cada logotipo
logotipos.forEach(logotipo => {
    logotipo.addEventListener('mouseenter', () => {
        // Agrega la clase de transición cuando el mouse pasa por encima
        logotipo.classList.add('transition-effect');
    });

    logotipo.addEventListener('mouseleave', () => {
        // Elimina la clase de transición cuando el mouse sale
        logotipo.classList.remove('transition-effect');
    });
});


//-------------------------------------- CARRUSEL
document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('.carousel-inner');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
    const intervalTime = 6000; // Intervalo de tiempo en milisegundos (3 segundos)

    function showSlide(index) {
      carouselInner.style.transition = 'opacity 1s ease'; // Transición de opacidad
      carouselInner.style.opacity = '0.2'; // Ocultar la imagen actual
        setTimeout(function() {
        carouselInner.style.transform = `translateX(-${index * 100}%)`;
        carouselInner.style.opacity = '1'; // Mostrar la nueva imagen
      }, 500); // Esperar a que termine la transición de opacidad antes de mostrar la nueva imagen
    }

    function prevSlide() {
        currentIndex = (currentIndex === 0) ? carouselInner.children.length - 1 : currentIndex - 1;
        showSlide(currentIndex);
    }

    function nextSlide() {
        currentIndex = (currentIndex === carouselInner.children.length - 1) ? 0 : currentIndex + 1;
        showSlide(currentIndex);
    }

    function autoSlide() {
        setInterval(nextSlide, intervalTime); 
    }

    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    autoSlide(); // Iniciar la transición automática
});
