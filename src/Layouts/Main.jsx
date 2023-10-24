import { Outlet } from "react-router-dom";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";
import RightNav from "./Pages/Home/Components/RightNav/RightNav";

const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <div className="pt-[20%] md:pt-[8%]">
            <RightNav></RightNav>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Main;