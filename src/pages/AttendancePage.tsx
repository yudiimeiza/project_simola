import { useState, useEffect } from 'react';
import { MapPin, LogIn, LogOut, Clock, Calendar, CheckCircle2, History } from 'lucide-react';
import { motion } from 'motion/react';
import { UserProfile } from '@/src/types';

export default function AttendancePage({ user }: { user: UserProfile }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-8 space-y-8 pb-32 max-w-2xl mx-auto">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-on-surface tracking-tight">Presensi Harian</h1>
        <p className="text-on-surface-variant">Pastikan lokasi Anda aktif saat melakukan pencatatan hadir.</p>
      </header>

      {/* Clock Widget */}
      <section className="bg-primary text-white p-8 rounded-2xl shadow-xl flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8" />
        <div className="relative z-10 text-center space-y-2">
          <p className="text-sm font-bold uppercase tracking-[0.3em] opacity-80">Waktu Sekarang</p>
          <h2 className="text-6xl font-black tracking-tighter">
            {currentTime.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
          </h2>
          <p className="text-sm font-bold mt-2 flex items-center justify-center gap-2">
            <Calendar size={16} /> 
            {currentTime.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* Action Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.button 
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white border-2 border-outline-variant hover:border-secondary transition-all p-8 rounded-2xl flex flex-col items-center gap-4 text-center group shadow-sm"
        >
          <div className="w-16 h-16 bg-secondary-container/20 rounded-full flex items-center justify-center text-secondary group-hover:scale-110 transition-transform">
            <LogIn size={32} strokeWidth={3} />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-secondary">Absen Masuk</h3>
            <p className="text-xs font-bold text-outline uppercase tracking-widest">Batas: 08:30 WIB</p>
          </div>
          <div className="flex items-center gap-1.5 text-secondary text-xs font-bold bg-secondary/5 px-3 py-1.5 rounded-full">
            <MapPin size={14} />
            <span>Ready to Scan</span>
          </div>
        </motion.button>

        <motion.button 
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.98 }}
          className="bg-white border-2 border-outline-variant hover:border-primary transition-all p-8 rounded-2xl flex flex-col items-center gap-4 text-center group shadow-sm"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
            <LogOut size={32} strokeWidth={3} />
          </div>
          <div className="space-y-1">
            <h3 className="text-2xl font-black text-primary">Absen Keluar</h3>
            <p className="text-xs font-bold text-outline uppercase tracking-widest">Batas: 18:00 WIB</p>
          </div>
          <div className="flex items-center gap-1.5 text-outline text-xs font-bold bg-slate-100 px-3 py-1.5 rounded-full">
            <Clock size={14} />
            <span>Not Available Yet</span>
          </div>
        </motion.button>
      </div>

      {/* Recent Logs */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-on-surface">Riwayat Presensi</h3>
          <button className="text-primary text-sm font-bold flex items-center gap-1">
            <History size={16} /> 
            Selengkapnya
          </button>
        </div>
        
        <div className="bg-white rounded-2xl border border-outline-variant divide-y divide-outline-variant/30 shadow-sm overflow-hidden">
          {[
            { day: 'Senin', time_in: '07:58', time_out: '17:05', status: 'ON TIME' },
            { day: 'Selasa', time_in: '08:02', time_out: '17:15', status: 'ON TIME' },
            { day: 'Rabu', time_in: '08:15', time_out: '17:00', status: 'ON TIME' },
          ].map((log, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-surface-container/20 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                  <CheckCircle2 size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface">{log.day}, 12 April 2024</p>
                  <div className="flex items-center gap-3 mt-0.5">
                    <span className="text-[10px] font-bold text-outline uppercase tracking-widest flex items-center gap-1">
                      <LogIn size={10} /> {log.time_in}
                    </span>
                    <span className="text-[10px] font-bold text-outline uppercase tracking-widest flex items-center gap-1">
                      <LogOut size={10} /> {log.time_out}
                    </span>
                  </div>
                </div>
              </div>
              <span className="bg-emerald-100 text-emerald-800 text-[10px] font-black px-2 py-0.5 rounded-full tracking-widest border border-emerald-200">
                {log.status}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
