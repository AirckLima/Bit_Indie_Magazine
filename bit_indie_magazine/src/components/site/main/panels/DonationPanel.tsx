import Panel from "./Panel";

const DonationPanel = () => {
    return (
        <Panel panelId="donation-panel" backgroundImage="" backgroundColor="bg-rose-800">
            <div className=" mb-2 ">
                <h2 className=" font-lexend text-2xl">Support Our Work</h2>
                <img src="" />
                <hr />
            </div>

            <p className="font-light text-xs mb-1 ">Explanation about donations</p>

            <div className=" h-48 overflow-scroll p-2">
                <div className="flex flex-col gap-y-2">

                    <div id="donation-category-1" className="relative h-fit text-center bg- border-2 border-white rounded ">
                        {/* <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div> */}
                        <div className=" pointer-events-none flex flex-col place-content-start h-full  " >
                            <img src="" />
                            <h3 className=" font-lexend" > CATEGORY 1</h3>
                            <ul className="grid grid-cols-2 h-fit min-h-12 place-content-center">
                                <li>item 1</li>
                                <li>item 2</li>
                            </ul>
                            <div className="bottom-2 w-full my-2">
                                <button className=" font-semibold text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                            </div>
                        </div>
                    </div>

                    <div id="donation-category-2" className="relative h-fit text-center bg- border-2 border-white rounded ">
                        {/* <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div> */}
                        <div className=" pointer-events-none flex flex-col place-content-start h-full  " >
                            <img src="" />
                            <h3 className=" font-lexend" > CATEGORY 2</h3>
                            <ul className="grid grid-cols-2 h-fit min-h-12 place-content-center">
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                            </ul>
                            <div className="bottom-2 w-full my-2">
                                <button className=" font-semibold text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                            </div>
                        </div>
                    </div>

                    <div id="donation-category-3" className="relative h-fit text-center bg- border-2 border-white rounded ">
                        {/* <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-b from-transparent via-transparent via-[70%] to-rose-700  to-[100%] rounded "></div> */}
                        <div className=" pointer-events-none flex flex-col place-content-start h-full " >
                            <img src="" />
                            <h3 className=" font-lexend" > CATEGORY 3</h3>
                            <ul className="grid grid-cols-2 h-fit">
                                <li>item 1</li>
                                <li>item 2</li>
                                <li>item 3</li>
                                <li>item 4</li>
                                <li>item 5</li>
                            </ul>
                        </div>
                        <div className="  w-full my-2">
                            <button className=" font-semibold text-sm bg-purple-950 px-2 py-1 rounded-md">CLICK</button>
                        </div>
                    </div>

                </div>
            </div>
        </Panel>
    );
};

export default DonationPanel;