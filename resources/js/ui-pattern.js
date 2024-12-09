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
