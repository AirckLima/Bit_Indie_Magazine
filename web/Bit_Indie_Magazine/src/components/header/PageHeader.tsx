
const PageHeader = () => {
    const openMobileNav = () => {
        const mobileNavPanel = document.querySelector("#mobile-navigation")

        if (mobileNavPanel) mobileNavPanel.className = ""

    };
    const closeMobileNav = () => {
        const mobileNavPanel = document.querySelector("#mobile-navigation")

        if (mobileNavPanel) mobileNavPanel.className = "hidden"

    };

    return (
        <header className="flex flex-row items-stretch px-3 py-2 bg-yellow-400">
            <div className="basis-full">
                <img src="" />
                <h1 className="font-honk text-2xl text-balance text-center ml-3"><a href="">Bit Indie <br /> Magazine</a></h1>
            </div>

            <div className="relative flex flex-col place-content-center">
                <nav id="desktop-navigation" className="basis-1/3 absolute right-2 flex flex-row justify-end">
                    <button onClick={openMobileNav}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>

                    <ul id="desktop-nav-links" className="hidden">
                        <li><a href="">Link 1</a></li>
                        <li><a href="">Link 2</a></li>
                        <li><a href="">Link 3</a></li>
                        <li><a href="">Link 4</a></li>
                    </ul>
                </nav>
            </div>

            <aside id="mobile-navigation" className="hidden">
                <div className="absolute top-0 left-0">
                    <div id="navigation-screen" className="fixed top-0 flex flex-col h-screen w-screen place-content-center z-10 bg-amber-400 opacity-95">
                        <button className="absolute top-5 right-5" onClick={closeMobileNav}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-12 h-12">
                                <path d="M5.28 4.22a.75.75 0 0 0-1.06 1.06L6.94 8l-2.72 2.72a.75.75 0 1 0 1.06 1.06L8 9.06l2.72 2.72a.75.75 0 1 0 1.06-1.06L9.06 8l2.72-2.72a.75.75 0 0 0-1.06-1.06L8 6.94 5.28 4.22Z" />
                            </svg>
                        </button>
                        <ul className="relative -top-10 text-center text-2xl font-kode font-bold space-y-12">
                            <li><a className=" pointer-events-none " href="">Link 1</a></li>
                            <li><a className=" pointer-events-none " href="">Link 2</a></li>
                            <li><a className=" pointer-events-none " href="">Link 3</a></li>
                            <li><a className=" pointer-events-none " href="">Link 4</a></li>
                        </ul>
                    </div>
                </div>
            </aside>
        </header>
    )
}

export default PageHeader;