import { motion } from 'motion/react';
import { 
  Users, 
  Building2, 
  UserSquare, 
  TrendingUp, 
  PlusCircle, 
  Share2, 
  History,
  PersonStanding,
  CheckCircle2,
  FileUp,
  AlertTriangle
} from 'lucide-react';
import { UserProfile } from '@/src/types';

export default function AdminDashboard({ user }: { user: UserProfile }) {
  const stats = [
    { label: 'Total Siswa', value: '450', trend: '+12%', icon: Users, color: 'text-primary', bg: 'bg-primary-fixed' },
    { label: 'Sekolah Mitra', value: '12', trend: 'Aktif', icon: Building2, color: 'text-secondary', bg: 'bg-surface-container' },
    { label: 'Pembimbing', value: '24', trend: 'Aktif', icon: UserSquare, color: 'text-secondary', bg: 'bg-emerald-100' },
  ];

  const notifications = [
    { icon: Users, title: 'Siswa Baru Terdaftar', desc: 'Andi Pratama dari SMKN 1 Jakarta telah ditambahkan.', time: '2 menit' },
    { icon: CheckCircle2, title: 'Mitra Diverifikasi', desc: 'SMK Informatika Global telah divalidasi.', time: '1 jam' },
    { icon: FileUp, title: 'Laporan Global Siap', desc: 'Laporan bulanan periode Oktober sudah diunduh.', time: '3 jam' },
  ];

  return (
    <div className="py-8 space-y-8 pb-32">
      <header className="space-y-1">
        <h1 className="text-4xl font-black text-on-surface tracking-tight">Ringkasan Dashboard</h1>
        <p className="text-on-surface-variant font-medium">Pantau progres magang siswa dan koordinasi sekolah mitra.</p>
      </header>

      {/* Stats Bento Grid */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -5 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-outline-variant flex items-center justify-between"
          >
            <div>
              <p className="text-[10px] font-bold text-outline uppercase tracking-wider mb-1">{stat.label}</p>
              <h3 className={`text-4xl font-black ${stat.color}`}>{stat.value}</h3>
              <p className={`text-[10px] font-bold flex items-center gap-1 mt-1 ${i === 0 ? 'text-emerald-600' : 'text-outline'}`}>
                {i === 0 && <TrendingUp size={12} />} {stat.trend}
              </p>
            </div>
            <div className={`w-14 h-14 ${stat.bg} ${stat.color} rounded-full flex items-center justify-center`}>
              <stat.icon size={28} />
            </div>
          </motion.div>
        ))}

        {/* Quick Actions Action Block */}
        <div className="bg-primary p-6 rounded-2xl shadow-xl text-white flex flex-col justify-between">
          <p className="text-sm font-bold opacity-80">Aksi Cepat</p>
          <div className="mt-4 flex flex-col gap-2">
            <button className="bg-white text-primary text-xs font-black py-3 px-4 rounded-xl flex items-center justify-between hover:scale-[1.02] active:scale-95 transition-all">
              Tambah Siswa <PlusCircle size={18} />
            </button>
            <button className="bg-white/10 text-white text-xs font-black py-3 px-4 rounded-xl flex items-center justify-between border border-white/20 hover:bg-white/20 transition-all">
              Export Laporan <Share2 size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Charts & Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
          <div className="p-5 border-b border-surface-container flex justify-between items-center">
            <h3 className="text-lg font-bold text-on-surface">Grafik Kehadiran Mingguan</h3>
            <div className="flex gap-4">
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-primary">
                <div className="w-2.5 h-2.5 rounded-full bg-primary" /> Hadir
              </span>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-error">
                <div className="w-2.5 h-2.5 rounded-full bg-error" /> Absen
              </span>
            </div>
          </div>
          <div className="p-8 h-72 flex items-end justify-between gap-6 overflow-hidden">
             {[85, 92, 78, 88, 95].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-3 group">
                  <div className="w-full bg-surface-container rounded-t-xl relative h-full flex items-end overflow-hidden">
                    <motion.div 
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ delay: i * 0.1 }}
                      className="w-full bg-primary-container rounded-t-xl shadow-inner group-hover:brightness-110 transition-all"
                    />
                  </div>
                  <span className="text-[10px] font-black text-outline uppercase tracking-widest">
                    {['Sen', 'Sel', 'Rab', 'Kam', 'Jum'][i]}
                  </span>
                </div>
             ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-outline-variant p-6 space-y-6">
          <h3 className="text-xl font-bold text-on-surface">Manajemen Cepat</h3>
          <div className="space-y-3">
            {[
              { label: 'Kelola Sekolah', sub: 'Update data 12 mitra', icon: Building2, color: 'text-secondary', bg: 'bg-secondary/10' },
              { label: 'Validasi Laporan', sub: '45 Laporan masuk', icon: FileUp, color: 'text-primary', bg: 'bg-primary/10' },
              { label: 'Alert Kehadiran', sub: '3 Siswa tidak absen', icon: AlertTriangle, color: 'text-error', bg: 'bg-error/10' },
            ].map((act, i) => (
              <button 
                key={i} 
                className="w-full flex items-center gap-4 p-4 rounded-xl border border-outline-variant/30 hover:border-primary hover:bg-surface-container transition-all text-left group"
              >
                <div className={`w-12 h-12 ${act.bg} ${act.color} rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform`}>
                  <act.icon size={24} />
                </div>
                <div>
                  <p className="font-bold text-on-surface">{act.label}</p>
                  <p className="text-[10px] text-outline font-bold uppercase tracking-widest mt-0.5">{act.sub}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notifications Feed */}
      <section className="bg-white rounded-2xl shadow-sm border border-outline-variant overflow-hidden">
        <div className="p-5 border-b border-surface-container bg-surface-container/30">
          <h3 className="text-lg font-bold text-on-surface flex items-center gap-2">
            <History className="text-primary" size={20} /> Notifikasi Sistem
          </h3>
        </div>
        <div className="divide-y divide-outline-variant/20">
          {notifications.map((n, i) => (
            <div key={i} className="p-5 flex items-start gap-4 hover:bg-surface-container/20 transition-colors">
              <div className="w-10 h-10 rounded-full bg-primary/5 flex-shrink-0 flex items-center justify-center text-primary">
                <n.icon size={20} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center mb-1">
                  <p className="text-sm font-bold text-on-surface">{n.title}</p>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">{n.time} lalu</span>
                </div>
                <p className="text-xs font-medium text-on-surface-variant leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 text-center border-t border-outline-variant/20">
          <button className="text-primary text-sm font-bold hover:underline">Lihat Semua Aktivitas</button>
        </div>
      </section>
    </div>
  );
}
