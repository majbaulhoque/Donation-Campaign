import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";

const MainLayout = () => {
    return (
        <div>
            <div className="flex justify-between max-w-7xl mx-auto" style={{}}>
                <Logo></Logo>
                <nav className="">
                    <NavLink to='/' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold mr-7" : "mr-7"
                    }>
                        Home
                    </NavLink>
                    <NavLink to='/donation' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold mr-7" : "mr-7"
                    }>Donation</NavLink>
                    <NavLink to='/statistic' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold mr-7" : "mr-7"
                    }>Statistics</NavLink>
                </nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;