

interface CommentProps {
    commentSuffix: string | number,
    content: string
}

const Comment = ({ commentSuffix, content }: CommentProps) => {
    return (
        <article id={`comment-index-${commentSuffix}`} className="h-32 w-56 bg-purple-950 rounded-sm">
            <div className="comment-header flex flex-row px-2 py-1">
                <img src="" />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                </svg>
                <h3 className="user-nickname inline-block align-super ">user</h3>
            </div>
            <div className=" px-3 py-1 text-balance ">
                <p>{content}</p>
            </div>
        </article>
    );
};
export default Comment;
