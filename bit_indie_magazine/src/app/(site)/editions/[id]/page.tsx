import Prisma from "@/lib/prisma";
import Link from "next/link";
import "@/styles/App.module.css";
import { notFound } from "next/navigation";

export default async function EditionDetails({ params }: { params: { id: string; }; }) {


    let _edition;

    if (!isNaN(Number(params.id))) {
        _edition = await Prisma.magazine.findUnique({
            where: { releaseNumber: Number(params.id) },
            include: { team: { include: { members: true } } }
        });

        if (!_edition?.id) notFound();
    }

    const edition = _edition;

    const heros = await Prisma.member.findMany({ where: { id: { in: edition?.team?.members.map((m) => m.memberId) } } });

    let i = 0;

    return (
        <div className="my-3 px-1">

            <div className="flex flex-col bg-indigo-950 pb-4 mb-3 rounded-md">
                <div className="bg-orange-400 py-2 rounded-t-md">
                    <h2 className="relative left-7 inline-block font-lexend text-xl text-slate-100">Edition { edition?.releaseNumber }</h2>
                </div>

                <div className="grid grid-cols-1 justify-items-center py-5 space-y-4">
                    <div className="bg-red-500 h-80 w-52 rounded-md ">
                    </div>

                    <Link href={ `/reader/${params.id}` } className="font-semibold text-sm bg-orange-400 hover:bg-orange-300 active:bg-orange-700 px-3 py-2 rounded-md">READ</Link>

                </div>

                <div className="w-3/4 self-center">
                    <p className=" text-center text-balance font-normal text-md text-slate-100">
                        A detailed description about this month release, touching every section of the magazine.
                    </p>
                </div>
            </div>

            <div className="flex flex-col bg-indigo-950 mb-3 rounded-md">
                <div className="bg-orange-400 py-2 rounded-t-md">
                    <h2 className="relative left-7 inline-block font-lexend text-xl text-slate-100">Heros of this magazine</h2>
                </div>

                <div className="flex flex-row justify-center gap-7 list-none py-3">
                    { heros?.map((hero: any) => {
                        let index = ++i;
                        return (
                            <li key={ index } >
                                <div className="relative flex flex-col items-center group">
                                    <span className="absolute -top-5 text-white bg-red-500 rounded hidden group-hover:block">{ hero.name }</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 1.5 } stroke="currentColor" className="w-12 h-12 stroke-slate-300 ">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    </svg>
                                </div>
                            </li>
                        );
                    }) }
                </div>
            </div>

        </div>
    );
}
