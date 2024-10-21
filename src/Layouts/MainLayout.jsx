import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Toaster } from "react-hot-toast";



const MainLayout = () => {
    return (
        <div>
            <div   className="max-w-6xl mx-auto">
            <Navbar/>
            <Outlet/>
            </div>
            {/* <Footer/> */}
            <Toaster/>
            
        </div>
    );
};

export default MainLayout;