// airplane
window.addEventListener('DOMContentLoaded', () => {
    // 화면 크기 확인
    const screenWidth = window.innerWidth;

    // 타임라인 생성
    const tl = gsap.timeline({ ease: 'power1.inOut' });

    // 화면 크기에 따라 다른 애니메이션 적용
    if (screenWidth <= 844) {
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
                    { x: 400, y: 100 }, // 경로 1
                    { x: 200, y: 0 }, // 경로 2
                    { x: 200, y: 100 }, // 경로 3
                    { x: 600, y: 0 }, // 끝
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

// gsap ScrollTrigger 적용
document.addEventListener('DOMContentLoaded', () => {
    gsap.registerPlugin(ScrollTrigger);

    // board_list 애니메이션 (PC, 태블릿, 모바일 분리)
    ScrollTrigger.matchMedia({
        // PC 버전 (1024px 이상)
        '(min-width: 1024px)': function () {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.board_list .board',
                    start: 'top 90%',
                    end: '20% 100%',
                    scrub: 2,
                    markers: false,
                },
            })
                .to('.board_list li:nth-child(1)', { y: '-200px', duration: 1, ease: 'none' }, 0.2)
                .to('.board_list li:nth-child(2)', { y: '-200px', duration: 1, ease: 'none' }, 0.4)
                .to('.board_list li:nth-child(3)', { y: '-200px', duration: 1, ease: 'none' }, 0.6)
                .to('.board_list li:nth-child(4)', { y: '-200px', duration: 1, ease: 'none' }, 0.8);
        },
        // 태블릿 버전 (768px ~ 1023px)
        '(min-width: 768px) and (max-width: 1023px)': function () {
            gsap.timeline({
                scrollTrigger: {
                    trigger: '.board_list li:nth-child(1)',
                    start: 'top 85%',
                    end: '20% 100%',
                    scrub: 2,
                    markers: false,
                },
            })
                .to('.board_list li:nth-child(1)', { y: '-150px', duration: 1, ease: 'none' }, 0.6)
                .to('.board_list li:nth-child(2)', { y: '-150px', duration: 1, ease: 'none' }, 0.6)
                .to('.board_list li:nth-child(3)', { y: '-150px', duration: 1, ease: 'none' }, 0.8)
                .to('.board_list li:nth-child(4)', { y: '-150px', duration: 1, ease: 'none' }, 0.8);
        },
        // 모바일 버전 (767px 이하)
        '(max-width: 767px)': function () {
            gsap.utils.toArray('.board_list li').forEach((item, index) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item, // 각 li 요소를 독립적인 트리거로 설정
                        start: 'top 95%',
                        end: '20% 100%',
                        scrub: 1,
                        markers: false,
                    },
                    y: '-70px',
                    duration: 0.8,
                    ease: 'none',
                    delay: index * 0.2, // 순차적 딜레이
                });
            });
        },
    });
});
