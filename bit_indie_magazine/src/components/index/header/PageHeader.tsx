'use client';

import NavBar from "./NavBar";
import Logo from "./Logo";
import MobileNavigation from "./MobileNavigation";


const PageHeader = () => {
    return (
        <header className="flex flex-row items-stretch px-3 py-2 bg-yellow-400">
            
            <Logo />

            <NavBar />

            <MobileNavigation />

        </header>
    );
};

export default PageHeader;