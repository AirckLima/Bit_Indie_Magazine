import "../App.module.css";

const EditionsPage = () => {
    const editions = Array.from({ length: 7 }, (item, i) => {
        return ++i;
    });
    let i = 0;

    return (
        <div className=" w-full px-2 ">
            { editions.map((edition) => (
                <li key={ ++i } className="px-2 pt-1 pb-4 my-5 bg-purple-950 border-2 border-slate-200 rounded-md" >
                    <section className="grid grid-cols-2 rounded-md">
                        <div id={ `edition-${edition}-main-info` } className="flex flex-col items-center justify-self-start">
                            <div className="text-center  mb-3 ">
                                <h2 className=" font-semibold text-xl text-slate-100 ">{ `Edition # ${edition}` }</h2>
                                <h3 className=" font-light text-xs text-slate-200" > release date: month/year</h3>
                            </div>

                            <div className=" w-28 h-40 bg-orange-400">
                            </div>
                        </div>
                        <div id={ `edition-${edition}-description` } className=" self-center relative flex flex-col h-full justify-center">
                            <p className=" start-2 basis-3/4  font-normal text-sm text-slate-100">
                                A detailed description about this month release, touching every section of the magazine.
                            </p>

                            <div className="absolute bottom-0 w-full my-2 text-center">
                                <button className=" font-semibold text-sm bg-orange-400 px-2 py-1 rounded-md">READ</button>
                            </div>

                        </div>
                    </section>
                </li>
            )).reverse() }

            {/* pagination buttons */}
        </div>
    );
};

export default EditionsPage;