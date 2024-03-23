
interface PanelProps {
    panelId: string,
    backgroundImage: string,
    backgroundColor: string,
    children: JSX.Element[]
}

const Panel = ({ panelId, backgroundImage, backgroundColor, children }: PanelProps) => {
    return (
        <section id={panelId} className={`${backgroundColor}  mx-1 px-2 py-2  text-slate-100 border-2 border-slate-300 rounded-md  drop-shadow-lg `} style={{ backgroundImage: "" }}>
            {children}
        </section>
    )
};
export default Panel;
