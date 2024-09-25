export default function Navbar() {
    const links = [
        {
            title: "home",
            href: "#home"
        },
        {
            title: "about",
            href: "#about"
        },
        {   
            title: "contact",
            href: "#contact"
        },
    ]
    return (
        <header className="flex justify-center mt-2">
                <nav className="flex gap-[2rem] absolute py-[1.2rem] px-[2rem] bg-black shadow-xl rounded-xl transition-all duration-300 hover:scale-105">
                    {links.map((link) => 
                        <a key={link.title} href={link.href} className="text-white">
                            {link.title}
                        </a>
                    )}
                </nav>
        </header>
    )
}