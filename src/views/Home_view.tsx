import DefaultDrawer from "../components/drawer/Default_drawer";

const HomeView = () => {
    return(
        <div className="flex bg-[#EEF3EE] h-screen">
            <div className="w-1/5 place-content-center justify-items-center">
                <DefaultDrawer />
            </div>
        </div>
    );
};

export default HomeView;