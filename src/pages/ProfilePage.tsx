import { useState } from 'react';
import { motion } from 'motion/react';
import { IdCard, Mail, Lock, Camera, ArrowLeft, LogOut } from 'lucide-react';
import { UserProfile } from '@/src/types';
import { useNavigate } from 'react-router-dom';

interface ProfilePageProps {
  user: UserProfile;
  onUpdate: (user: UserProfile) => void;
}

export default function ProfilePage({ user, onUpdate }: ProfilePageProps) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    full_name: user.full_name,
    nisn_nip: user.nisn_nip || '1209384756',
    institution: user.institution || 'SMK Negeri 1 Jakarta',
    email: user.email,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    onUpdate({ ...user, ...formData });
    alert('Profil diupdate!');
  };

  return (
    <div className="py-8 pb-32 max-w-lg mx-auto space-y-8">
      <header className="flex items-center gap-4">
        <h1 className="text-2xl font-bold text-on-surface">Edit Profil</h1>
      </header>

      {/* Profile Photo Section */}
      <div className="flex flex-col items-center">
        <div className="relative">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-32 h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-surface-container"
          >
            <img 
              src={user.avatar_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=Aris"} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </motion.div>
          <label className="absolute bottom-0 right-0 bg-primary text-white p-2.5 rounded-full shadow-lg border-2 border-white flex items-center justify-center cursor-pointer hover:scale-110 active:scale-95 transition-all">
            <Camera size={20} />
            <input type="file" className="hidden" />
          </label>
        </div>
        <p className="mt-4 text-[10px] font-bold text-outline uppercase tracking-[0.2em]">Foto Profil</p>
      </div>

      <div className="space-y-6">
        {/* Data Diri Card */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant space-y-6">
          <div className="flex items-center gap-3">
            <IdCard className="text-primary" size={24} />
            <h2 className="text-lg font-bold text-on-surface">Data Diri</h2>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Nama Lengkap</label>
              <input 
                className="w-full h-12 px-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Masukkan nama sesuai identitas"
                type="text" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider">NISN / NIP</label>
              <input 
                className="w-full h-12 px-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                name="nisn_nip"
                value={formData.nisn_nip}
                onChange={handleChange}
                placeholder="Masukkan NISN atau NIP"
                type="text" 
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Asal Sekolah / Institusi</label>
              <input 
                className="w-full h-12 px-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
                name="institution"
                value={formData.institution}
                onChange={handleChange}
                placeholder="Masukkan asal sekolah"
                type="text" 
              />
            </div>
          </div>
        </section>

        {/* Kontak Card */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant space-y-6">
          <div className="flex items-center gap-3">
            <Mail className="text-primary" size={24} />
            <h2 className="text-lg font-bold text-on-surface">Kontak</h2>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-bold text-on-surface-variant ml-1 uppercase tracking-wider">Email</label>
            <input 
              className="w-full h-12 px-4 rounded-xl border border-outline-variant focus:border-primary focus:ring-2 focus:ring-primary/10 outline-none transition-all font-medium"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nama@email.com"
              type="email" 
            />
          </div>
        </section>

        {/* Keamanan Card */}
        <section className="bg-white rounded-2xl p-6 shadow-sm border border-outline-variant flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Lock className="text-primary" size={24} />
            <h2 className="text-lg font-bold text-on-surface">Keamanan</h2>
          </div>
          <button className="px-4 py-2 rounded-xl border-2 border-primary text-primary font-bold text-xs hover:bg-primary/5 transition-all active:scale-95">
            Ubah Password
          </button>
        </section>

        {/* Action Buttons */}
        <div className="pt-4 space-y-4">
          <motion.button 
            whileTap={{ scale: 0.98 }}
            onClick={handleSave}
            className="w-full h-14 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:bg-primary-container transition-all"
          >
            Simpan Perubahan
          </motion.button>
          
          <button 
            onClick={() => navigate('/login')}
            className="w-full h-14 bg-error/5 text-error font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-error/10 transition-all"
          >
            <LogOut size={20} />
            Keluar
          </button>
        </div>
      </div>
    </div>
  );
}
