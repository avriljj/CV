const carousel = document.getElementById('carousel');
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;
let startX = 0;
let isDragging = false;

function showSlide(n) {
    slides.forEach((slide) => (slide.style.display = 'none'));
    dots.forEach((dot) => dot.classList.remove('active'));
    slides[n].style.display = 'block';
    dots[n].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Event listener for clicking on dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});

// Handle touch and mouse events for drag gesture
carousel.addEventListener('mousedown', handleDragStart);
carousel.addEventListener('touchstart', handleDragStart);

function handleDragStart(e) {
    isDragging = true;
    startX = e.clientX || e.touches[0].clientX;
}

document.addEventListener('mousemove', handleDragMove);
document.addEventListener('touchmove', handleDragMove);

function handleDragMove(e) {
    if (!isDragging) return;
    const currentX = e.clientX || e.touches[0].clientX;
    const diffX = currentX - startX;

    if (diffX > 50) {
        // Swipe right
        startX = currentX;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    } else if (diffX < -50) {
        // Swipe left
        startX = currentX;
        nextSlide();
    }
}

document.addEventListener('mouseup', handleDragEnd);
document.addEventListener('touchend', handleDragEnd);

function handleDragEnd() {
    isDragging = false;
}

// Initial display
showSlide(currentSlide);
