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

document.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const videoContainer = document.querySelector('.video-container');
    const anotherSection = document.querySelector('.another-section');

    const videoContainerBottom = videoContainer.offsetTop + videoContainer.offsetHeight;
    const anotherSectionBottom = anotherSection.offsetTop + anotherSection.offsetHeight;

    if (window.scrollY < videoContainerBottom) {
        // 비디오 섹션 내에서는 배경 투명, 글자 흰색
        header.style.backgroundColor = 'transparent';
        header.style.color = 'white';
    } else if (window.scrollY >= videoContainerBottom && window.scrollY < anotherSectionBottom) {
        // anotherSection 내에서는 배경 투명, 글자 흰색
        header.style.backgroundColor = 'transparent';
        header.style.color = 'white';
    } else {
        // 두 섹션 이후에는 배경 흰색, 글자 검정
        header.style.backgroundColor = 'white';
        header.style.color = 'black';
    }
});
