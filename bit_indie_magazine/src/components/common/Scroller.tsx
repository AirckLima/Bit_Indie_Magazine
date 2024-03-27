
interface ScrollerProps {
    idPattern: (index: number) => string,
    snapType: "start" | "center" | "end" | "align-none",
    itemsGap: string;
    children: JSX.Element[];
}


const Scroller = ({ idPattern, snapType, itemsGap, children }: ScrollerProps) => {
    let i = 0;
    return (
        <div className="overflow-x-scroll">
            <div id="previous-editions-showcase" className=" flex flex-row justify-between w-fit py-2  pr-5 pl-2 ">
                { children.map((child) => (
                    <li key={ idPattern(i++) } className={ `${snapType} ${itemsGap}` }>
                        { child }
                    </li>
                )) }

                <a href="/editions" className="self-center" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6 self-center mr-3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                    </svg>
                </a>

            </div>
        </div>
    );
};

export default Scroller;