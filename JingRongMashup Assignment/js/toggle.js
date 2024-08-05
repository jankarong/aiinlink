document.addEventListener('DOMContentLoaded', (event) => {
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarMenu = document.querySelector('.navbar-menu');
    const navbarSocial = document.querySelector('.navbar-social');
    const themeToggle = document.querySelector('.theme-toggle');
    const navLinks = document.querySelectorAll('.navbar-menu a');

    navbarToggle.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
        navbarSocial.classList.toggle('active');
    });

    // Theme toggle functionality
    const setTheme = (isDark) => {
        document.body.classList.toggle('dark-mode', isDark);
        themeToggle.innerHTML = isDark
            ? '<i class="fas fa-sun"></i>'
            : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDark);
    };

    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setTheme(savedDarkMode);

    themeToggle.addEventListener('click', () => {
        const isDark = !document.body.classList.contains('dark-mode');
        setTheme(isDark);
    });

    // Smooth scrolling for anchor links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                let targetElement = document.getElementById(targetId);

                // If no element with ID found, try to find by class
                if (!targetElement) {
                    targetElement = document.querySelector(`.${targetId}`);
                }

                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // IntersectionObserver for setting active link
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeClass = entry.target.classList[0]; // Assuming the first class is the identifier
                navLinks.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href === `#${activeClass}` || (href.startsWith('#') && entry.target.id === href.substring(1))) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections that correspond to nav links
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            const targetId = href.substring(1);
            let targetElement = document.getElementById(targetId);

            // If no element with ID found, try to find by class
            if (!targetElement) {
                targetElement = document.querySelector(`.${targetId}`);
            }

            if (targetElement) {
                observer.observe(targetElement);
            }
        }
    });
});