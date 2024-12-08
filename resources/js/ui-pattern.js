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

    window.addEventListener('scroll', () => {
        const viewportHeight = window.innerHeight;

        // 모든 섹션에 대해 확인
        let isAnySectionVisible = false;
        sections.forEach((section) => {
            const sectionBottom = section.getBoundingClientRect().bottom;
            const sectionTop = section.getBoundingClientRect().top;

            // 현재 섹션이 화면 안에 있는지 확인
            if (sectionTop < viewportHeight && sectionBottom > 0) {
                isAnySectionVisible = true; // 섹션이 화면에 보이면 true
            }
        });

        // 섹션이 하나라도 보이면 버튼 숨김
        if (isAnySectionVisible) {
            topButton.classList.remove('active');
        } else {
            topButton.classList.add('active');
        }
    });
});
