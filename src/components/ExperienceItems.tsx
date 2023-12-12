import { ExperienceItem } from '@/types/type';
import { Link } from 'react-router-dom';

const ExperienceItems = (props: { item: ExperienceItem }) => {
    const { item } = props;
    return (
        <div id="experience-item" className="mb-5">
            <div className="flex items-end mb-3">
                <Link to={`/experience/${item.name}`} className="text-[24px] font-bold text-lime-500 mr-4 leading-none">
                    {item.name}
                </Link>
                <span className="text-sm leading-none underline text-lime-500">{item.url}</span>
            </div>
            <p className="relative mb-6">- {item.desc}</p>
            <div className="flex py-2 border-b border-b-slate-100">
                <h3 className="w-[25%]">팀 프로젝트</h3>
                <ul className="grow">
                    {item.team.map((t) => (
                        <li key={t}>{t}</li>
                    ))}
                </ul>
            </div>
            <div className="flex py-2 border-b border-b-slate-100">
                <h3 className="w-[25%]">기간</h3>
                <ul>
                    <li>{item.period}</li>
                </ul>
            </div>
            <div className="flex py-2 border-b border-b-slate-100">
                <h3 className="w-[25%]">사용한 기술</h3>
                <ul>
                    <li>{item.stack}</li>
                </ul>
            </div>
            <div className="flex py-2 ">
                <h3 className="w-[25%]">구현 기능</h3>
                <ul className="pl-5 space-y-1 list-disc marker:text-black">
                    {item.function.map((f) => (
                        <li key={f}>{f}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ExperienceItems;
