import LinkList from "./LinkList";


const MobileNavigation = () => {

    const closeMobileNav = () => {
        const mobileNavPanel = document.querySelector("#mobile-navigation");

        if (mobileNavPanel) mobileNavPanel.className = "hidden";

    };

    return (
        <aside id="mobile-navigation" className="hidden">
            <div className="absolute top-0 left-0">
                <div id="navigation-screen" className="fixed top-0 flex flex-col h-screen w-screen place-content-center z-10 bg-amber-400 opacity-95">
                    <button className="absolute top-5 right-5" onClick={closeMobileNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12">
                            <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                        </svg>
                    </button>

                    <LinkList classStyle="relative -top-10 text-center text-2xl font-kode font-bold space-y-12" onLinkClick={closeMobileNav} />

                </div>
            </div>
        </aside>
    )
}

export default MobileNavigation;
