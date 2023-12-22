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
                            현재는 웹툰 관련 스타트업에서 프론트엔드 개발자로 일하고 있으며, 지난
                            1년 동안 4개의 웹 프로젝트를 개발하는 경험을 쌓았습니다.
                        </p>
                        <p className="mt-3">
                            저는 프로젝트에 대한 책임감과 업무에 대한 효율적인 관리로 항상 기한 내에
                            작업을 완료하는 데에 자부심을 가지고 있습니다.
                        </p>
                        <p>
                            더불어, Vue라는 새로운 기술을 빠르게 습득하고, 이를 활용하여 프로젝트에
                            성공적으로 적용했습니다. <br /> 이 경험을 토대로 두려워하지 않고 다양한
                            기술에 도전하는 자세를 유지하고 있습니다.
                        </p>
                        <p>
                            또한, 팀 내외에서의 원활한 소통을 중요시하며, 서로의 의견을 존중하고
                            효과적으로 의사소통하여 일을 진행하는 스타일을 가지고 있습니다. <br />
                            이로써 팀의 협업과 효율성을 높이는데 기여하고 있습니다.
                        </p>
                        <p className="mt-3">
                            끊임없는 성장과 팀과의 협업을 통해 미래의 프로젝트에도 적극적으로
                            참여하고, 프론트엔드 개발자로서의 역량을 더욱 향상시키고자 노력하고
                            있습니다. <br /> 함께 일하게 된다면 팀에 긍정적인 영향을 끼칠 것을
                            기대합니다.
                        </p>
                    </div>
                </Section>
                <Section id="career">
                    <Title>Career</Title>
                    <div className="flex flex-col justify-between mb-3 text-lg md:flex-row">
                        <h3>(주) 아이디어콘서트</h3>
                        <span>2022.10.24 ~ 2024.01.16 (1년 2개월)</span>
                    </div>
                    <p className="text-lg">
                        Vue 프레임워크를 활용한 플랫폼 개발에 참여하며, 현업에서의 웹 개발 경험을
                        통해 Vue의 활용법과 컴포넌트 기반 아키텍처를 숙지했습니다. <br />
                        뿐만 아니라, Nuxt.js를 활용한 프로젝트에도 참여하여 서버 사이드
                        랜더링(SSR)과 같은 고급 기술에 대한 경험을 쌓았습니다. <br />
                        또한, 효율적인 협업과 소통을 통해 팀원들과의 협업 능력을 강화할 수
                        있었습니다.
                    </p>
                </Section>
                <Experience />
                <SidePj />
            </div>
        </MainLayout>
    );
};

export default Main;
