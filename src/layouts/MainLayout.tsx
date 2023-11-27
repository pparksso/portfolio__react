import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const MainLayout = (props: { children: React.ReactNode }) => {
    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
