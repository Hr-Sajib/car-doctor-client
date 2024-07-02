import { Outlet } from "react-router-dom";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

const RootPage = () => {
    return (
        <div className="lg:mt-5">
            <Navbar/>
            <div className="lg:mx-20 mx-2 min-h-[860px]">
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default RootPage;