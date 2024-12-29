// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeAnimations();
    initializeScrollEffects();
});

// Initialize all animations
function initializeAnimations() {
    initializeAirplaneAnimation();
    initializeSplittingJS();
    initializeScrollaJS();
}

// Airplane animation based on screen size
function initializeAirplaneAnimation() {
    const screenWidth = window.innerWidth;
    const tl = gsap.timeline({ ease: 'power1.inOut' });

    const animationConfig = {
        mobile: {
            duration: 2,
            path: [
                { x: 0, y: 0 },
                { x: 200, y: 100 },
                { x: 300, y: 0 },
            ],
            scale: 0.8,
        },
        tablet: {
            duration: 4,
            path: [
                { x: 0, y: 0 },
                { x: 400, y: 100 },
                { x: 200, y: 0 },
                { x: 200, y: 100 },
                { x: 600, y: 0 },
            ],
            scale: 1,
        },
        desktop: {
            duration: 5,
            path: [
                { x: 0, y: 0 },
                { x: 800, y: 200 },
                { x: 600, y: 0 },
                { x: 600, y: 200 },
                { x: 1000, y: 0 },
            ],
            scale: 1.2,
        },
    };

    let config;
    if (screenWidth <= 844) {
        config = animationConfig.mobile;
    } else if (screenWidth <= 1024) {
        config = animationConfig.tablet;
    } else {
        config = animationConfig.desktop;
    }

    tl.to('.airplane', {
        duration: config.duration,
        motionPath: {
            path: config.path,
            autoRotate: true,
        },
        scale: config.scale,
    });
}

// Initialize Scrolla.js
function initializeScrollaJS() {
    $('.animate').scrolla({
        mobile: true,
        once: false,
    });
}

// Initialize Splitting.js
function initializeSplittingJS() {
    Splitting();
}

// Initialize scroll effects
function initializeScrollEffects() {
    gsap.registerPlugin(ScrollTrigger);
    initializeBoardListAnimations();
    initializeUpBoxAnimation();
}

// Board list animations for different screen sizes
function initializeBoardListAnimations() {
    ScrollTrigger.matchMedia({
        // Desktop animation
        '(min-width: 1024px)': () => {
            const desktopTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.board_list .board',
                    start: 'top 90%',
                    end: '20% 100%',
                    scrub: 2,
                    markers: false,
                },
            });

            for (let i = 1; i <= 4; i++) {
                desktopTimeline.to(`.board_list li:nth-child(${i})`, { y: '-200px', duration: 1, ease: 'none' }, 0.2 * i);
            }
        },

        // Tablet animation
        '(min-width: 768px) and (max-width: 1023px)': () => {
            const tabletTimeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '.board_list li:nth-child(1)',
                    start: 'top 85%',
                    end: '20% 100%',
                    scrub: 2,
                    markers: false,
                },
            });

            for (let i = 1; i <= 4; i++) {
                tabletTimeline.to(`.board_list li:nth-child(${i})`, { y: '-150px', duration: 1, ease: 'none' }, i <= 2 ? 0.6 : 0.8);
            }
        },

        // Mobile animation
        '(max-width: 767px)': () => {
            gsap.utils.toArray('.board_list li').forEach((item, index) => {
                gsap.to(item, {
                    scrollTrigger: {
                        trigger: item,
                        start: 'top 95%',
                        end: '20% 100%',
                        scrub: 1,
                        markers: false,
                    },
                    y: '-70px',
                    duration: 0.8,
                    ease: 'none',
                    delay: index * 0.2,
                });
            });
        },
    });
}

// UpBox animation
function initializeUpBoxAnimation() {
    const upBox = document.querySelectorAll('.upBox');

    const upBoxTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: '.intro',
            pin: true,
            scrub: 3,
            start: 'top top',
            end: '+=400%',
            markers: true,
        },
    });

    upBoxTimeline.from(upBox, { y: '400%', duration: '8', ease: 'none', stagger: '6' }).to(upBox, { y: '0' });
}
