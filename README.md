# **개편 프로젝트**

## **📗 목차**

<b>

- 📝 [개요](#-포트폴리오-개요)
- 🛠 [기술 및 도구](#-기술-및-도구)
- 🔗 [링크](#-링크)
- 👨🏻‍💻 [기능 구현](#-기능-구현)
  - [반응형 웹](#1-반응형-웹)
  - [Open graph](#2-Open-graph)
- 🚀 [소개](#-소개)
  - [video 섹션](#1-video-섹션)
  - [intro 섹션](#2-intro-섹션)
  - [travel-showcase 섹션](#3-travel-showcase-섹션)
  - [Hot-Trend 섹션](#4-Hot-Trend-섹션)
  - [travel-packages 섹션](#5-travel-packages-섹션)
  - [news 섹션](#6-news-섹션)
  - [event-banner 섹션](#7-event-banner-섹션)
    
- ⏰ [커밋 히스토리](#-커밋-히스토리)

</b>

## **📝 포트폴리오 개요**

<img alt="메인 페이지" src="https://github.com/user-attachments/assets/3da72f1a-2b07-4552-b156-16f28f545d9a" />

<br />
<br />

> **프로젝트:** 개편사이트
>
> **기획 및 제작:** 조성주
>
> **분류:** 개인 프로젝트
>
> **주요 기능:** 반응형 웹, open graph
>
> **사용 기술:** Html 5, Javascript, Gsap, Css 3, Scss, Swiper 등등
> 
> **문의:** 76seongju@gmail.com

<br />

## **🛠 기술 및 도구**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=white)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=flat&logo=sass&logoColor=white)](https://sass-lang.com/)

<br />

## **🔗 링크**

**링크:** [https://oloklkl.github.io/Hanatour/pages/](https://oloklkl.github.io/Hanatour/pages/)

<br />

## **👨🏻‍💻 기능 구현**

### **1. 반응형 웹**

![Image](https://github.com/user-attachments/assets/805f8f35-94a5-4c28-8acf-dec3cddb1283)

- 3개의 endpoint를 두고 반응형을 구현함
- 네비게이션 메뉴의 경우 pc(1024px)을 기준으로 그 이상일 경우 상단바, 이하일 경우 햄버거메뉴로 변경

```javascript
// _breakpoints.scss

// 599px 이하일 경우
@mixin mobile {
  @media (max-width: ($breakpoint-sm - 1px)) {
    @content;
  }
}
// 600px 이상일 경우
@mixin mobileMore {
  @media (min-width: $breakpoint-sm) {
    @content;
  }
}

// 600px 이상 1024px 이하일 경우
@mixin tablet {
  @media (min-width: $breakpoint-sm) and (max-width: ($breakpoint-md - 1px)) {
    @content;
  }
}

@mixin tabletLess {
  @media (max-width: ($breakpoint-md - 1px)) {
    @content;
  }
}

@mixin tabletMore {
  @media (min-width: $breakpoint-md) {
    @content;
  }
}

@mixin desktop {
  @media (min-width: $breakpoint-lg) {
    @content;
  }
}


```



### **2. Open graph**

<img alt="카카오톡" src="https://github.com/user-attachments/assets/3017a1a1-7ccb-4537-a4b8-c2eaf06a0b11" />

- meta tags를 통해 Facebook, twitter, linkedin, discord, kakao talk 등 링크를 전달 했을 때 링크에 대한 정보를 볼 수 있도록 구현
  
```html
<!-- index.html -->

<meta property="og:type" content="website" />
<meta property="og:title" content="조성주 • 하나투어" />
<meta property="og:description" content="개편 프로젝트" />
<meta property="og:image" content="https://oloklkl.github.io/Hanatour/resources/images/pattern/banners/hanatour.png" />
<meta property="og:url" content="https://oloklkl.github.io/Hanatour/pages/" />
```



## **🚀 소개**

### **1. video 섹션**
![Image](https://github.com/user-attachments/assets/a8c6aca3-3a13-4368-bf02-ad5afebc2cc8)

<br />
<br />
<br />

### **2. intro 섹션**
![Image](https://github.com/user-attachments/assets/2039428e-b6ba-4d89-94b3-6fc197c2643f)

<br />
<br />
<br />
<br />

### **3. travel-showcase 섹션**
![Image](https://github.com/user-attachments/assets/d6943b9c-872d-4730-a718-5620edfa5545)

<br />
<br />
<br />
<br />

### **4. Hot-Trend 섹션**
![Image](https://github.com/user-attachments/assets/726bf235-3db0-4895-9a66-785e1cf34206)

<br />
<br />
<br />
<br />

### **5. travel-packages 섹션**
![Image](https://github.com/user-attachments/assets/cf3f52c9-54a6-4e90-812b-1b73232df209)

<br />
<br />
<br />
<br />

### **6. news 섹션**
![Image](https://github.com/user-attachments/assets/e419944c-1d09-43de-ae04-a7063df5848d)

<br />
<br />
<br />
<br />

### **7. event-banner 섹션**
![Image](https://github.com/user-attachments/assets/4a3adcd3-24b6-4d99-8d5a-a3aab85feb96)

<br />
<br />
<br />
<br />

## ⏰ 커밋 히스토리

[내 커밋 히스토리 보러가기](https://github.com/oloklkl/Hanatour/commits/main/)
<br/>
<br/>
<br/>



