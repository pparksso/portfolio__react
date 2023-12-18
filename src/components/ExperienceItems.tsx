import { ExperienceItem } from '@/types/type';
import { Link } from 'react-router-dom';

const ExperienceItems = (props: { item: ExperienceItem }) => {
    const { item } = props;
    return (
        <div id="experience-item" className="mb-8">
            <div className="flex items-end mb-3">
                <Link
                    to={`/project/${item.id}`}
                    className="text-[24px] font-bold text-lime-500 mr-4 leading-none"
                >
                    {item.name}
                </Link>
                <a
                    href={item.url}
                    target="_blank"
                    className="hidden text-sm leading-none underline text-lime-500 md:block"
                >
                    {item.url}
                </a>
            </div>
            <p className="relative mb-6">- {item.desc}</p>
            <div className="flex flex-col py-2 border-b md:flex-row border-b-slate-100">
                <h3 className="w-[25%]">팀 프로젝트</h3>
                <ul className="pl-5 space-y-1 list-disc grow marker:text-black md:pl-0 md:space-y-0 md:list-none">
                    {item.team.map((t) => (
                        <li key={t} className="">
                            {t}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col py-2 border-b border-b-slate-100 md:flex-row">
                <h3 className="w-[25%]">기간</h3>
                <ul className="pl-5 space-y-1 list-disc grow marker:text-black md:pl-0 md:space-y-0 md:list-none">
                    <li>{item.period}</li>
                </ul>
            </div>
            <div className="flex flex-col py-2 border-b border-b-slate-100 md:flex-row">
                <h3 className="w-[25%]">사용한 기술</h3>
                <ul className="pl-5 space-y-1 list-disc grow marker:text-black md:pl-0 md:space-y-0 md:list-none">
                    <li>{item.stack}</li>
                </ul>
            </div>
            <div className="flex flex-col py-2 md:flex-row">
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
