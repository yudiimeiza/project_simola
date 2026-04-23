import { motion } from 'motion/react';
import { 
  Building2, 
  Calendar, 
  LogIn, 
  LogOut, 
  MapPin, 
  Timer, 
  Edit3, 
  CheckCircle2, 
  Verified,
  ChevronRight
} from 'lucide-react';
import { UserProfile } from '@/src/types';
import { cn } from '@/src/lib/utils';
import { useNavigate } from 'react-router-dom';

interface StudentDashboardProps {
  user: UserProfile;
}

export default function StudentDashboard({ user }: StudentDashboardProps) {
  const navigate = useNavigate();

  return (
    <div className="py-6 space-y-8 pb-32">
      {/* Profile Summary Card */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border border-outline-variant rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center relative overflow-hidden group shadow-sm"
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-[100px] -mr-8 -mt-8" />
        
        <div className="relative z-10 w-24 h-24 md:w-32 md:h-32 rounded-2xl overflow-hidden shrink-0 shadow-lg border-2 border-primary/10">
          <img 
            src={user.avatar_url || "https://lh3.googleusercontent.com/aida-public/AB6AXuDLJ6w1dD4JcosIDEIEPH5HjB6SXfQuUuGaK5mhsc3MMUsC6IO3298pScK-lcH3ssB36eArUoaSdHsHAoQw6Os71x43J0dj2vJdAG9vxsw_Du3Jjc76hSyT5ENz72n2IOvRJhZnu45gcIQI68HFwqOP6paJn2MMCMsxnKqiaSJmrWsYS1L85RVq6rU2UzJLu04LPryoLnBxBAzMPta2kOzNRMR5YIT-iKjrD8oU3n3wqCXLTIr02MElhhh_khsu5G0RfBKeolMWKhSW"} 
            alt="Student Avatar" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 flex flex-col gap-1 text-center md:text-left">
          <span className="text-secondary text-xs font-bold bg-secondary-container/20 px-3 py-1 rounded-full self-center md:self-start">
            Magang Aktif
          </span>
          <h2 className="text-4xl font-black text-primary tracking-tight">{user.full_name}</h2>
          <p className="text-on-surface-variant text-lg">Siswa SMK Tingkat Akhir • UI/UX Design</p>
          
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
            <div className="flex items-center gap-1.5 text-outline">
              <Building2 size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">TechFlow Systems Inc.</span>
            </div>
            <div className="flex items-center gap-1.5 text-outline">
              <Calendar size={14} />
              <span className="text-xs font-bold uppercase tracking-wider">Jan 2024 - Jun 2024</span>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Progress Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Attendance Big Card */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 bg-primary text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl"
        >
          <div>
            <h3 className="text-sm font-bold opacity-80 mb-1">Progres Saat Ini</h3>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-5xl font-extrabold tracking-tighter">92%</span>
              <span className="text-sm font-bold mb-2 opacity-90">Kehadiran</span>
            </div>
          </div>
          <div className="space-y-4">
            <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                className="bg-secondary-container h-full" 
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 p-4 rounded-xl">
                <span className="block text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Log Jurnal</span>
                <span className="text-2xl font-bold">48/50</span>
              </div>
              <div className="bg-white/10 p-4 rounded-xl">
                <span className="block text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">Sisa Minggu</span>
                <span className="text-2xl font-bold">4</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Action Controls */}
        <section className="lg:col-span-8 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-on-surface">Presensi Harian</h3>
            <span className="text-on-surface-variant text-sm font-medium">12 April 2024</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.button 
              whileTap={{ scale: 0.98 }}
              className="group bg-white border-2 border-outline-variant hover:border-secondary transition-all p-6 rounded-2xl flex flex-col items-center gap-4 text-center shadow-sm"
            >
              <div className="w-14 h-14 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
                <LogIn size={32} strokeWidth={3} />
              </div>
              <div>
                <span className="text-2xl font-bold block text-secondary">Masuk</span>
                <span className="text-sm font-bold text-outline uppercase tracking-wider">Jadwal: 08:00 WIB</span>
              </div>
              <div className="flex items-center gap-1.5 text-secondary text-sm font-bold">
                <MapPin size={16} />
                <span>Dalam Radius Lokasi</span>
              </div>
            </motion.button>

            <motion.button 
              disabled
              className="group bg-white border-2 border-outline-variant p-6 rounded-2xl flex flex-col items-center gap-4 text-center shadow-sm opacity-50 cursor-not-allowed"
            >
              <div className="w-14 h-14 bg-primary-container/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                <LogOut size={32} />
              </div>
              <div>
                <span className="text-2xl font-bold block text-primary">Keluar</span>
                <span className="text-sm font-bold text-outline uppercase tracking-wider">Estimasi: 17:00 WIB</span>
              </div>
              <div className="flex items-center gap-1.5 text-outline text-sm font-bold">
                <Timer size={16} />
                <span>Menunggu akhir shift</span>
              </div>
            </motion.button>
          </div>
        </section>
      </div>

      {/* Journal & Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <section className="lg:col-span-6 space-y-4">
           <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-on-surface">Jurnal Harian</h3>
            <button onClick={() => navigate('/journal')} className="text-primary text-sm font-bold hover:underline">Lihat Semua</button>
          </div>
          
          <div className="bg-white border border-outline-variant rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-sm hover:shadow-md transition-shadow">
            <div className="p-6 flex-1 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-outline uppercase tracking-widest">LOG KEMARIN</span>
                <span className="bg-emerald-100 text-emerald-800 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Tervalidasi</span>
              </div>
              <h4 className="text-lg font-bold text-on-surface leading-tight">Implementasi frontend widget dasbor utama.</h4>
              <p className="text-on-surface-variant text-sm line-clamp-2">Menyelesaikan tata letak responsif untuk modul kehadiran siswa dan mengintegrasikan pustaka Material Symbols untuk standarisasi ikon...</p>
              
              <div className="flex gap-3 items-center pt-4 border-t border-surface-container">
                <img 
                  src="https://api.dicebear.com/7.x/avataaars/svg?seed=Jane" 
                  alt="Supervisor" 
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
                <span className="text-outline text-xs font-medium italic">"Progres bagus pada sistem grid." - Pembimbing Jane</span>
              </div>
            </div>
            
            <button 
              onClick={() => navigate('/journal')}
              className="md:w-32 bg-primary flex flex-col items-center justify-center p-6 text-white gap-2 hover:bg-primary/95 transition-colors active:scale-95"
            >
              <Edit3 size={32} />
              <span className="text-sm font-bold text-center">Buat Log</span>
            </button>
          </div>
        </section>

        <section className="lg:col-span-6 space-y-4">
          <h3 className="text-xl font-bold text-on-surface">Timeline Aktivitas</h3>
          <div className="bg-white border border-outline-variant rounded-2xl divide-y divide-outline-variant/30 shadow-sm">
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center shrink-0">
                <CheckCircle2 size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">Presensi Masuk Berhasil</p>
                <p className="text-on-surface-variant text-xs font-medium">TechFlow Systems - 08:02 WIB</p>
              </div>
              <span className="text-outline text-[10px] font-bold uppercase">Hari Ini</span>
            </div>
            
            <div className="p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-primary/10 text-primary rounded-full flex items-center justify-center shrink-0">
                <Verified size={24} />
              </div>
              <div className="flex-1">
                <p className="text-sm font-bold">Jurnal Disetujui</p>
                <p className="text-on-surface-variant text-xs font-medium">Minggu 14 - Log Keterampilan Teknis</p>
              </div>
              <span className="text-outline text-[10px] font-bold uppercase">Kemarin</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
