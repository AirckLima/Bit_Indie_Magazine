import Link from "next/link";

const editionIdNotFound = () => {
    return (
        <div className=" flex flex-col h-[80vh] place-content-center">
            <h2 className="relative -top-24 self-center text-white font-lexend text-xl">This edition was not found!</h2>

            <Link href={ "/editions" } className="absolute w-1/2 top-[45%] right-1/4 left-1/4 font-semibold text-sm text-center bg-orange-400 hover:bg-orange-300 active:bg-orange-700 px-3 py-2 rounded-md">Back to editions list</Link>
        </div>
    );
};

export default editionIdNotFound;