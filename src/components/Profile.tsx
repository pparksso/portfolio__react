import profileImg from '@/assets/images/psh.jpg';

const Profile = () => {
    return (
        <section className="w-full pb-[40px] border-b border-gray-200" id="profile">
            <div className="flex items-end justify-between w-full mb-12">
                <h1 className="relative pl-3 text-4xl font-bold before:absolute before:block before:w-2 before:h-full before:bg-emerald before:top-1/2 before:-translate-y-1/2 before:left-0">
                    박소희<span className="text-2xl"> (Sohee park)</span>
                </h1>
                <span className="text-xs text-gray-300">Last updated: 2023.12.14</span>
            </div>
            <div className="flex items-center">
                <div className="w-56 h-56 mr-16 overflow-hidden rounded-full">
                    <img src={profileImg} alt="sohee park image" className="object-cover object-center w-full h-full" />
                </div>
                <div className="">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold text-emerald">Contact</h2>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">Phone :</h3>
                            <span>{import.meta.env.VITE_TEL}</span>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">Email :</h3>
                            <span>{import.meta.env.VITE_MAIL}</span>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">GitHub :</h3>
                            <span>
                                <a href={import.meta.env.VITE_GITHUB} target="_blank">
                                    {import.meta.env.VITE_GITHUB}
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold text-emerald">Skill</h2>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">Deploy :</h3>
                            <span>...</span>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">Language :</h3>
                            <span>Javascript, Typescript</span>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">Framework: </h3>
                            <span>Vue3, Nuxt3, React</span>
                        </div>
                        <div className="flex items-center">
                            <h3 className="text-lg font-bold w-28">Tool: </h3>
                            <span>GitHub, GitLab, Figma, Zeplin, Sourcetree</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
