import Panel from "../Panel";
import Comment from "./Comment";

const CommunityPanel = () => {
    const comments = [1, 2, 3, 4, 5];
    let i = 0;

    return (
        <Panel panelId="community-highlights-panel" backgroundImage="" backgroundColor="bg-orange-500">
            <div className=" mb-2 ">
                <h2 className="text-end font-lexend text-2xl ">Community Drops</h2>
                <hr />
            </div>
            <div className="relative">

                <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[95%] to-orange-500 to-[100%] opacity-90"></div>

                <div id="community-comments" className="overflow-x-scroll px-2 mt-2">
                    <ul className="flex flex-row gap-x-7 w-[312%] list-none">
                        {comments.map((comment) => {
                            let index = ++i
                            return (
                                <li key={index} >
                                    <Comment commentSuffix={index} content={`comment ${index}`}/>
                                </li>
                            )
                        })}

                        <a href="" className="self-center" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 -rotate-45 fill-purple-950   ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                            </svg>
                        </a>

                    </ul>
                </div>
            </div>
        </Panel>
    );
};

export default CommunityPanel;