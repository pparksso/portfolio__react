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
                    <div className="text-lg">
                        <p>안녕하세요. 2년차 프론트엔드 개발자 박소희입니다.</p>
                        <p>총 몇개의 프로젝트의 개발, 배포에 참여</p>
                        <p>어떻게 했다~</p>
                        <p>자기 pr</p>
                        <p>pr 2</p>
                    </div>
                </Section>
                <Section id="career">
                    <Title>Career</Title>
                    <div className="flex flex-col justify-between mb-3 text-lg md:flex-row">
                        <h3>(주) 아이디어콘서트</h3>
                        <span>2022.10.24 ~ 2024.01.15 (1년 2개월)</span>
                    </div>
                    <p className="text-lg">어떤 회사인지, 여기서 무엇을 배웠는지 기술</p>
                </Section>
                <Experience />
                <SidePj />
            </div>
        </MainLayout>
    );
};

export default Main;
