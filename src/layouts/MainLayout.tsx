import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const MainLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-rows-[1fr,auto] min-h-screen">
            <Header />
            <main className="flex flex-col items-center min-h-full pt-[64px]">
                {props.children}
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout;
