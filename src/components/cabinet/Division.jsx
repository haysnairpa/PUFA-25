import Image from 'next/image';

export default function Division({ divisions }) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Divisi Kami</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 relative mr-4">
                  <Image
                    src={division.icon}
                    alt={division.name}
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold">{division.name}</h3>
              </div>
              <p className="text-gray-600">{division.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
