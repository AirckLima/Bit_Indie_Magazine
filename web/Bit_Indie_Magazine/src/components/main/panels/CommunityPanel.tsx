
const CommunityPanel = () => {
    return (<section id="community-highlights-panel" className=" mx-1 px-2 py-2 bg-orange-500 text-slate-100 border-2 border-slate-300 rounded-md drop-shadow-lg">
        <div className=" mb-2 ">
            <h2 className="text-end font-lexend text-2xl ">Community Drops</h2>
            <hr />
        </div>
        <div className="relative">

            <div className="absolute pointer-events-none right-0 top-0 left-0 bottom-0  bg-gradient-to-r from-transparent via-transparent via-[95%] to-orange-500 to-[100%] opacity-90"></div>

            <div id="community-comments" className="overflow-x-scroll px-2 mt-2">
                <div className="flex flex-row gap-x-7 w-[312%]">
                    <article id="comment-index-1" className="h-32 w-56 bg-purple-950 rounded-sm">
                        <div className="comment-header flex flex-row px-2 py-1">
                            <img src="" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <h3 className="user-nickname inline-block align-super ">user</h3>
                        </div>
                        <div className=" px-3 py-1 text-balance ">
                            <p>comment 1</p>
                        </div>
                    </article>

                    <article id="comment-index-2" className="h-32 w-56 bg-purple-950 rounded-sm">
                        <div className="comment-header flex flex-row  px-2 py-1">
                            <img src="" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <h3 className="user-nickname inline-block align-super">user</h3>
                        </div>
                        <div className=" px-3 py-1 text-balance ">
                            <p>comment 2</p>
                        </div>
                    </article>

                    <article id="comment-index-3" className="h-32 w-56 bg-purple-950 rounded-sm">
                        <div className="comment-header flex flex-row  px-2 py-1">
                            <img src="" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <h3 className="user-nickname inline-block align-super ">user</h3>
                        </div>
                        <div className=" px-3 py-1 text-balance ">
                            <p>comment 3</p>
                        </div>
                    </article>

                    <article id="comment-index-4" className="h-32 w-56 bg-purple-950 rounded-sm">
                        <div className="comment-header flex flex-row  px-2 py-1">
                            <img src="" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <h3 className="user-nickname inline-block align-super ">user</h3>
                        </div>
                        <div className=" px-3 py-1 text-balance ">
                            <p>comment 4</p>
                        </div>
                    </article>

                    <a href="" className="self-center" >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-6 h-6 -rotate-45 fill-purple-950   ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </a>

                </div>
            </div>
        </div>
    </section>);
};

export default CommunityPanel;