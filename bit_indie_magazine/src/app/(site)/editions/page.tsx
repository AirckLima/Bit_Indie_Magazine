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
                    <li key={++i} className="my-5" >
                        <Panel panelId={`edition-${edition}`} backgroundColor="bg-indigo-950">
                            <div className="grid grid-cols-2">
                                <div id={`edition-${edition}-main-info`} className="flex flex-col items-center justify-self-start">
                                    <div className="text-center  mb-3 ">
                                        <h2 className=" font-semibold text-xl text-slate-100 ">{`Edition # ${edition}`}</h2>
                                        <h3 className=" font-light text-xs text-slate-200" > release date: month/year</h3>
                                    </div>

                                    <div className=" w-28 h-40 bg-orange-400">
                                    </div>
                                </div>
                                <div id={`edition-${edition}-description`} className=" self-center relative flex flex-col h-full justify-center ">

                                    <p className="relative top-7 basis-3/4 font-normal text-xs text-slate-100">
                                        A detailed description about this month release, touching every section of the magazine.
                                    </p>

                                    <div className="absolute bottom-0 w-full my-2 text-center">
                                        <a href="/reader" className=" font-semibold text-sm bg-orange-400 hover:bg-orange-300 active:bg-orange-700 px-3 py-2 rounded-md">READ</a>
                                    </div>

                                </div>
                            </div>
                        </Panel>
                    </li>
                )).reverse()
            }

            {/* pagination buttons */}
        </div >
    );
};

export default EditionsPage;