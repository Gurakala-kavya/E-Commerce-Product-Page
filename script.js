let currentIndex = 0;
const images = document.querySelectorAll('.product-image-container img');

function navigateNext() {
    currentIndex = (currentIndex + 1) % images.length;
    scrollToImage(currentIndex);
}

function scrollToImage(index) {
    const container = document.querySelector('.content');
    container.scroll({
        left: container.offsetWidth * index,
        behavior: 'smooth'
    });
}
