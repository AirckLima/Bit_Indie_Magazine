import "@/styles/App.module.css";
import Panel from "@/components/site/main/panels/Panel";

const EditionsPage = () => {
    const editions = Array.from({ length: 7 }, (item, i) => {
        return ++i;
    });
    let i = 0;

    return (
        <div className=" w-full px-2 list-none ">
            {
                editions.map((edition) => (
                    <li key={ ++i } className="my-5" >
                        <Panel panelId={ `edition-${edition}` } backgroundColor="bg-indigo-950">
                            <div className="grid grid-cols-2">
                                <div id={ `edition-${edition}-main-info` } className="flex flex-col items-center justify-self-start">
                                    <div className=" text-center  mb-3 ">
                                        <h2 className=" font-semibold text-xl text-slate-100 ">{ `Edition # ${edition}` }{ " " }
                                        </h2>
                                        <h3 className=" font-light text-xs text-slate-200" > release date: month/year</h3>
                                    </div>

                                    <div className="relative group" aria-hidden="false">
                                        <div className=" w-28 h-40 bg-orange-400 rounded">
                                        </div>
                                        <a href={ `/editions/${edition}` } className="absolute top-1.5 right-2 hidden group-hover:block bg-red-500 rounded-md p-0.5">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2.0 } stroke="currentColor" className="w-4 h-4">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div id={ `edition-${edition}-description` } className=" self-center relative flex flex-col h-full justify-center ">

                                    <p className="relative top-7 basis-3/4 font-normal text-xs text-slate-100">
                                        A detailed description about this month release, touching every section of the magazine.
                                    </p>

                                    <div className="absolute bottom-0 w-full my-2 text-center">
                                        <a href={ `/reader/${edition}` } className=" font-semibold text-sm bg-orange-400 hover:bg-orange-300 active:bg-orange-700 px-3 py-2 rounded-md">READ</a>
                                    </div>

                                </div>
                            </div>
                        </Panel>
                    </li>
                )).reverse()
            }

            {/* pagination buttons */ }
        </div >
    );
};

export default EditionsPage;