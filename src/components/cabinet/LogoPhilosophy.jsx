import Image from 'next/image';

export default function LogoPhilosophy() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Filosofi Logo</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2">
            <Image
              src="/images/logo.png"
              alt="Logo PUFA"
              width={400}
              height={400}
              className="mx-auto"
            />
          </div>
          
          <div className="md:w-1/2">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Bentuk</h3>
                <p className="text-gray-600">
                  Desain logo menggabungkan elemen modern yang mencerminkan teknologi
                  dengan sentuhan klasik yang melambangkan kebijaksanaan.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Warna</h3>
                <p className="text-gray-600">
                  Penggunaan warna mencerminkan semangat, profesionalisme,
                  dan inovasi yang menjadi nilai-nilai utama organisasi.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">Makna</h3>
                <p className="text-gray-600">
                  Setiap elemen dalam logo memiliki makna yang mendalam,
                  mewakili visi, misi, dan nilai-nilai yang kami junjung tinggi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
