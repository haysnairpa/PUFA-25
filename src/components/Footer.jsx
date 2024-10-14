import Divider from "./Divider"

export default function Footer() {
    return (
        <footer className="container flex justify-center">
            <div className="w-[80%] bg-black text-white rounded-lg px-[2rem] md:px-[5rem] py-[2rem]">
                <div>
                    <div>
                    <h1 className="font-[600]">SUBSCRIBE TO OUR NEWSLETTER</h1>    
                    <p className="tracking-widest font-[200] text-[0.8rem]">The latest news, information, and updates all sent to your inbox directly.</p>
                    </div>
                    <Divider bgColor="bg-gray-500"/>
                    <div>
                        <h1 className="tracking-widest font-[600]">&copy; PUFA Computing • All rights reserved.</h1>
                        <h1 className="tracking-widest font-[200] text-[0.8rem]">Made by Team Technology from PUFA Computing Research and Technology (RnT).</h1>
                        <div className="flex">
                            <h1 className="tracking-widest font-[200] text-[0.8rem]">Website Version: </h1>
                            <a href="/"><p className="tracking-widest ml-1 font-[600] text-[0.8rem] transform-all duration-300 hover:text-blue-600">1.0.0</p></a>
                        </div>
                    </div>
                </div>
            </div>

        </footer>
    )
}