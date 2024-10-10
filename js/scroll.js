const menu = document.getElementById('menu');

window.addEventListener('scroll', () => {
    const triggerPoint = window.scrollY > 100;
    if (triggerPoint) {
        menu.classList.add('menu-hidden');
    }
    else {
        menu.classList.remove('visible');
    }
});

window.addEventListener('scroll', () => {


    const scrollUp = window.scrollY < 100;
    if (scrollUp) {
        menu.classList.remove('menu-hidden');
    }
    else {
        menu.classList.add('visible');
    }
});