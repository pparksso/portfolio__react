import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import Contact from '@/pages/Contact';
import Detail from '@/pages/Detail';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/pparksso.github.io" element={<Main />} />
                    <Route path="/pparksso.github.io/contact" element={<Contact />} />
                    <Route path="/pparksso.github.io/project/:id" element={<Detail />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
