import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkListProps {
    classStyle?: string,
    onLinkClick: () => void
}

const LinkList = ({ classStyle, onLinkClick }: LinkListProps) => {
    const path = usePathname();

    return (
        <ul className={classStyle}>
            <li><Link href={"/editions"} className={` ${path === "/editions" ? "pointer-events-none text-slate-400 " : ""} `} onClick={onLinkClick}>Editions</Link></li>
            <li><Link href={"/"} className={` ${path === "/" ? "pointer-events-none text-slate-400 " : ""} `} onClick={onLinkClick}>Link 2</Link></li>
            <li><Link href={"/"} className={` ${path === "/" ? "pointer-events-none text-slate-400 " : ""} `} onClick={onLinkClick}>Link 3</Link></li>
            <li><Link href={"/"} className={` ${path === "/" ? "pointer-events-none text-slate-400 " : ""} `} onClick={onLinkClick}>Link 4</Link></li>
        </ul>
    )
}

export default LinkList;
