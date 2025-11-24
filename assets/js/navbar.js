document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener referencias a los elementos del DOM
  const menuToggle = document.querySelector(".menu-toggle");
  const navActions = document.querySelector(".nav-actions");

  if (menuToggle && navActions) {
    // 2. Función para alternar el menú
    menuToggle.addEventListener("click", () => {
      // Alterna la clase 'is-open' en el menú (para CSS)
      navActions.classList.toggle("is-open");

      // Alterna la clase 'active' en el botón (para animación de hamburguesa)
      menuToggle.classList.toggle("active");
    });
  } else {
      // Opcional: Si los elementos no se encuentran, muestra un error en la consola.
      // console.error("Error: Los selectores .menu-toggle o .nav-actions no se encontraron.");
  }
});