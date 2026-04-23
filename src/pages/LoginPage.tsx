import { useState } from 'react';
import { Mail, Lock, GraduationCap, Verified, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';
import { UserProfile } from '@/src/types';

interface LoginPageProps {
  onLogin: (user: UserProfile) => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For demo: determine role by email or just pick student
    let role: 'student' | 'supervisor' | 'admin' = 'student';
    if (email.includes('pembimbing')) role = 'supervisor';
    if (email.includes('admin')) role = 'admin';

    onLogin({
      id: Math.random().toString(36).substr(2, 9),
      email,
      full_name: email.split('@')[0].toUpperCase(),
      role,
      created_at: new Date().toISOString(),
      avatar_url: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
    });
  };

  return (
    <div className="bg-surface min-h-screen flex items-center justify-center p-4 md:p-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none opacity-50">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[0%] right-[0%] w-[30%] h-[30%] bg-secondary/20 rounded-full blur-[100px]"></div>
      </div>

      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px] flex flex-col gap-8"
      >
        <header className="flex flex-col items-center text-center gap-2">
          <div className="w-16 h-16 bg-primary rounded-xl flex items-center justify-center shadow-lg mb-2">
            <GraduationCap className="text-white" size={40} />
          </div>
          <h1 className="text-4xl font-black text-on-surface tracking-tight">SiMola</h1>
          <p className="text-on-surface-variant font-medium">Sistem Informasi Manajemen Olah Laporan</p>
        </header>

        <section className="bg-white border border-outline-variant p-6 rounded-2xl shadow-sm">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-on-surface" htmlFor="email">Alamat Email</label>
              <div className="relative flex items-center">
                <Mail className="absolute left-4 text-outline" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-on-surface outline-none placeholder:text-outline-variant"
                  id="email"
                  type="email"
                  placeholder="siswa@sekolah.sch.id"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <div className="flex justify-between items-center">
                <label className="text-sm font-semibold text-on-surface" htmlFor="password">Kata Sandi</label>
                <button type="button" className="text-xs font-semibold text-primary hover:underline">Lupa Password?</button>
              </div>
              <div className="relative flex items-center">
                <Lock className="absolute left-4 text-outline" size={20} />
                <input 
                  className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all text-on-surface outline-none placeholder:text-outline-variant"
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </div>

            <button 
              type="submit"
              className="mt-2 w-full py-4 bg-primary text-white font-bold rounded-xl hover:opacity-90 transition-all active:scale-[0.98] shadow-md shadow-primary/20"
            >
              Masuk
            </button>
          </form>
        </section>

        <footer className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 w-full">
            <div className="h-px bg-outline-variant flex-grow"></div>
            <span className="text-xs font-medium text-outline px-2">Siswa Baru?</span>
            <div className="h-px bg-outline-variant flex-grow"></div>
          </div>
          
          <button className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary/5 transition-all flex items-center justify-center gap-2 group">
            <Verified size={20} />
            Aktivasi Akun Siswa
            <ChevronRight className="transition-transform group-hover:translate-x-1" size={20} />
          </button>
          
          <p className="text-xs text-on-surface-variant font-medium">
            Butuh bantuan? <button className="text-primary font-bold hover:underline">Hubungi Administrator</button>
          </p>
        </footer>
      </motion.main>
    </div>
  );
}
