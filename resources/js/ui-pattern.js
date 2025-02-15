// .all-menu 를 클릭했을 때
// #nav-all 에게 .active 클래스를 추가한다.
$('.all-menu').click(function () {
    $('#nav-all').addClass('active');
});

// gnb-item 또는 gnb__depth2-close 클릭 시 메뉴 열고 닫기
$('.gnb-item, .gnb__depth2-close').click(function (e) {
    e.stopPropagation(); // a 태그 클릭 방지

    let $depth2 = $(this).closest('li').find('.gnb__depth2');

    if (!$depth2.hasClass('active')) {
        $('.gnb__depth2').removeClass('active'); // 모든 메뉴 닫기
        $depth2.addClass('active'); // 클릭한 메뉴만 열기
    } else {
        $depth2.removeClass('active'); // 클릭 시 토글
    }

    return false; // a 태그 기본 동작 방지
});

// 버튼 클릭 시 회전
$('.gnb__depth2-close').click(function () {
    $(this).toggleClass('active');
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
// 페이지에 스크롤 이벤트 추가
window.addEventListener(
    'scroll',
    _.throttle(function () {
        const currentScrollY = window.scrollY;

        // 스크롤이 100px 이상이면 헤더 숨기기
        if (currentScrollY > 100) {
            gsap.to(headerEl, {
                opacity: 0,
                display: 'none',
                duration: 0.6,
            });
        } else {
            // 최상단에 있을 때 헤더 보여주기
            gsap.to(headerEl, {
                opacity: 1,
                display: 'block',
                duration: 0.6,
            });
        }

        // 상단으로 이동 버튼 제어
        if (currentScrollY > 300) {
            // 스크롤이 일정 위치를 지나면 버튼 보이기
            gsap.to(toTopEl, {
                right: '30px',
                duration: 0.2,
            });
        } else {
            // 스크롤이 위로 올라가면 버튼 숨기기
            gsap.to(toTopEl, {
                right: '-50px',
                duration: 0.2,
            });
        }

        // 스크롤 위치 업데이트
        lastScrollY = currentScrollY;
    }, 300) // 스크롤 이벤트를 300ms 간격으로 실행
);

// 상단으로 스크롤 버튼 클릭 이벤트
toTopEl.addEventListener('click', function () {
    gsap.to(window, {
        scrollTo: 0, // 페이지를 최상단으로 부드럽게 이동
        duration: 1, // 1초 동안 이동
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
