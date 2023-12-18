export type ExperienceItem = {
    id: number;
    name: string;
    url: string;
    component: string;
    desc: string;
    team: string[];
    period: string;
    stack: string;
    function: string[];
};

type ProjectDetail = {
    title: string;
    desc: string;
    img: string;
};

// 프로젝트 상세페이지 타입
export type ProjectItem = {
    id: number;
    name: string;
    url: string;
    desc: string;
    stack: string[];
    tool: string[];
    func: ProjectDetail[];
};
