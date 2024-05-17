
import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import Banner from './Banner';

const NavBar = () => {
    return (
        <div>
            <div className="bg-cover bg-center h-[80vh]" style={{backgroundImage: 'url("../../../public/images/Rectangle 4281.png")'}}>
                <div className="flex justify-between max-w-7xl mx-auto pt-10">
                    <Logo></Logo>
                    <nav className="">
                        <ul className='flex gap-7 text-black font-extrabold'>
                            <li>
                                <NavLink to='/' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/donation' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Donation</NavLink>
                            </li>
                            <li>
                                <NavLink to='/statistic' className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "underline text-[#DF3B41] font-bold" : ""
                                }>Statistics</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <Banner></Banner>
            </div>
        </div>
    );
};

export default NavBar;