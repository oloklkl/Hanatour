var swiper = new Swiper('.slide-intro', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    // autoplay: true,
    pagination: {
        el: '.slide-intro .swiper-pagination',
        clickable: true,
    },
});

var swiper = new Swiper('.slide-studio', {
    slidesPerView: 1.2,
    spaceBetween: 20,
    pagination: {
        el: '.slide-studio .swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        600: {
            slidesPerView: 2.2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
    overflow: true,
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
