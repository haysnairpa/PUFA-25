export default function VisionMission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Visi & Misi</h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Visi</h3>
            <p className="text-gray-600">
              Menjadi wadah pengembangan mahasiswa yang unggul dalam bidang teknologi informasi
              dan berkontribusi aktif dalam kemajuan teknologi di Indonesia.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Misi</h3>
            <ul className="text-gray-600 space-y-2 list-disc list-inside">
              <li>Mengembangkan potensi mahasiswa dalam bidang teknologi informasi</li>
              <li>Menciptakan lingkungan belajar yang kolaboratif dan inovatif</li>
              <li>Menghasilkan karya-karya teknologi yang bermanfaat bagi masyarakat</li>
              <li>Membangun jaringan kerjasama dengan berbagai pihak</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
