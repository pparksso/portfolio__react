import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="relative h-16 text-white bg-black">
            <div className="flex items-center justify-center h-full">
                <h1 className="absolute left-3 -translate-y-2/4 top-2/4">
                    <Link to="/">☀️ Dev Sohee</Link>
                </h1>
                <nav className="text-xl font-bold">
                    <ul className="flex">
                        <li>
                            <a href="" className="inline-block p-4">
                                Profile
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-block p-4">
                                Career
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-block p-4">
                                Experience
                            </a>
                        </li>
                        <li>
                            <a href="" className="inline-block p-4">
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
