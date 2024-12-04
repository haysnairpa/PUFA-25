import Image from 'next/image';

export default function LogoPhilosophy() {
  return (
    <section className="py-16 bg-black text-yellow-500">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">Logo Philosophy</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Letter A Section */}
          <div className="bg-black border border-yellow-500 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/images/forcasion-logo.png"
                alt="Forcasión Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Letter "A"</h3>
            <p className="text-gray-300">
              Our letter "A" represents our cabinet name "forcasion"
            </p>
          </div>

          {/* Bridge & Standard Section */}
          <div className="bg-black border border-yellow-500 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/images/forcasion-logo.png"
                alt="Forcasión Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Bridge & Standard</h3>
            <p className="text-gray-300">
              A bridge means PUFA Computing acts as a connector
            </p>
          </div>

          {/* Sun Section */}
          <div className="bg-black border border-yellow-500 rounded-lg p-6 flex flex-col items-center text-center">
            <div className="mb-6">
              <Image
                src="/images/forcasion-logo.png"
                alt="Forcasión Logo"
                width={200}
                height={200}
                className="mx-auto"
              />
            </div>
            <h3 className="text-2xl font-bold mb-4">Sun</h3>
            <p className="text-gray-300">
              The symbol sun represents a bright future
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
