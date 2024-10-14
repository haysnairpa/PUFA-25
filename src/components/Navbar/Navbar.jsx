import Image from "next/image"
import logo from "../../assets/pufa-computing-logo.png"

export default function Navbar() {

    const navItems = []

    return (
        <header className="justify-center flex items-center overflow-hidden">
            <div className="bg-black text-white md:rounded-2xl md:mt-[1rem] shadow-lg bottom-0 fixed md:top-0 md:bottom-auto md:left-auto md:right-auto">
                <nav className="px-[3rem] container py-[1rem]">
                    <ul className="flex md:gap-[3rem] gap-[2rem] items-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/events">Events</a></li>
                        <li className="relative flex-1 text-center ml-[1.2rem] mr-[1.2rem] md:ml-[1rem] md:mr[1rem]">
                            <div className="bg-white w-[5rem] h-[5rem] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg hover:scale-110 transform-all duration-300 flex justify-center items-center">
                                <Image src={logo} alt="PUFA Computing Logo" objectFit="cover" height={50} width={50} className=""/>
                            </div>
                        </li>
                        <li><a href="/news">News</a></li>
                        <li><a href="/">PUMA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}