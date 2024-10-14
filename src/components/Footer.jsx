import Divider from "./Divider"

export default function Footer() {
    return (
        <footer className="container flex justify-center">
            <div className="w-[80%] bg-black text-white rounded-lg px-[2rem] py-[2rem]">
                <div>
                    <h1 className="font-[600] text-[1.2rem]">SUBSCRIBE TO OUR NEWSLETTER</h1>    
                    <p className="tracking-widest font-[200]">The latest news, information, and updates all sent to your inbox directly.</p>
                    <Divider bgColor="bg-gray-500"/>
                    <h1 className="tracking-widest font-[600]">&copy; PUFA Computing • All rights reserved.</h1>
                    <h1 className="tracking-widest font-[200]">Made by Team Technology from PUFA Computing Research and Technology.</h1>
                    <div className="flex">
                        <h1 className="tracking-widest font-[200]">Website Version: </h1>
                        <a href="/"><p className="tracking-widest ml-1 font-[600] transform-all duration-300 hover:text-blue-600">1.0.0</p></a>
                    </div>
                </div>
            </div>

        </footer>
    )
}