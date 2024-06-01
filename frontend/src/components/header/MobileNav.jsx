import React from 'react';
import { HiBars3 } from "react-icons/hi2";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';

const MobileNav = ({ menuItems, logo, onClose, onOpen, hideLeft }) => {
    return (
        <div className="h-16 flex justify-between items-center px-6 lg:px-12 bg-blue-500">
            <a href="/">
                <img className="h-14 w-35 rounded-lg" src={logo} alt="Logo" />
            </a>
            <button onClick={onOpen}>
                <HiBars3 className='h-10 w-10' />
            </button>

            <div className={`transition-all w-full h-full fixed bg-primary z-50 top-0 ${hideLeft} flex justify-center items-center`}>
                <button onClick={onClose} className='absolute right-8 top-32'>
                    <IoCloseCircleOutline className='h-10 w-10 text-red-500' />
                </button>
                <div className='bg-blue-500 p-16 rounded-lg'>
                    <ul className='flex flex-col gap-5 font-bold text-xl'>
                        {menuItems?.map((menu, index) => (
                            <li key={index} className='text-xl text-white font-bold hover:text-orange-600 flex items-center gap-3'>
                                {menu.icon}
                                <Link to={menu.name}>{menu.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className='flex justify-center items-center mt-5'>
                        <button className='bg-orange-400 rounded-md p-2 px-4 font-bold text-white hover:bg-orange-600 mr-3'>SignIn</button>
                        <button className='bg-orange-400 rounded-md p-2 px-4 font-bold text-white hover:bg-orange-600'>SignUp</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MobileNav;
