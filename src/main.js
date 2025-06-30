import "./scss/main.scss";


// JavaScript extra para mejorar la experiencia (no es necesario para que funcione la pagina)
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('#menu-toggle');

    // Cerrar menú al redimensionar a desktop (opcional)
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });

    // Cerrar menú con tecla ESC (opcional)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuToggle.checked) {
            menuToggle.checked = false;
        }
    });
});
