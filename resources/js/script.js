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

//search-decoration__circle
window.addEventListener('DOMContentLoaded', () => {
    // ScrollTrigger 플러그인 등록
    gsap.registerPlugin(ScrollTrigger);

    // 타임라인 생성
    const tl = gsap.timeline({ ease: 'power1.inOut' });

    tl.to('.search-decoration__circle', {
        duration: 10, // 애니메이션 지속 시간 증가
        motionPath: {
            path: [
                { x: 0, y: 0 }, // 시작 위치
                { x: 200, y: 300 }, // 첫 번째 니은자
                { x: 400, y: 0 }, // 첫 번째 니은자 끝
                { x: 600, y: 400 }, // 두 번째 니은자
                { x: 800, y: 100 }, // 두 번째 니은자 끝
                { x: 1000, y: 500 }, // 세 번째 니은자
                { x: 1200, y: 200 }, // 세 번째 니은자 끝
            ],
            autoRotate: true, // 경로에 맞게 회전 (굴러가는 효과)
        },
        rotation: 1440, // 네 바퀴 회전 (각 니은자마다 한 바퀴 이상)
    });

    // ScrollTrigger 애니메이션 적용
    ScrollTrigger.create({
        trigger: '.search-decoration__circle', // 애니메이션이 시작될 요소
        start: 'top 80%', // 화면의 80% 위치에서 시작
        end: 'bottom 20%', // 화면의 20% 위치에서 끝
        animation: tl, // 생성된 타임라인 애니메이션 연결
        scrub: 2, // 스크롤에 맞게 애니메이션 조정
        markers: true, // 디버그용 마커 표시 (원하는 경우 제거 가능)
    });
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
