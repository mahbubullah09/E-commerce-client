import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";



const MainLayout = () => {
    return (
        <div>
            <div   className="max-w-6xl mx-auto">
            <Navbar/>
            <Outlet/>
            </div>
            {/* <Footer/> */}
            
        </div>
    );
};

export default MainLayout;