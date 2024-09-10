import profileImg from '@/assets/images/psh.jpg';
// import profileImg from '@/assets/images/portrait10576.jpg';

const Profile = () => {
    return (
        <section className="w-full pb-[40px] border-b border-gray-200 scroll-m-16" id="profile">
            <div className="flex items-end justify-between w-full mb-12">
                <h1 className="relative pl-3 text-4xl font-bold before:absolute before:block before:w-2 before:h-full before:bg-emerald before:top-1/2 before:-translate-y-1/2 before:left-0">
                    박소희<span className="text-2xl max-[430px]:block"> (Sohee park)</span>
                </h1>
                <span className="hidden text-xs text-gray-300 md:block">
                    Last updated: 2024.09.10
                </span>
            </div>
            <div className="flex flex-col items-center lg:flex-row">
                <div className="w-56 h-56 mb-8 overflow-hidden rounded-full lg:mr-16 lg:mb-0">
                    <img
                        src={profileImg}
                        alt="sohee park image"
                        className="object-cover object-center w-full h-full"
                    />
                </div>
                <div className="max-[430px]:text-center">
                    <div className="mb-5">
                        <h2 className="text-2xl font-bold text-emerald">Contact</h2>
                        <div className="flex items-center max-[430px]:justify-center max-[430px]:flex-col">
                            <h3 className="text-lg font-bold min-[430px]:w-28">Phone :</h3>
                            <span className=" text-slate-400">010 - 육4팔2 - 5일2사</span>
                        </div>
                        <div className="flex items-center max-[430px]:justify-center max-[430px]:flex-col">
                            <h3 className="text-lg font-bold min-[430px]:w-28">Email :</h3>
                            <a href="mailto:thgml5143@hanmail.net" className=" text-slate-400">
                                thgml5143@hanmail.net
                            </a>
                        </div>
                        <div className="flex items-center max-[430px]:justify-center max-[430px]:flex-col">
                            <h3 className="text-lg font-bold min-[430px]:w-28">GitHub :</h3>
                            <span>
                                <a
                                    href="https://github.com/pparksso"
                                    target="_blank"
                                    className=" text-slate-400"
                                >
                                    https://github.com/pparksso
                                </a>
                            </span>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="text-2xl font-bold text-emerald">Skill</h2>
                        {/* <div className="flex items-center max-[430px]:justify-center max-[430px]:flex-col">
                            <h3 className="text-lg font-bold min-[430px]:w-28">Deploy :</h3>
                            <span className=" text-slate-400">...</span>
                        </div> */}
                        <div className="flex items-center max-[430px]:justify-center max-[430px]:flex-col">
                            <h3 className="text-lg font-bold min-[430px]:w-28">Language :</h3>
                            <span className=" text-slate-400">Javascript, Typescript</span>
                        </div>
                        <div className="flex items-center max-[430px]:justify-center">
                            <h3 className="text-lg font-bold min-[430px]:w-28">Framework: </h3>
                            <span className=" text-slate-400">Vue3, Nuxt3, React</span>
                        </div>
                        <div className="flex items-center max-[430px]:justify-center max-[430px]:flex-col">
                            <h3 className="text-lg font-bold min-[430px]:w-28">Tool: </h3>
                            <span className=" text-slate-400">
                                GitHub, GitLab, Figma, Zeplin, Sourcetree, Slack, Microsoft Teams,
                                Redmine
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Profile;
