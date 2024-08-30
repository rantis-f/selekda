document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider-image');
    const totalSlides = slides.length;
    let currentIndex = 0;

    function updateSliderPosition() {
        if (totalSlides === 0) return; // Tidak ada slide
        const slideWidth = slides[0].clientWidth;
        slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    function moveToPreviousSlide() {
        if (totalSlides <= 1) return;
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSliderPosition();
    }

    function moveToNextSlide() {
        if (totalSlides <= 1) return;
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSliderPosition();
    }

    document.querySelector('.prev').addEventListener('click', moveToPreviousSlide);
    document.querySelector('.next').addEventListener('click', moveToNextSlide);

    // Update posisi slider saat ukuran jendela berubah
    window.addEventListener('resize', updateSliderPosition);

    // Inisialisasi posisi slider saat pertama kali dimuat
    updateSliderPosition();
});

