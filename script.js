document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const moreText = button.previousElementSibling.querySelector('.more-text');
        if (moreText.style.display === 'none' || moreText.style.display === '') {
            moreText.style.display = 'inline';
            button.textContent = 'Read Less';
        } else {
            moreText.style.display = 'none';
            button.textContent = 'Read More';
        }
    });
});