import { NavLink } from 'react-router-dom';
import { Home, FileText, Clock, ClipboardList, User, Users, BarChart3 } from 'lucide-react';
import { cn } from '@/src/lib/utils';
import { UserRole } from '@/src/types';

interface BottomNavProps {
  role: UserRole;
}

export function BottomNav({ role }: BottomNavProps) {
  const tabs = {
    student: [
      { to: '/dashboard', icon: Home, label: 'Beranda' },
      { to: '/journal', icon: FileText, label: 'Jurnal' },
      { to: '/attendance', icon: Clock, label: 'Presensi' },
      { to: '/reports', icon: ClipboardList, label: 'Laporan' },
      { to: '/profile', icon: User, label: 'Profil' },
    ],
    supervisor: [
      { to: '/dashboard', icon: Home, label: 'Home' },
      { to: '/students', icon: Users, label: 'Students' },
      { to: '/reports', icon: BarChart3, label: 'Reports' },
      { to: '/profile', icon: User, label: 'Profile' },
    ],
    admin: [
      { to: '/dashboard', icon: Home, label: 'Home' },
      { to: '/students', icon: Users, label: 'Students' },
      { to: '/reports', icon: BarChart3, label: 'Reports' },
      { to: '/profile', icon: User, label: 'Profile' },
    ],
  };

  const activeTabs = tabs[role];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-white border-t border-outline-variant shadow-[0_-4px_12px_rgba(9,30,66,0.08)] md:hidden">
      <div className="flex justify-around items-center h-20 pb-safe px-2">
        {activeTabs.map((tab) => (
          <NavLink
            key={tab.to}
            to={tab.to}
            className={({ isActive }) =>
              cn(
                "flex flex-col items-center justify-center px-3 py-1 transition-all rounded-xl",
                isActive 
                  ? "text-primary bg-primary/5" 
                  : "text-on-surface-variant hover:text-primary"
              )
            }
          >
            <tab.icon size={24} strokeWidth={2.5} />
            <span className="text-[11px] font-medium mt-1">{tab.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
