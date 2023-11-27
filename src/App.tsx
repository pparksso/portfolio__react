import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '@/pages/Main';
import Contact from '@/pages/Contact';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
