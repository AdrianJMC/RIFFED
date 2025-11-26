document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleccionamos elementos
    const slides = document.querySelectorAll('.slide-card');
    const dots = document.querySelectorAll('.dot-indictaor');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    // 2. Definimos el orden de las clases (Posiciones)
    // El orden afecta la dirección visual del giro.
    let classNames = ['slides-box', 'slides-box4', 'slides-box5', 'slides-box3', 'slides-box2'];
    
    let autoPlayTimer; // Variable para guardar el temporizador

    // --- FUNCIÓN PRINCIPAL PARA MOVER EL CARRUSEL ---
    function moveCarousel(direction) {
        if (direction === 'next') {
            // Mover hacia adelante (Saca el último y lo pone al principio)
            const lastClass = classNames.pop();
            classNames.unshift(lastClass);
        } else {
            // Mover hacia atrás (Saca el primero y lo pone al final)
            const firstClass = classNames.shift();
            classNames.push(firstClass);
        }

        updateClasses(); // Aplicar cambios visuales
    }

    // --- FUNCIÓN PARA APLICAR CLASES CSS ---
    function updateClasses() {
        slides.forEach((slide, index) => {
            // Limpiamos clases anteriores
            slide.classList.remove('slides-box', 'slides-box2', 'slides-box3', 'slides-box4', 'slides-box5');
            // Ponemos la nueva clase según el array rotado
            slide.classList.add(classNames[index]);
        });
        updateDots();
    }

    // --- FUNCIÓN PARA ACTUALIZAR PUNTOS ---
    function updateDots() {
        slides.forEach((slide, index) => {
            if (slide.classList.contains('slides-box')) { // Si es el slide central
                dots.forEach(dot => dot.classList.remove('active'));
                dots[index].classList.add('active');
            }
        });
    }

    // --- MANEJO DEL AUTO-PLAY ---
    function startAutoPlay() {
        autoPlayTimer = setInterval(() => {
            moveCarousel('next');
        }, 10000); // 10 segundos
    }

    function resetTimer() {
        clearInterval(autoPlayTimer); // Detiene el reloj actual
        startAutoPlay(); // Inicia uno nuevo
    }

    // --- EVENT LISTENER (CLICKS) ---
    
    // Botón Siguiente
    nextBtn.addEventListener('click', () => {
        moveCarousel('next');
        resetTimer(); // Reinicia el contador para que no salte de golpe
    });

    // Botón Anterior
    prevBtn.addEventListener('click', () => {
        moveCarousel('prev');
        resetTimer();
    });

    // Iniciar el carrusel automático al cargar
    startAutoPlay();
});