import { motion } from 'motion/react';
import { 
  Users, 
  CheckCircle2, 
  BarChart3, 
  AlertCircle, 
  ArrowRight, 
  FileText,
  UserCheck
} from 'lucide-react';
import { UserProfile } from '@/src/types';

export default function SupervisorDashboard({ user }: { user: UserProfile }) {
  const pendingJournals = [
    { 
      id: '1', 
      student: 'Budi Santoso', 
      title: 'Implementasi REST API Node.js', 
      date: 'Hari Ini',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Budi'
    },
    { 
      id: '2', 
      student: 'Siti Aminah', 
      title: 'Desain UI Dashboard Monitoring', 
      date: 'Kemarin',
      avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Siti'
    },
  ];

  const students = [
    { name: 'Budi Santoso', company: 'PT. Teknologi Maju', progress: 75, status: 'AKTIF' },
    { name: 'Siti Aminah', company: 'Studio Kreatif Digital', progress: 40, status: 'AKTIF' },
  ];

  return (
    <div className="py-8 space-y-8 pb-32">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-on-surface tracking-tight">Selamat Datang, Bapak Junaedi</h1>
        <p className="text-on-surface-variant italic">Pantau aktivitas siswa bimbingan Anda hari ini secara real-time.</p>
      </header>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3 text-primary">
            <Users size={20} />
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Siswa Bimbingan</span>
          </div>
          <div className="text-4xl font-black text-on-surface">12</div>
        </div>
        
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant flex flex-col justify-center">
          <div className="flex items-center gap-2 mb-3 text-error">
            <UserCheck size={20} />
            <span className="text-[10px] font-bold text-outline uppercase tracking-widest">Perlu Validasi</span>
          </div>
          <div className="text-4xl font-black text-on-surface">8</div>
        </div>

        <div className="col-span-2 lg:col-span-1 bg-primary p-6 rounded-2xl shadow-xl text-white">
          <div className="flex items-center gap-2 mb-3 text-white/70">
            <BarChart3 size={20} />
            <span className="text-[10px] font-bold uppercase tracking-widest">Rata-rata Kehadiran</span>
          </div>
          <div className="text-4xl font-black mb-4">95%</div>
          <div className="w-full bg-white/20 h-1.5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '95%' }}
              className="bg-white h-full" 
            />
          </div>
        </div>
      </section>

      {/* Danger Alert */}
      <motion.section 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center gap-4 p-5 bg-error-container text-on-error-container rounded-2xl border border-error/5 shadow-sm"
      >
        <AlertCircle className="text-error shrink-0" size={32} />
        <div className="flex-1">
          <p className="font-bold leading-tight">Siswa Belum Absen</p>
          <p className="text-xs font-medium opacity-80 mt-1">Andi Saputra & 2 siswa lainnya belum mengisi absensi masuk pagi ini.</p>
        </div>
        <button className="px-5 py-2.5 bg-error text-white rounded-xl text-xs font-bold shadow-lg shadow-error/20 hover:opacity-90 active:scale-95 transition-all">
          Cek
        </button>
      </motion.section>

      {/* Pending Tasks */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-on-surface">Tugas Menunggu</h2>
          <button className="text-primary text-sm font-bold flex items-center gap-1 group">
            Lihat Semua <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-outline-variant divide-y divide-outline-variant/30 overflow-hidden">
          {pendingJournals.map((journal) => (
            <div key={journal.id} className="p-4 flex items-center justify-between hover:bg-surface-container/30 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 overflow-hidden">
                  <img src={journal.avatar} alt={journal.student} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-on-surface">Jurnal: {journal.student}</p>
                  <p className="text-xs font-medium text-outline uppercase tracking-wider mt-1">{journal.title}</p>
                </div>
              </div>
              <button className="px-5 py-2.5 bg-primary text-white rounded-xl text-xs font-bold hover:bg-primary-container transition-all shadow-md shadow-primary/20">
                Validasi
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Student Progress */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-on-surface">Progres Siswa Bimbingan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {students.map((student, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant space-y-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-surface-container">
                  <img 
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} 
                    alt={student.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-on-surface">{student.name}</h3>
                  <p className="text-xs font-bold text-outline uppercase tracking-widest">{student.company}</p>
                </div>
                <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-black tracking-widest">
                  {student.status}
                </span>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold">
                  <span className="text-outline uppercase tracking-wider">Progres Jurnal</span>
                  <span className="text-primary">{student.progress}%</span>
                </div>
                <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${student.progress}%` }}
                    className="bg-secondary h-full rounded-full" 
                  />
                </div>
                
                <div className="flex justify-between items-center pt-3 mt-4 border-t border-surface-container">
                  <div className="flex -space-x-3">
                    {[1, 2, 3].map((_, idx) => (
                      <div key={idx} className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-black">
                        {idx === 2 ? '+5' : 'JW'}
                      </div>
                    ))}
                  </div>
                  <button className="text-primary text-sm font-bold hover:underline">Lihat Jurnal</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
