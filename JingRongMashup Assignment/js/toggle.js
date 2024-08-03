
document.addEventListener('DOMContentLoaded', (event) => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarSocial = document.querySelector('.navbar-social');
    const themeToggle = document.querySelector('.theme-toggle');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarSocial.classList.toggle('active');
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        themeToggle.innerHTML = document.body.classList.contains('dark-mode')
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

