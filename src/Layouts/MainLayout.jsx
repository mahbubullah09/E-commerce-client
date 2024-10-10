import { Outlet } from "react-router-dom";



const MainLayout = () => {
    return (
        <div>
            <div   className="max-w-6xl mx-auto">
            {/* <Navbar/> */}
            <Outlet/>
            </div>
            {/* <Footer/> */}
            
        </div>
    );
};

export default MainLayout;