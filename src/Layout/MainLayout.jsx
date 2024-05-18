import { Outlet } from "react-router-dom";
import NavBar from "../Component/NavBar/NavBar";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <NavBar></NavBar>
            </div>
            <div className="">
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default MainLayout;