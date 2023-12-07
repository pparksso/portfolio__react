import MainLayout from '@/layouts/MainLayout';
import Profile from '@/components/Profile';

const Main = () => {
    return (
        <MainLayout>
            <div className="w-3/5 py-12">
                <Profile />
            </div>
        </MainLayout>
    );
};

export default Main;
