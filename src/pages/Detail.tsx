import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import MainLayout from '@/layouts/MainLayout';
import { projectItems } from '@/datas/project';
import { ProjectItem } from '@/types/type';

const Detail = () => {
    const navigate = useNavigate();
    const [contents, setContents] = useState<ProjectItem | null>();
    const { id } = useParams();
    useEffect(() => {
        if (typeof id === 'string' && id !== 'undefined') {
            const item = projectItems.find((i) => i.id === parseInt(id));
            if (item === undefined) navigate('/');
            else setContents(item);
        } else {
            navigate('/');
        }
    }, [id, navigate]);
    return (
        <MainLayout>
            <div className="w-3/5 py-12 text-black pb-52">
                <h1 className="text-[24px] font-bold text-emerald leading-none mb-8">
                    {contents?.name}
                </h1>
                <div className="mb-5">
                    <h2 className="font-bold">프로젝트 관련 링크</h2>
                    <a href={contents?.url} className="underline ">
                        {contents?.url}
                    </a>
                </div>
                <div className="mb-5">
                    <h2 className="font-bold">해당 프로젝트 설명</h2>
                    <p>{contents?.desc}</p>
                </div>
                <div className="mb-5">
                    <h2 className="font-bold">기술 스택</h2>
                    <ul className="">
                        {contents?.stack.map((s) => (
                            <li
                                key={s}
                                className="relative pl-4 before:rounded-full before:block before:bg-black before:w-1 before:h-1 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1"
                            >
                                {s}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-5">
                    <h2 className="font-bold">협업 툴</h2>
                    <ul>
                        {contents?.tool.map((t) => (
                            <li
                                key={t}
                                className="relative pl-4 before:rounded-full before:block before:bg-black before:w-1 before:h-1 before:absolute before:top-1/2 before:-translate-y-1/2 before:left-1"
                            >
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className="font-bold">구현 기능(본인이 참여한 기능만 나열하였습니다.)</h2>
                    <ul>
                        {contents?.func.map((f, i) => (
                            <li className="mt-2">
                                <span>
                                    {i + 1}. {f.title}
                                </span>
                                {f.desc && <p className="mb-5 text-sm pl-7">{f.desc}</p>}
                                <div className="flex justify-center ">
                                    {f.img && (
                                        <img
                                            src={f.img}
                                            alt={f.title}
                                            className="shadow-2xl w-[90%]"
                                        />
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </MainLayout>
    );
};

export default Detail;
