import loadingImg from '@/assets/images/loading.gif';

const Loading = () => {
    return (
        <div className=" w-[100vw] h-[100vh] top-0 left-0 bg-black fixed z-50 opacity-80 select-none flex justify-center items-center">
            <img src={loadingImg} alt="loading" className="w-auto" />
        </div>
    );
};

export default Loading;
