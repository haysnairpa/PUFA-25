import Navbar from "@/components/Navbar/Navbar"

export default function Home() {
  return (
    <>
      <Navbar/>

      <section className="h-screen flex justify-center items-center shadow-xl">
        <h1 className="text-[10rem] tracking-widest font-[700]">PUFA 2025.</h1>
      </section>

      <section className="h-screen bg-zinc-200 flex flex-col justify-center items-center">
        <h1 className="text-[5rem]">work in progress</h1>
        <p>stay tuned for updates.</p>
      </section>
    </>
  )
}