import { motion } from 'motion/react';
import { Download, Award, Filter, ChevronRight } from 'lucide-react';
import { UserProfile } from '@/src/types';

export default function ReportRecap({ user }: { user: UserProfile }) {
  const journals = [
    { 
      id: '1', 
      title: 'Minggu 4: Implementasi API', 
      date: 'Senin, 14 Okt 2023', 
      status: 'validated',
      description: 'Menyelesaikan integrasi RESTful API untuk modul otentikasi dan pengujian beban data...'
    },
    { 
      id: '2', 
      title: 'Minggu 3: Desain Database', 
      date: 'Senin, 07 Okt 2023', 
      status: 'pending',
      description: 'Melakukan normalisasi database dan perancangan skema relasional menggunakan MySQL...'
    },
    { 
      id: '3', 
      title: 'Minggu 2: Analisis Kebutuhan', 
      date: 'Senin, 30 Sep 2023', 
      status: 'validated',
      description: 'Wawancara dengan stakeholder terkait kebutuhan sistem monitoring lapangan...'
    },
  ];

  return (
    <div className="py-8 space-y-8 pb-32 max-w-2xl mx-auto">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-on-surface tracking-tight">Rekap Laporan</h1>
        <p className="text-on-surface-variant italic">Pantau kemajuan jurnal harian Anda di sini.</p>
      </header>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Total</span>
          <span className="text-4xl font-black text-primary">24</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Disetujui</span>
          <span className="text-4xl font-black text-secondary">22</span>
        </div>
        <div className="bg-white p-4 rounded-2xl shadow-sm border border-outline-variant flex flex-col items-center justify-center text-center">
          <span className="text-[10px] font-bold text-outline uppercase tracking-widest mb-1">Menunggu</span>
          <span className="text-4xl font-black text-amber-500">2</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col gap-4">
        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-primary text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-lg shadow-primary/20"
        >
          <Download size={20} />
          Export Laporan PDF
        </motion.button>
        <motion.button 
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-white border-2 border-primary text-primary rounded-2xl font-bold flex items-center justify-center gap-2"
        >
          <Award size={20} />
          Export Sertifikat
        </motion.button>
      </div>

      {/* History List */}
      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold text-on-surface">Riwayat Jurnal</h3>
          <button className="text-primary text-sm font-bold flex items-center gap-1 group">
             <Filter size={16} />
             Filter
          </button>
        </div>

        <div className="space-y-4">
          {journals.map((journal) => (
            <motion.div 
              key={journal.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              className={`bg-white p-5 rounded-2xl border-l-[6px] shadow-sm hover:shadow-md transition-shadow ${
                journal.status === 'validated' ? 'border-secondary' : 'border-amber-400'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="text-lg font-bold text-on-surface leading-tight">{journal.title}</h4>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest mt-1">{journal.date}</p>
                </div>
                <span className={`px-2 py-0.5 text-[10px] font-black rounded-full uppercase tracking-widest ${
                  journal.status === 'validated' 
                    ? 'bg-emerald-100 text-emerald-800' 
                    : 'bg-amber-100 text-amber-800'
                }`}>
                  {journal.status === 'validated' ? 'Disetujui' : 'Menunggu'}
                </span>
              </div>
              <p className="text-on-surface-variant text-sm line-clamp-2 leading-relaxed">{journal.description}</p>
              <div className="mt-4 flex justify-end">
                <button className="text-primary text-sm font-bold flex items-center gap-1">
                  Lihat Detail <ChevronRight size={14} />
                </button>
              </div>
            </motion.div>
          ))}

          {/* Tips Card */}
          <div className="relative overflow-hidden rounded-2xl h-44 flex items-end p-6 group">
            <img 
              src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800" 
              alt="Decoration" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/40 to-transparent" />
            <div className="relative z-10 text-white">
              <p className="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">Tip SiMola</p>
              <h4 className="text-xl font-bold leading-tight">Pastikan deskripsi jurnal detail agar cepat disetujui.</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
