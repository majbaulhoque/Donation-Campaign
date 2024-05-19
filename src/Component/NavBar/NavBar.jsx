import { NavLink } from 'react-router-dom';
import Logo from './Logo';
import { HiMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";
import { useState } from 'react';


const NavBar = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <div className="relative">
                <div className="flex justify-between max-w-7xl mx-auto pt-10">
                    <div className='pl-4'><Logo></Logo></div>
                    <nav>
                        <div className='text-2xl md:hidden mt-4 px-2' onClick={() =>setOpen(!open)}>
                            {
                                open === true ? 
                                <HiX /> : <HiMenuAlt3 />
                            }
                        </div>
                        <ul className={`flex gap-7 text-black font-extrabold duration-1000 absolute md:static lg:mt-8 lg:px-20
                        ${open ? 'top-28 -ml-72' : '-top-20'}
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