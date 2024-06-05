import React from 'react';
import { Link } from 'react-router-dom';

const DesktopNav = ({ menuItems, logo }) => {
    return (
        <div className='h-16 flex justify-between items-center px-6 lg:px-12 bg-slate-700'>
            <a href='/'>
                <img className='h-14 w-35 rounded-lg' src={logo} alt="Logo" />
            </a>
            <ul className='flex justify-between items-center px-6 lg:px-12 gap-7'>
                {menuItems.map((menuItem, index) => (
                    <li key={index} className='text-xl font-bold text-white hover:text-orange-600'>
                        <Link to={menuItem.name}>{menuItem.name}</Link>
                    </li>
                ))}
            </ul>
           
        </div>
    );
};

export default DesktopNav;
