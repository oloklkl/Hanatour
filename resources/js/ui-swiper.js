var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
});

const slides = document.querySelectorAll('.event-banner__slides li');
let currentSlide = 0;

function showSlide(index) {
    // Remove the 'active' class from all slides
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Add the 'active' class to the current slide
    slides[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initial slide
showSlide(currentSlide);

// Change slide every 6 seconds
setInterval(nextSlide, 6000); // 6초마다 슬라이드 전환

var swiper2 = new Swiper('.mySwiper2', {
    navigation: {
        nextEl: '.swiper-button-next-thumb',
        prevEl: '.swiper-button-prev-thumb',
    },
    thumbs: {
        swiper: swiper,
    },
});
