import Link from "next/link";

export default function Header(){
    return(
        <header className="bg-black flex h-20 w-full items-center justify-between text-3xl px-6 mb-6">
            <span className="text-slate-200 font-bold ">Next-Auth</span>
            <nav>
                <Link href="/" className="text-white">Home</Link>
                <Link href="/dashboard" className="text-white">Dashboard</Link>
            </nav>
        </header>
    )
}