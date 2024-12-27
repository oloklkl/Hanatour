// airplane
window.addEventListener('DOMContentLoaded', () => {
    // 화면 크기 확인
    const screenWidth = window.innerWidth;

    // 타임라인 생성
    const tl = gsap.timeline({ ease: 'power1.inOut' });

    // 화면 크기에 따라 다른 애니메이션 적용
    if (screenWidth <= 768) {
        // 모바일: 작은 경로로 이동
        tl.to('.airplane', {
            duration: 2, // 애니메이션 지속 시간
            motionPath: {
                path: [
                    { x: 0, y: 0 }, // 시작
                    { x: 200, y: 100 }, // 작은 경로
                    { x: 300, y: 0 }, // 끝
                ],
                autoRotate: true, // 경로에 맞게 회전
            },
            scale: 0.8, // 크기 축소
        });
    } else if (screenWidth <= 1024) {
        // 태블릿: 중간 크기의 경로로 이동
        tl.to('.airplane', {
            duration: 4, // 애니메이션 지속 시간
            motionPath: {
                path: [
                    { x: 0, y: 0 }, // 시작
                    { x: 500, y: -400 }, // 경로 1
                    { x: 800, y: -600 }, // 경로 2
                    { x: 1200, y: 200 }, // 경로 3
                    { x: 1400, y: 0 }, // 끝
                ],
                autoRotate: true, // 경로에 맞게 회전
            },
            scale: 1, // 크기 정상
        });
    } else {
        // PC: 큰 경로로 이동
        tl.to('.airplane', {
            duration: 5, // 애니메이션 지속 시간
            motionPath: {
                path: [
                    { x: 0, y: 0 }, // 시작
                    { x: 800, y: 200 }, // 경로 1
                    { x: 600, y: 0 }, // 경로 2
                    { x: 600, y: 200 }, // 경로 3
                    { x: 1000, y: 0 }, // 끝
                ],
                autoRotate: true, // 경로에 맞게 회전
            },
            scale: 1.2, // 크기 확대
        });
    }
});

// 텍스트!!!!!!!!!
//scrolla.js
$(function () {
    $('.animate').scrolla({
        mobile: true, //모바일버전시 활성화
        once: false, //스크롤시 딱 한번만 하고싶을땐 true
    });
});

//splitting.js
$(function () {
    Splitting(); //대문자로쓴다!!!
});

document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // 공통 애니메이션 함수
    function createScrollAnimation(triggerSelector, targetSelector, start, end, scrub, offsetY, duration) {
        gsap.timeline({
            scrollTrigger: {
                trigger: triggerSelector,
                start: start,
                end: end,
                scrub: scrub,
                markers: true,
            },
        }).to(targetSelector, { y: offsetY, duration: duration, ease: 'none' });
    }

    // board_list 애니메이션 (PC와 태블릿/모바일 분리)
    ScrollTrigger.matchMedia({
        // PC 버전 (1024px 이상)
        '(min-width: 1024px)': function () {
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(1)', 'top 90%', '20% 100%', 2, '-200px', 1);
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(2)', 'top 90%', '20% 100%', 2, '-200px', 1);
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(3)', 'top 90%', '20% 100%', 2, '-200px', 1);
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(4)', 'top 90%', '20% 100%', 2, '-200px', 1);
        },
        // 태블릿 및 모바일 버전 (1023px 이하)
        '(max-width: 1023px)': function () {
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(1)', 'top 80%', '20% 100%', 1, '-150px', 0.8);
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(2)', 'top 80%', '20% 100%', 1, '-150px', 0.8);
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(3)', 'top 80%', '20% 100%', 1, '-150px', 0.8);
            createScrollAnimation('.board_list .board', '.board_list li:nth-child(4)', 'top 80%', '20% 100%', 1, '-150px', 0.8);
        },
    });

    // search-decoration-bangkok 애니메이션
    createScrollAnimation('.search-decoration-bangkok', '.search-decoration-bangkok', 'top 50%', '20% 100%', 2, '-200px', 1);

    // search-decoration-hawaii 애니메이션
    createScrollAnimation('.search-decoration-hawaii', '.search-decoration-hawaii', 'top 80%', '20% 100%', 2, '-200px', 1);
});
