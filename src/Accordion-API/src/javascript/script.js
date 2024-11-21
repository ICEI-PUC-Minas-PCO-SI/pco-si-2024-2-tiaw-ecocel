const accordions = document.querySelectorAll('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
        const main = accordion.querySelector('.accordion-body');
        main.classList.toggle('active');
    })
})