import { HashRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import Contact from '@/pages/Contact';
import Detail from '@/pages/Detail';

function App() {
    return (
        <>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/project/:id" element={<Detail />} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
