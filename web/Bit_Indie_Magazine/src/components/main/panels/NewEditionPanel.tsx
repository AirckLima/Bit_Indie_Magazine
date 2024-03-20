
const NewEditionPanel = () => {
    return (
        <section id="latest-edition-panel" className="relative flex flex-col gap-y-4 px-3 py-3 mb-5 text-center bg-red-500  drop-shadow-lg " style={{ backgroundImage: "" }}>
            <h2 id="latest-edition-title" className=" font-lexend font-semibold text-2xl">TITLE</h2>
            <div className="h-48 w-32 mx-auto bg-orange-400 rounded-sm ">
                <img id="latest-edition-cover" src="" />
            </div>
            <p id="latest-edition-description" className="w-[75%] mx-auto font-lexend font-extralight text-xs text-balance">Some beautiful description about this edition...</p>
        </section>
    )
}

export default NewEditionPanel;