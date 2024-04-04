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
                    </ul>
                </div>
            </div>
        </Panel>
    );
};

export default CommunityPanel;