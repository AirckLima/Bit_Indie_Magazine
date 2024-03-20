
const AboutPanel = () => {
    return (
        <section id="about-panel" className=" mx-1 px-2 py-2 bg-violet-950 text-slate-100 border-2 border-slate-300 rounded-md drop-shadow-lg">
            <div className=" mb-2 ">
                <h2 className=" font-lexend text-2xl text-end">About This Project!</h2>
                <img src="" />
                <hr />
            </div>
            <div>
                <p className=" text-sm"> Know everything about this project.</p>
                <ul className="  list-disc list-inside" >
                    <li className=""> Who are we?</li>
                    <li className=""> What do we do?</li>
                    <li className=""> Why a magazine?</li>
                </ul>
                <div className="flex flex-row justify-center w-full my-2">
                    <a className="font-semibold text-sm bg-orange-500 px-2 py-1 rounded-md">
                        ABOUT
                    </a>
                </div>
            </div>
        </section>
    );
};

export default AboutPanel;