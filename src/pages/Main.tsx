import MainLayout from '@/layouts/MainLayout';
import Profile from '@/components/Profile';
import Experience from '@/components/Experience';
import SidePj from '@/components/SidePj';
import Section from '@/components/Card/Section';
import Title from '@/components/Card/Title';

const Main = () => {
    return (
        <MainLayout>
            <div className="w-4/5 py-12 text-black md:w-3/5">
                <Profile />
                <Section id="introduce">
                    <Title>Introduction</Title>
                    <div className="text-lg break-keep">
                        <p>안녕하세요. 2년차 프론트엔드 개발자 박소희입니다.</p>
                        <p>
                            저는 지난 2년간 5개의 웹 프로젝트를 성공적으로 수행한 경험이 있으며,
                            <br /> 프로젝트의 책임감과 효율적인 일정 관리를 통해 항상 기한 내 작업을
                            완료하는 데 자부심을 가지고 있습니다.
                        </p>
                        <p className="mt-3">
                            Vue.js를 빠르게 습득해 프로젝트에 성공적으로 적용한 경험을 바탕으로,
                            새로운 기술에 도전하는 자세를 유지하고 있습니다.
                            <br /> 또한, 팀 내외에서 원활한 소통을 중요시하며, 협업과 효율성을
                            높이는 데 기여하고 있습니다.
                        </p>
                        <p>
                            저는 비즈니스 요구사항을 신속히 분석하고 구현하여, 프로젝트의 진행
                            속도와 완성도를 높이는 데 강점을 가지고 있으며,
                            <br /> 발생하는 버그를 빠르게 해결하는 능력도 갖추고 있습니다.
                        </p>
                        <p className="mt-3">
                            앞으로도 끊임없는 성장과 팀 협업을 통해 프론트엔드 개발자로서 역량을
                            계속해서 키워나가겠습니다.
                            <br /> 함께 일하게 된다면 긍정적인 기여를 할 것을 약속드립니다.
                        </p>
                    </div>
                </Section>
                <Section id="career">
                    <Title>Career</Title>
                    <div className="">
                        <div className="flex flex-col justify-between mb-3 text-lg md:flex-row">
                            <h3>(주) 스마트인테크</h3>
                            <span className="text-base">2024.03.07 ~ 2024.10.31 (8개월)</span>
                        </div>
                        <p className="text-lg">
                            Vue3 프레임워크를 활용한 블록 기반 웹 에디터가 주요 기능인 연구노트
                            플랫폼 개발에 참여하였습니다.
                            <br /> 이 과정에서 비즈니스 로직을 신속하게 이해하고 구현하며, 발생하는
                            버그를 빠르게 식별하고 해결하는 데 강점을 발휘하였습니다.
                            <br /> 또한, 컴포넌트 기반 아키텍처를 적극 활용해 유지보수와 확장성이
                            용이한 코드를 작성하였습니다.
                        </p>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col justify-between mb-3 text-lg md:flex-row">
                            <h3>(주) 아이디어콘서트</h3>
                            <span className="text-base">2022.10.24 ~ 2024.01.16 (1년 3개월)</span>
                        </div>
                        <p className="text-lg">
                            Vue 프레임워크를 활용한 플랫폼 개발에 참여하며, 현업에서의 웹 개발
                            경험을 통해 Vue의 활용법과 컴포넌트 기반 아키텍처를 숙지했습니다. <br />
                            뿐만 아니라, Nuxt.js를 활용한 프로젝트에도 참여하여 서버 사이드
                            랜더링(SSR)과 같은 고급 기술에 대한 경험을 쌓았습니다. <br />
                            또한, 효율적인 협업과 소통을 통해 팀원들과의 협업 능력을 강화할 수
                            있었습니다.
                        </p>
                    </div>
                </Section>
                <Experience />
                <SidePj />
            </div>
        </MainLayout>
    );
};

export default Main;
