import { ExperienceItem } from '@/types/type';

export const experienceDatas: ExperienceItem[] = [
    {
        id: 1,
        name: `${import.meta.env.VITE_PC}`,
        url: `https://${import.meta.env.VITE_PC}`,
        component: `/project/${import.meta.env.VITE_PC}`,
        desc: 'AI 사진 변환 기능을 가진 광고 수익 모델 사이트 및 관리자 페이지 프론트 개발',
        team: ['자사 프론트엔드 개발자 1명, 백엔드 개발자 1명'],
        period: '2023.11 ~ 2023.12',
        stack: 'vue3, typescript, pinia, scss',
        function: [
            '변환 완료 사진과 변환 전 사진 비교 기능 구현',
            '리뷰',
            '관리자페이지 프론트 개발(광고 등록, 그래프 출력, 엑셀 파일 다운로드, 광고비 정산)',
        ],
    },
    {
        id: 2,
        name: import.meta.env.VITE_TOON,
        url: `https://beta.${import.meta.env.VITE_TOON}.com`,
        component: `/project/${import.meta.env.VITE_TOON}`,
        desc: `웹툰, 만화 번역 사이트 ${import.meta.env.VITE_TOON}의 회원 관련 기능 구현`,
        team: ['자사 프론트엔드 개발자 2명, 백엔드 개발자 1명'],
        period: '2023.03 ~ 2022.11',
        stack: 'Nuxt3, typescript, pinia, nuxtauth, scss',
        function: [
            '회원 가입, 로그인, 마이페이지 등 회원 정보 관련 기능 프론트 개발',
            '클라이언트와 번역가 매칭 기능',
            '공지사항 등 기타 게시판 프론트 개발',
        ],
    },
    {
        id: 3,
        name: '자사 기술 소개페이지',
        url: `https://tech.${import.meta.env.VITE_IDEA}.com`,
        component: '/project/tech',
        desc: '자사 기술 소개 페이지 프론트 개발',
        team: ['1인 개발'],
        period: '2023.05',
        stack: 'vue3, pinia, scss',
        function: ['반응형 웹 개발', 'swiper로 페이지 스와이프 개발'],
    },
    {
        id: 4,
        name: '자사 홈페이지 개발',
        url: `https://${import.meta.env.VITE_IDEA}.com`,
        component: '/project/acon',
        desc: '자사 홈페이지, 관리자 페이지 프론트 개발',
        team: ['자사 프론트엔드 개발자 2명, 백엔드 개발자 1명'],
        period: '2022.11 ~ 2023.01',
        stack: 'vue3, pinia, scss, swiper, i18n',
        function: [
            '기존 vanilla javascript로 구현되어있던 자사홈페이지를 vue3로 마이그레이션',
            '관리자페이지 전체 프론트 개발',
        ],
    },
];

export const sideProjectDatas: ExperienceItem[] = [
    {
        id: 5,
        name: `여행 블로그`,
        url: ``,
        component: `/experience/travelnote`,
        desc: '여행의 순간을 기록하고, 소통할 수 있는 사이트',
        team: ['1인 개발'],
        period: '2022.08.28 ~ 2022.09.24',
        stack: 'javascript, nodejs, express, mongodb(mongoose), heroku',
        function: [
            'UX/UI 디자인 제작 및 반응형 레이아웃 구현',
            '로그인, 로그아웃, 마이페이지 수정, 회원 탈퇴 등 회원 관련 기능',
            '기본적인 CRUD 기능',
            '하트 누르기 기능',
            '댓글 기능',
        ],
    },
];
