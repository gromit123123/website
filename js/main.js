/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(element => {
        observer.observe(element);
    });

    const form = document.getElementById('contact-form');
    const modal = document.getElementById('success-modal');
    const closeModalBtn = document.getElementById('close-modal');

    if (form && modal) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); 
            modal.showModal();
            form.reset();
        });

        closeModalBtn.addEventListener('click', () => {
            modal.close();
        });

        modal.addEventListener('click', (e) => {
            const dialogDimensions = modal.getBoundingClientRect();
            if (
                e.clientX < dialogDimensions.left ||
                e.clientX > dialogDimensions.right ||
                e.clientY < dialogDimensions.top ||
                e.clientY > dialogDimensions.bottom
            ) {
                modal.close();
            }
        });
    }
});