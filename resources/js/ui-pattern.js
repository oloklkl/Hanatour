// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$('.all-menu').click(function () {
    $('#nav-all').addClass('active');
});

// #nav-all .close 를 클릭했을 때
// #nav-all 에게 .active 클래스를 제거한다.
$('#nav-all .close').click(function () {
    $('#nav-all').removeClass('active');
});

$('#gnb').mouseenter(function () {
    $('#header').addClass('active');
});

$('#gnb').mouseleave(function () {
    $('#header').removeClass('active');
});

$('.lang__btn').click(function () {
    $('.lang__lst').show();
});

$('.lang__lst li').click(function () {
    $('.lang__lst').hide();
});

document.addEventListener('DOMContentLoaded', () => {
    const topButton = document.querySelector('.top');
    const sections = document.querySelectorAll('.video-container, .hero-section'); // 모든 섹션 선택

    const handleScroll = () => {
        const viewportHeight = window.innerHeight;
        const isMobile = window.innerWidth <= 768; // 모바일 기준
        const isTablet = window.innerWidth > 768 && window.innerWidth <= 1024; // 태블릿 기준

        let isAnySectionVisible = false;
        sections.forEach((section) => {
            const sectionBottom = section.getBoundingClientRect().bottom;
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < viewportHeight && sectionBottom > 0) {
                isAnySectionVisible = true;
            }
        });

        if (isAnySectionVisible || isMobile || isTablet) {
            // 섹션이 보이거나 모바일/태블릿에서는 버튼 숨김
            topButton.classList.remove('active');
        } else {
            topButton.classList.add('active');
        }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll); // 뷰포트 크기 변경 시 다시 확인
});

/**
 * 페이지 스크롤에 따른 요소 제어
 */
// 페이지 스크롤에 영향을 받는 요소들을 검색!
const headerEl = document.querySelector('#header');
const toTopEl = document.querySelector('#to-top');

// 이전 스크롤 위치 저장 변수
let lastScrollY = window.scrollY;

// 페이지에 스크롤 이벤트를 추가!
// 스크롤이 지나치게 자주 발생하는 것을 조절(throttle, 일부러 부하를 줌)
window.addEventListener(
    'scroll',
    _.throttle(function () {
        // 현재 스크롤 위치
        const currentScrollY = window.scrollY;

        // 스크롤 다운
        if (currentScrollY > lastScrollY) {
            // Badge 요소 숨기기!
            // gsap.to(요소, 시간, 옵션);
            gsap.to(headerEl, {
                opacity: 0,
                display: 'none',
                duration: 0.6,
            });
            // 상단으로 스크롤 버튼 보이기!
            gsap.to(toTopEl, {
                right: '30px',
                // x: 0,
                duration: 0.2,
            });

            // 스크롤 업
        } else {
            // Badge 요소 보이기!
            gsap.to(headerEl, {
                opacity: 1,
                display: 'block',
                duration: 0.6,
            });
            // 상단으로 스크롤 버튼 숨기기!
            gsap.to(toTopEl, {
                right: '-50px',
                // x: 100,
                duration: 0.2,
            });
        }

        // 이전 스크롤 위치 업데이트
        lastScrollY = currentScrollY;
    }, 300)
);
// 상단으로 스크롤 버튼을 클릭하면,
toTopEl.addEventListener('click', function () {
    // 페이지 위치를 최상단으로 부드럽게(1초 동안) 이동.
    gsap.to(window, {
        scrollTo: 0,
    });
});

/**
 * 순서대로 나타나는 기능
 */
// 나타날 요소들(.fade-in) 찾기.
const fadeEls = document.querySelectorAll('.visual .fade-in');
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
    // 각 요소들을 순서대로(delay) 보여지게 함!
    gsap.to(fadeEl, 1, {
        delay: (index + 1) * 0.7,
        opacity: 0.5,
    });
});
