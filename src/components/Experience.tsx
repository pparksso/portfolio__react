import Section from '@/components/Card/Section';
import Title from '@/components/Card/Title';
import ExperienceItems from '@/components/ExperienceItems';
import { experienceDatas } from '@/datas/experience';

const Experience = () => {
    return (
        <Section id="work">
            <Title>Work Experience</Title>
            <p className="text-lg mb-9">재직 중 참여한 프로젝트와 담당 업무를 소개해드리겠습니다.</p>
            {experienceDatas.map((item) => (
                <ExperienceItems item={item} key={item.name} />
            ))}
        </Section>
    );
};

export default Experience;
