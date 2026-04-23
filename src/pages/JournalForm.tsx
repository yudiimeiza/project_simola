import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar as CalendarIcon, Clock, Send, Camera, X } from 'lucide-react';
import { UserProfile } from '@/src/types';

interface JournalFormProps {
  user: UserProfile;
}

export default function JournalForm({ user }: JournalFormProps) {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [hours, setHours] = useState('8 Jam');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState<string | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImage(event.target?.result as string);
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="py-8 max-w-2xl mx-auto space-y-8 pb-32">
      <header className="space-y-2">
        <h1 className="text-4xl font-black text-on-surface tracking-tight">Jurnal Harian</h1>
        <p className="text-on-surface-variant">Catat aktivitas magang dan perkembangan Anda hari ini.</p>
      </header>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="date">Tanggal Log</label>
            <div className="relative">
              <input 
                className="w-full pl-4 pr-12 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-medium text-on-surface"
                id="date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
              <CalendarIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none" size={20} />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="hours">Jam Kerja</label>
            <div className="relative">
              <select 
                className="w-full pl-4 pr-12 py-3 bg-white border border-outline-variant rounded-xl appearance-none focus:ring-2 focus:ring-primary focus:border-primary transition-all font-medium text-on-surface"
                id="hours"
                value={hours}
                onChange={(e) => setHours(e.target.value)}
              >
                <option>4 Jam</option>
                <option>6 Jam</option>
                <option>8 Jam</option>
                <option>9 Jam</option>
                <option>10+ Jam</option>
              </select>
              <Clock className="absolute right-4 top-1/2 -translate-y-1/2 text-outline pointer-events-none" size={20} />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface-variant ml-1" htmlFor="activity">Deskripsi Kegiatan</label>
          <textarea 
            className="w-full px-4 py-3 bg-white border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary transition-all font-medium text-on-surface resize-none"
            id="activity"
            rows={6}
            placeholder="Jelaskan tugas yang Anda kerjakan hari ini, kendala yang dihadapi, dan pelajaran yang didapat..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-bold text-on-surface-variant ml-1">Bukti Foto</label>
          <div className="group relative flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-outline-variant rounded-xl bg-white hover:bg-surface-container hover:border-primary transition-all cursor-pointer overflow-hidden">
            {image ? (
              <>
                <img src={image} alt="Preview" className="w-full h-full object-cover" />
                <button 
                  onClick={() => setImage(null)}
                  className="absolute top-2 right-2 p-1.5 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                >
                  <X size={16} />
                </button>
              </>
            ) : (
              <>
                <input 
                  type="file" 
                  accept="image/*" 
                  className="absolute inset-0 opacity-0 cursor-pointer z-10" 
                  onChange={handleImageChange}
                />
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-2">
                    <Camera className="text-primary" size={24} />
                  </div>
                  <span className="text-sm font-bold text-on-surface">Unggah bukti foto</span>
                  <span className="text-[10px] font-bold text-outline uppercase tracking-widest">PNG, JPG atau PDF hingga 10MB</span>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="pt-4">
          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className="w-full h-14 bg-primary text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-primary-container transition-all flex items-center justify-center gap-2"
            type="submit"
          >
            Simpan Jurnal
            <Send size={20} />
          </motion.button>
        </div>
      </form>
    </div>
  );
}
