import Section from '@/components/Card/Section';
import Title from '@/components/Card/Title';
import ExperienceItems from '@/components/ExperienceItems';
import { sideProjectDatas } from '@/datas/experience';

const SidePj = () => {
    return (
        <Section id="project">
            <Title>Project Experience</Title>
            <p className="text-lg mb-9">저의 성장에 영향을 주었던 사이드 프로젝트를 소개합니다.</p>
            {sideProjectDatas.map((item) => (
                <ExperienceItems item={item} key={item.name} />
            ))}
        </Section>
    );
};

export default SidePj;
