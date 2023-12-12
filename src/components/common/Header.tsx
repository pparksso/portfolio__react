import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
    const location = useLocation();

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
    }, [location]);

    return (
        <header className={`fixed w-full text-white bg-black z-50 ${isHidden ? 'h-0' : 'h-16'} transition-all`}>
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
    );
};

export default Header;
