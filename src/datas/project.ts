import { ProjectItem } from '@/types/type';

export const projectItems: ProjectItem[] = [
    {
        id: 1,
        name: '자체 제작 사이트',
        url: 'https://beta.toontra.com/',
        desc: '웹툰 번역을 도와주는 플랫폼에서 프론트 개발을 담당하였습니다.',
        stack: ['nuxt3', 'typescript', 'pinia', 'scss'],
        tool: ['Zeplin', 'Slack', 'Swagger', 'gitLab', 'sourcetree'],
        func: [
            {
                title: '로그인, 로그아웃 구현',
                desc: '로그인을 구현하였습니다',
                img: '/imgs/test.png',
            },
        ],
    },
];
