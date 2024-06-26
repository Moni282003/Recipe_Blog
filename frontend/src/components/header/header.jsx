import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import logo from '../../assets/bg.png';
import MobileNav from './MobileNav';
import { FaHome, FaInfo, FaServicestack, FaPhone } from "react-icons/fa";

const Header = () => {
    const [hideLeft, setHideLeft] = useState("-left-[1000px]");
    const menuItems = [
        { name: 'Home', icon: <FaHome /> },
        { name: 'Recipe', icon: <FaServicestack /> },
    ];
      
    const onOpen = () => {
        setHideLeft("left-0");
    };

    const onClose = () => {
        setHideLeft("-left-[1000px]");
    };

    return (
        <>
            <div className="max-w-[900px] lg:hidden">
                <MobileNav menuItems={menuItems} logo={logo} onClose={onClose} onOpen={onOpen} hideLeft={hideLeft} />
            </div>
            <div className="min-w-[900px] hidden lg:block">
                <DesktopNav menuItems={menuItems} logo={logo} />
            </div>
        </>
    );
};

export default Header;
