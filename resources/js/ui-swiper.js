// 스튜디오 섹션 스와이퍼
var swiper = new Swiper('.mySwiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    watchSlidesProgress: true,
});

//event-banner 슬라이드
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

showSlide(currentSlide);

setInterval(nextSlide, 6000); // 6초마다 슬라이드 전환
//event-banner 슬라이드 끝

// sub_02 스와이퍼
var swiper = new Swiper('.mySwiper3', {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});
var swiper = new Swiper('.mySwiper2', {
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: swiper,
    },
});

//travel-showcase 섹션 버튼
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.showcase').appendChild(items[0]);
});
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.showcase').prepend(items[items.length - 1]);
});
