import Icons from "./Icons";

const PageFooter = () => {
    return (
        <footer className="bg-slate-900 rounded-t-md px-2 py-1">
            <ul className="list-none">
                <div className="grid grid-cols-3 text-center justify-center">
                    <li>
                        <p className="pointer-events-none text-uxs font-semibold text-slate-400">FOLLOW US</p>

                        <Icons />

                    </li>
                    <li><a className=" pointer-events-none text-uxs font-semibold text-slate-400" href="">SUPPORT</a></li>
                    <li><a className=" pointer-events-none text-uxs font-semibold text-slate-400" href="">ABOUT</a></li>
                </div>
            </ul>
        </footer>
    );
};

export default PageFooter;