import { useState } from 'react';
import { 
  Users, 
  Search, 
  Filter, 
  Edit, 
  Trash2, 
  UserSquare, 
  Plus,
  MoreVertical,
  Building2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/src/lib/utils';

export default function ManageData() {
  const [activeTab, setActiveTab] = useState('all');

  const data = [
    { 
      id: '1', 
      name: 'Budi Setiawan', 
      type: 'student', 
      sub: 'NIS: 20210042', 
      detail: 'PT. Teknologi Nusantara', 
      status: 'AKTIF' 
    },
    { 
      id: '2', 
      name: 'Drs. Ahmad Junaedi', 
      type: 'supervisor', 
      sub: 'NIP: 19850312', 
      detail: 'Membimbing 12 Siswa', 
      status: 'AKTIF' 
    },
    { 
      id: '3', 
      name: 'Siti Aminah', 
      type: 'student', 
      sub: 'NIS: 20210088', 
      detail: 'Bank Central Asia, Tbk.', 
      status: 'NONAKTIF' 
    },
  ];

  const filteredData = activeTab === 'all' 
    ? data 
    : data.filter(d => d.type === activeTab);

  return (
    <div className="py-8 space-y-8 pb-32 max-w-2xl mx-auto">
      <header className="space-y-1">
        <h1 className="text-4xl font-black text-on-surface tracking-tight">Kelola Data</h1>
        <p className="text-on-surface-variant font-medium">Kelola informasi siswa dan guru pembimbing lapangan.</p>
      </header>

      {/* Search and Filters */}
      <div className="space-y-6">
        <div className="relative group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline group-focus-within:text-primary transition-colors" size={20} />
          <input 
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-outline-variant bg-white focus:border-primary focus:ring-4 focus:ring-primary/5 outline-none transition-all shadow-sm"
            placeholder="Cari nama, NIS, atau instansi..."
            type="text" 
          />
        </div>

        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {[
            { id: 'all', label: 'Semua' },
            { id: 'student', label: 'Siswa' },
            { id: 'supervisor', label: 'Guru Pembimbing' }
          ].map((tab) => (
            <button 
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "px-6 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all active:scale-95",
                activeTab === tab.id 
                  ? "bg-primary text-white shadow-lg shadow-primary/20" 
                  : "bg-white border border-outline-variant text-on-surface-variant hover:bg-surface-container"
              )}
            >
              {tab.label}
            </button>
          ))}
          <button className="px-6 py-2.5 rounded-full bg-white border border-outline-variant text-on-surface-variant font-bold text-sm hover:bg-surface-container transition-all flex items-center gap-2 whitespace-nowrap">
            <Filter size={16} />
            Filter
          </button>
        </div>
      </div>

      {/* List */}
      <div className="space-y-4">
        {filteredData.map((item) => (
          <motion.div 
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={item.id}
            className="bg-white p-5 rounded-2xl shadow-sm border border-outline-variant hover:shadow-md transition-shadow group"
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex gap-4">
                <div className={cn(
                  "w-12 h-12 rounded-xl flex items-center justify-center shrink-0",
                  item.type === 'student' ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"
                )}>
                  {item.type === 'student' ? <Users size={24} /> : <UserSquare size={24} />}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-on-surface leading-snug">{item.name}</h3>
                  <p className="text-xs font-bold text-outline uppercase tracking-wider mt-0.5">{item.sub} • {item.type === 'student' ? 'Siswa' : 'Pembimbing'}</p>
                </div>
              </div>
              <span className={cn(
                "px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest",
                item.status === 'AKTIF' 
                  ? "bg-emerald-100 text-emerald-800" 
                  : "bg-error-container text-on-error-container"
              )}>
                {item.status}
              </span>
            </div>

            <div className="py-3 border-t border-surface-container flex items-center gap-2 text-on-surface-variant">
              {item.type === 'student' ? <Building2 size={16} /> : <Users size={16} />}
              <span className="text-sm font-medium">{item.detail}</span>
            </div>

            <div className="flex justify-end gap-2 mt-4 pt-3 border-t border-surface-container">
              <button className="px-5 py-2.5 rounded-xl border border-primary text-primary font-bold text-xs hover:bg-primary/5 transition-all flex items-center gap-2 active:scale-95">
                <Edit size={16} />
                Edit
              </button>
              <button className="px-5 py-2.5 rounded-xl border border-error text-error font-bold text-xs hover:bg-error/5 transition-all flex items-center gap-2 active:scale-95">
                <Trash2 size={16} />
                Hapus
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* FAB */}
      <motion.button 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-24 right-6 w-16 h-16 rounded-full bg-primary text-white shadow-2xl flex items-center justify-center z-40"
      >
        <Plus size={32} strokeWidth={3} />
      </motion.button>
    </div>
  );
}
