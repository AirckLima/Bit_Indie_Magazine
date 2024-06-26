import Panel from "./Panel";

const PreviousEditionsPanel = () => {
    const previousEdition = [1, 2, 3, 4, 5, 6]
    let i = 0;

    return (
        <Panel panelId="previous-editions-panel" backgroundImage="" backgroundColor="bg-indigo-950">
            <h2 className=" font-lexend text-2xl">Previous Editions</h2>
            <hr />

            <div className="relative">
                <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[95%] to-indigo-950 to-[100%] opacity-90"></div>
                <div className="overflow-x-scroll will-change-scroll snap-x">
                    <div id="previous-editions-showcase" className=" flex flex-row justify-between w-[160%] py-2  pr-5 pl-2 ">

                        {
                            previousEdition.map((edition) =>
                            (
                                <li key={++i} id={`edition-index-${edition}`} className="group relative w-16 h-24 shrink-0 bg-orange-400 rounded-sm snap-start scroll-mx-3 list-none">
                                    <a href={`/editions/${edition}`} className="block size-full">
                                    </a>
                                </li>
                            ))
                        }

                        <a href="/editions" className="self-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 self-center mr-3">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                            </svg>
                        </a>

                    </div>
                </div>
            </div>

            <div>
                <h3 id="highlight-edition-title"></h3>
                <img id="highlight-edition-image" src="" />
            </div>
        </Panel>
    )
}

export default PreviousEditionsPanel;