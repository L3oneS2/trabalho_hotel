
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const info = entry.target.querySelector('.info');
            if (entry.isIntersecting) {
                info.classList.add('visible');
            } else {
                info.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.7 // Quando 50% do elemento estiver visível
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});
