// Mostrar el botón cuando se haga scroll hacia abajo
window.addEventListener('scroll', function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    if (window.scrollY > 300) { // Muestra el botón si el scroll es mayor a 300px
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Hacer scroll suave al hacer clic en el botón
document.getElementById('scrollToTopBtn').addEventListener('click', function(event) {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});