import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();

    // 모바일 사이드 헤더
    const [sideH, setSideH] = useState(false);

    // 헤더 높이 조절
    const [isHidden, setIsHidden] = useState(false);
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            if (currentScrollPosition > prevScrollPosition) {
                setIsHidden(true);
            } else if (currentScrollPosition < prevScrollPosition) {
                setIsHidden(false);
            }
            setPrevScrollPosition(currentScrollPosition);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPosition]);

    // 해당 id의 dom으로 이동
    useEffect(() => {
        const { hash } = location;
        if (hash && hash.startsWith('#')) {
            const targetId = hash.substring(1);
            const targetEl = document.getElementById(targetId);
            if (targetEl) {
                targetEl.scrollIntoView({ behavior: 'smooth' });
            }
        }
        if (window.innerWidth < 1025) setSideH(false);
    }, [location]);

    const sideHeaderHandler = () => {
        setSideH(!sideH);
    };
    return (
        <>
            {/* pc */}
            <header
                className={`fixed w-full text-white bg-black z-50 ${
                    isHidden ? 'h-0' : 'h-16'
                } transition-all hidden md:block lg:block xl:block`}
            >
                <div className="flex items-center justify-center h-full">
                    <h1 className="absolute left-3 -translate-y-2/4 top-2/4">
                        <Link to="/">☀️ Dev Sohee</Link>
                    </h1>
                    <nav className="text-xl font-bold">
                        <ul className="flex">
                            <li>
                                <a href="/#profile" className="inline-block p-4">
                                    Profile
                                </a>
                            </li>
                            <li>
                                <a href="/#career" className="inline-block p-4">
                                    Career
                                </a>
                            </li>
                            <li>
                                <a href="/#work" className="inline-block p-4">
                                    Experience
                                </a>
                            </li>
                            <li>
                                <a href="/#project" className="inline-block p-4">
                                    Side Project
                                </a>
                            </li>
                            <li>
                                <Link to="/contact" className="inline-block p-4">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            {/* mobile */}
            <header className="fixed top-0 left-0 z-50 block w-full h-16 bg-white shadow-lg md:hidden lg:hidden xl:hidden">
                <div className="relative flex items-center justify-between h-full px-8">
                    <h1 className="text-xl">
                        <Link to="/">☀️</Link>
                    </h1>
                    <div className="relative w-8 h-full">
                        <button className="relative w-full h-full" onClick={sideHeaderHandler}>
                            <span
                                className={`inline-block w-8 bg-black absolute h-[3px] right-0 transition-all duration-200 ${
                                    sideH ? 'top-1/2' : 'top-[21px]'
                                } ${sideH && 'rotate-45'}`}
                            ></span>
                            <span
                                className={`inline-block w-8 bg-black absolute h-[3px] top-1/2 right-0 ${
                                    sideH && 'hidden'
                                }`}
                            ></span>
                            <span
                                className={`inline-block w-8 bg-black absolute h-[3px] right-0 transition-all duration-200 ${
                                    sideH ? 'top-1/2' : 'top-[42px]'
                                } ${sideH && '-rotate-45'}`}
                            ></span>
                        </button>
                    </div>
                </div>
                <div
                    className={`absolute top-[64px] w-[100%] h-[100vh] bg-black bg-opacity-20 transition-all duration-200 ease-linear ${
                        sideH ? 'right-[0px]' : 'right-[-1000px]'
                    }`}
                >
                    <div className="bg-white w-[80%] h-[100vh] absolute top-0 right-0 p-8">
                        <ul className="">
                            <li className="py-2">
                                <a
                                    href="/#profile"
                                    className={`inline-block text-2xl font-bold ${
                                        location.hash === '#profile' && 'text-emerald'
                                    }`}
                                >
                                    Profile
                                </a>
                            </li>
                            <li className="py-2">
                                <a
                                    href="/#career"
                                    className={`inline-block text-2xl font-bold ${
                                        location.hash === '#career' && 'text-emerald'
                                    }`}
                                >
                                    Career
                                </a>
                            </li>
                            <li className="py-2">
                                <a
                                    href="/#work"
                                    className={`inline-block text-2xl font-bold ${
                                        location.hash === '#work' && 'text-emerald'
                                    }`}
                                >
                                    Experience
                                </a>
                            </li>
                            <li className="py-2">
                                <a
                                    href="/#project"
                                    className={`inline-block text-2xl font-bold ${
                                        location.hash === '#project' && 'text-emerald'
                                    }`}
                                >
                                    Side Project
                                </a>
                            </li>
                            <li className="py-2">
                                <Link
                                    to="/contact"
                                    className={`inline-block text-2xl font-bold ${
                                        location.pathname.includes('contact') && 'text-emerald'
                                    }`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
