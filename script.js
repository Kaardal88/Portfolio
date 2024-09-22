const readMore = document.getElementById("read-more-btn");
const moreText = document.getElementById("more-text");

readMore.addEventListener('click', () => {
    if (moreText.style.display === 'none' || moreText.style.display === '') {
        moreText.style.display = 'inline';
        readMore.textContent = 'Read Less';
    } else {
        moreText.style.display = 'none';
        readMore.textContent = 'Read More';
    }
})