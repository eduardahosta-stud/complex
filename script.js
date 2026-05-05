document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImg');
    const cards = document.querySelectorAll('.image-box');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            // Отримуємо стиль background-image
            const bg = getComputedStyle(card).backgroundImage;
            modal.style.display = 'flex';
            modalImg.style.backgroundImage = bg;
        });
    });

    modal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});