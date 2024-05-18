import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';
import Banner from './Banner';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="relative">
                <div className="flex justify-between max-w-7xl mx-auto pt-10">
                    <Logo></Logo>

                    <nav>
                        <div className='md:hidden text-3xl mt-3' onClick={() => setOpen(!open)}>
                            {
                                open === true ?
                                    <HiX />
                                    :
                                    <HiMenuAlt3 />
                            }
                        </div>
                        <ul className={`flex gap-7 text-black font-extrabold absolute md:static duration-1000
                        ${open ? 'flex text-base text-center -ml-72 mt-7' : 'hidden'}
                        `}>
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
        </div>
    );
};

export default NavBar;