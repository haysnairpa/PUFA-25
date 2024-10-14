import Image from "next/image"
import logo from "../../assets/pufa-computing-logo.png"

export default function Navbar() {

    const navItems = []

    return (
        <header className="justify-center flex">
            <div className="bg-black text-white rounded-full mt-[1rem] shadow-lg">
                <nav className="px-[3rem] py-[1rem]">
                    <ul className="flex gap-[3rem] items-center">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Events</a></li>
                        <li className="relative flex-1 text-center ml-[1rem] mr-[1rem]">
                            <div className="bg-white w-[5rem] h-[5rem] rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 shadow-lg hover:scale-110 transform-all duration-300 flex justify-center items-center">
                                <Image src={logo} alt="PUFA Computing Logo" objectFit="cover" height={45} width={45} className=""/>
                            </div>
                        </li>
                        <li><a href="/">News</a></li>
                        <li><a href="/">PUMA</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}