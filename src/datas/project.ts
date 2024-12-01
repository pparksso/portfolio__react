import { ProjectItem } from '@/types/type';

export const projectItems: ProjectItem[] = [
    {
        id: 1,
        name: 'IDEAPC',
        url: 'https://ideapc.kr/',
        desc: 'AI로 흐릿한 이미지를 높은 해상도로 재가공해주는 기능의 사용자 페이지와 관리자 페이지의 프론트 개발 전체를 담당하였습니다.',
        stack: ['Vue3', 'typescript', 'Pinia', 'axios', 'SCSS'],
        tool: ['Zeplin', 'Slack', 'Swagger', 'GitLab', 'Sourcetree'],
        func: [
            {
                title: 'pc, 모바일 버전의 레이아웃 구현',
                desc: 'pc용과 모바일용 UI를 별도로 구현하였습니다.',
                img: '/imgs/ideapc_pc.gif',
            },
            {
                title: '사진 파일 첨부 기능 개발',
                desc: '드래그 앤 드롭을 통해 파일을 업로드할 때, 파일의 유효성을 검증하고, 유효한 파일일 경우 상태를 업데이트하여 추가 작업을 수행했습니다. 이로써 파일 업로드 기능이 원활하게 동작하도록 구현하였습니다.',
                img: '/imgs/ideapc_drag.gif',
            },
            {
                title: '영상 광고 모달 기능 개발',
                desc: 'vue의 Teleport를 사용하여 모달 형태의 동영상 광고를 구현한 부분입니다. 모달이 열릴 때 해당 광고의 정보를 api로 받아와 음소거 상태로 재생되도록 작업하였습니다.',
                img: '/imgs/ideapc_ad-min.gif',
            },
            {
                title: '이미지 슬라이더 기능 개발',
                desc: '슬라이더 바에서의 사용자 이벤트를 바탕으로 슬라이더의 움직임을 통해 원본 사진과 변환 사진을 비교할 수 있는 작업을 수행했습니다. 마우스 이벤트에 대응하여 드래그 상태를 감지하고, 슬라이더바의 위치 및 이미지의 가로폭을 계산하여 화면에 반영하였습니다. ',
                img: '/imgs/ideapc_trans.gif',
            },
            {
                title: '변환 파일 다운로드 기능 개발',
                desc: '',
                img: '',
            },
            {
                title: '데이터의 차트화',
                desc: 'Vue.js와 라이브러리인 chart.js 및 vue-chart-3를 활용하여 데이터를 차트로 시각화하는 작업을 완료했습니다. 차트는 재사용 가능한 공통 컴포넌트로 개발하여 어느 페이지에서든 손쉽게 사용할 수 있도록 구성했습니다. 데이터는 props로 전달되며, 데이터 변경 시 컴포넌트가 자동으로 재랜더링되도록 computed 속성을 활용하여 props 데이터를 가공하였습니다.',
                img: '/imgs/ideapc_chart.gif',
            },
        ],
    },
    {
        id: 2,
        name: `${import.meta.env.VITE_TOON}`,
        url: `https://beta.${import.meta.env.VITE_TOON_S}.com`,
        desc: '웹툰 번역 사이트의 퍼블리싱, 매칭, 회원 관련, 알람 등 번역 툴 기능을 제외한 모든 기능의 프론트 개발을 담당하였습니다.',
        stack: ['Vue3', 'typescript', 'Pinia', 'axios', 'SCSS'],
        tool: ['Zeplin', 'Slack', 'Swagger', 'GitLab', 'Sourcetree'],
        func: [
            {
                title: '회원 관련 기능',
                desc: '일반 로그인, sns 로그인, 로그아웃, 아이디찾기, 비밀번호찾기, 회원가입, 이메일을 통한 인증번호 인증 기능, 내 정보 수정 등 회원 관련 다양한 기능을 구현하였습니다. 일반 로그인과 sns 로그인 기능은 nuxt-auth 라이브러리를 활용하여 작업을 수행하였습니다.',
                img: '',
            },
            {
                title: '모달 공통 컴포넌트 개발',
                desc: "다수의 모달을 효율적으로 관리하기 위해 공통 컴포넌트로 개발하였습니다. Nuxt.js의 'v-show' 기능을 활용하여 공통 모달 컴포넌트를 보이게 하고, Pinia의 store를 활용하여 모든 모달이 공유하는 값을 수정하는 방식으로 모달을 변경하였습니다. 각 모달이 가지는 개별 로직이 필요한 경우 별도의 자식 컴포넌트를 개발하여, Nuxt의 'is' 기능을 활용해 화면에 동적으로 랜더링하였습니다. 이를 통해 모달 관리와 유지보수가 효율적으로 이루어질 수 있었습니다.",
                img: '/imgs/toon_modals.png',
            },
            {
                title: '실시간 알람 기능',
                desc: '로그인한 사용자의 알림 상태를 주기적으로 갱신하여 UI를 동적으로 변경하는 작업을 수행했습니다. JavaScript의 setInterval과 clearInterval 함수를 활용하여 주기적으로 알림 상태를 업데이트하고, 타이머를 효과적으로 관리했습니다. Vue.js의 watch를 이용하여 사용자 데이터의 변화를 감지하고, 해당 변화에 따라 타이머를 적절히 설정 및 해제하여 UI를 동적으로 조작했습니다.',
                img: '',
            },
            {
                title: '검색, 필터 개발',
                desc: '',
                img: '/imgs/toon_filter.gif',
            },
            {
                title: '매칭 기능 개발',
                desc: '',
                img: '',
            },
        ],
    },
    {
        id: 3,
        name: '자사 기술 소개 사이트',
        url: `https://tech.${import.meta.env.VITE_IDEA}.com`,
        desc: '자사 기술 소개 사이트의 프론트 개발 전체를 담당하였습니다.',
        stack: ['Vue3', 'Vite', 'Pinia', 'SCSS'],
        tool: ['Zeplin', 'GitLab', 'Sourcetree'],
        func: [
            {
                title: 'pc, 모바일 버전의 레이아웃 구현',
                desc: 'pc용과 모바일용 UI를 별도로 구현하였습니다.',
                img: '',
            },
            {
                title: '페이지 슬라이드 개발',
                desc: 'Vanilla Javascript 를 활용해 페이지 슬라이딩 효과를 개발하였습니다. 다양한 섹션을 개별 컴포넌트로 나누어 일렬로 배치하고, 좌우로 이동할 수 있는 구조를 만들었습니다. ',
                img: '/imgs/tech_swiper-min.gif',
            },
        ],
    },
    {
        id: 4,
        name: '자사 홈페이지',
        url: `https://${import.meta.env.VITE_IDEA}.com`,
        desc: 'Vue3로 기존에 Vanilla Javascript로 개발되어 있던 회사 대표 홈페이지를 마이그레이션하고, 동시에 새로운 관리자 페이지를 구축했습니다.',
        stack: ['Vue3', 'Vite', 'Pinia', 'axios', 'SCSS'],
        tool: ['Slack', 'GitLab', 'Sourcetree', 'Notion'],
        func: [
            {
                title: 'Vue3로 마이그레이션',
                desc: '기존 Vanilla javascript로 작성된 코드를 Vue3로 마이그레이션하여 프로젝트를 개선했습니다. 공통된 UI는 공통 컴포넌트화 하여 코드를 효율적으로 구성하였으며, css파일로 되어있던 스타일 코드를 scss로 다시 작성하였습니다.',
                img: '',
            },
            {
                title: '스크롤 애니메이션 구현',
                desc: "css와 Vue의 'ref'를 활용하여, 사용자가 스크롤하는 동안 애니메이션효과를 적용하도록 구현했습니다. DOM의 높이와 사용자가 현재 보고 있는 높이 값을 동적으로 계산하여 UI를 자연스럽게 변경하였습니다.",
                img: '/imgs/acon_scroll.gif',
            },
            {
                title: '다국어 기능 개발',
                desc: 'i18n을 활용하여 다국어 기능을 개발하였습니다. 다국어로 표시되는 모든 값을 변수로 처리하고, 사용자가 언어 설정을 변경할 경우 로컬스토리지에 언어 값을 저장하여 해당 값에 따라 변수를 동적으로 불러오도록 구현했습니다.',
                img: '/imgs/acon_lang.gif',
            },
            {
                title: '관리자 페이지 프론트 개발',
                desc: '메인 페이지의 모든 정보를 등록, 수정, 삭제할 수 있는 기능을 구현하였습니다. Axios를 인스턴스화 하여 간편하게 API를 호출할 수 있게 하였고, interceptors 기능을 활용하여 로그인 시 받은 토큰의 유효기간을 체크하여 라우터를 동적으로 변경하였습니다.',
                img: '',
            },
        ],
    },
    {
        id: 5,
        name: '개인 포트폴리오 사이트',
        url: 'https://github.com/pparksso/pparksso.github.io',
        desc: '현재 개인 포트폴리오 사이트입니다.',
        stack: ['React', 'vite', 'typescript', 'tailwindcss'],
        tool: ['GitHub', 'Sourcetree'],
        func: [
            {
                title: '반응형 웹 개발',
                desc: 'tailwindcss를 활용하여 반응형 웹을 개발했습니다.',
                img: '',
            },
            {
                title: '공통 컴포넌트 개발',
                desc: '코드를 재사용하고 일관된 UI를 제공하기 위해 공통 구조를 가진 부분들을 컴포넌트로 분리하여 개발했습니다. 데이터에 따라 동적으로 변하는 내용을 효율적으로 출력할 수 있게 작업하였습니다.',
                img: '',
            },
            {
                title: '모달 컴포넌트 개발',
                desc: "다양한 페이지에서 활용 가능한 모달 컴포넌트를 개발했습니다. React의 'forwardRef'를 활용하여 모달을 감싸고, 'useImperativeHandle'을 이용하여 부모 컴포넌트에서 모달을 제어할 수 있는 함수를 외부로 내보내었습니다. 이를 통해 모달의 일관된 사용성을 제공하고, 재사용이 용이한 컴포넌트를 구현하였습니다.",
                img: '/imgs/portfolio_modal.gif',
            },
        ],
    },
    {
        id: 6,
        name: 'Travel Note',
        url: `https://www.youtube.com/watch?v=yGO6OGt2Zyo`,
        desc: '여행의 순간을 기록하기 위한 웹페이지입니다. 현재 운영되고 있지 않습니다.',
        stack: ['JavaScript', 'Nodejs', 'express', 'passport', 'nunjucks', 'mongoose'],
        tool: ['GitHub'],
        func: [
            {
                title: '로그인, 회원가입 및 회원 정보 관련 기능 개발',
                desc: "회원가입 기능을 개발하면서 아이디와 닉네임은 사용자가 입력하는 즉시 API를 호출하여 데이터베이스를 조회하고, 동일한 아이디 또는 닉네임을 가진 사용자가 있는지 확인한 후 결과를 화면에 동적으로 출력하였습니다. 비밀번호는 'bcrypt'를 이용하여 안전하게 암호화하여 데이터베이스에 저장하였습니다.",
                img: '',
            },
            {
                title: '하트 누르기, 댓글 기능 개발',
                desc: "로그인한 사용자만이 하트 기능과 댓글 기능을 활용할 수 있도록 구현하였습니다. 사용자가 하트를 누르면 서버로 해당 회원의 사용자 번호와 글 번호를 전송하고, 서버에서는 이 정보를 데이터베이스에 저장하며 이후 하트 관련 데이터베이스 프로세스를 처리합니다. 전체 과정은 JavaScript의 'try-catch문'을 활용하여 순차적으로 수행하며, 중간에 에러가 발생하면 즉시 에러 처리를 수행하도록 구현하였습니다.",
                img: '',
            },
            {
                title: '페이지네이션 개발',
                desc: '',
                img: '',
            },
        ],
    },
    {
        id: 7,
        name: '전자 연구노트',
        url: '',
        desc: '블록 기반 웹 에디터가 주요 기능인 전자 연구노트의 CRUD 페이지와 에디터의 기능 구현 및 버그 수정을 담당하였습니다.',
        stack: ['Vue3', 'typescript', 'Pinia', 'axios', 'SCSS', 'chart.js'],
        tool: ['Zeplin', 'Swagger', 'GitHub', 'Redmine', 'Microsoft Teams'],
        func: [
            {
                title: 'CRUD, 페이지네이션, 검색 기능',
                desc: 'CRUD 페이지의 공통된 모든 UI 컴포넌트(테이블, 검색)와 페이지네이션을 공통 컴포넌트로 구현하고, 이를 store에서 전역으로 상태관리 하였습니다.',
                img: '',
            },
            {
                title: '블록 기반 에디터 내 붙여넣기 기능',
                desc: '에디터 내에서 클립보드에 복사된 데이터를 그대로 블록 기반 에디터에 적용할 수 있도록 붙여넣기 기능을 구현했습니다. \n재귀 함수를 사용해 노드를 반복적으로 탐색하고, 텍스트, 이미지 등 데이터를 에디터의 블록 구조에 맞게 재조립하여 출력되도록 처리했습니다.',
                img: '',
            },
            {
                title: 'okta 로그인 구현',
                desc: 'OIDC 방식으로 Okta 로그인 기능을 구현했습니다. \nOkta 사용자 인증 후, 받은 액세스 토큰을 활용하여 자체 로그인 시스템을 구축했습니다.',
                img: '',
            },
            {
                title: '에디터 내 차트 기능',
                desc: '테이블 데이터를 기반으로 Chart.js를 활용하여 5가지 차트를 구현했습니다. \n모달을 통해 데이터 구조를 변경할 수 있도록 하였으며, 변경된 데이터 구조에 맞춰 차트의 데이터도 동적으로 업데이트되도록 했습니다.',
                img: '',
            },
            // {
            //     title: '변환 파일 다운로드 기능 개발',
            //     desc: '',
            //     img: '',
            // },
            // {
            //     title: '데이터의 차트화',
            //     desc: 'Vue.js와 라이브러리인 chart.js 및 vue-chart-3를 활용하여 데이터를 차트로 시각화하는 작업을 완료했습니다. 차트는 재사용 가능한 공통 컴포넌트로 개발하여 어느 페이지에서든 손쉽게 사용할 수 있도록 구성했습니다. 데이터는 props로 전달되며, 데이터 변경 시 컴포넌트가 자동으로 재랜더링되도록 computed 속성을 활용하여 props 데이터를 가공하였습니다.',
            //     img: '/imgs/ideapc_chart.gif',
            // },
        ],
    },
];
