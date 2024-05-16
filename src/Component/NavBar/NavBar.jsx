
import { NavLink } from 'react-router-dom';
import Logo from './Logo';

const NavBar = () => {
    return (
        <div>
            <div className="flex justify-between max-w-7xl mx-auto" style={{}}>
                <Logo></Logo>
                <nav className="">
                    <ul className='flex gap-7'>
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
        </div>
    );
};

export default NavBar;