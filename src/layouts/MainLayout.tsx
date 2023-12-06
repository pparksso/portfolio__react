import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const MainLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="grid grid-rows-[auto,1fr,auto] min-h-screen">
            <Header />
            <main className="min-h-full ">{props.children}</main>
            <Footer />
        </div>
    );
};

export default MainLayout;
