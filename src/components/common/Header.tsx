import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="text-black">
            <div className="flex ">
                <h1>Dev Sohee</h1>
                <nav>
                    <ul className="flex">
                        <li>
                            <a href="">Profile</a>
                        </li>
                        <li>
                            <a href="">Career</a>
                        </li>
                        <li>
                            <a href="">Experience</a>
                        </li>
                        <li>
                            <a href="">Side Project</a>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        {/* contact는 ... 따로 페이지 만드는 게 좋을 듯 */}
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
