import LinkList from "./LinkList";



const NavBar = () => {

    const openMobileNav = () => {
        const mobileNavPanel = document.querySelector("#mobile-navigation");

        if (mobileNavPanel) mobileNavPanel.className = "";

    };

    const closeMobileNav = () => {
        const mobileNavPanel = document.querySelector("#mobile-navigation");

        if (mobileNavPanel) mobileNavPanel.className = "hidden";

    };

    return (
        <div className="relative flex flex-col place-content-center">
            <nav id="desktop-navigation" className="basis-1/3 absolute right-2 flex flex-row justify-end">
                <button onClick={openMobileNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>

                <LinkList classStyle="hidden" onLinkClick={closeMobileNav} />

            </nav>
        </div>
    )
}

export default NavBar;