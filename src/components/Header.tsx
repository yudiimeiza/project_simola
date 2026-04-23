import { Bell, Menu, ArrowLeft } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
  userAvatar?: string;
  onMenuClick?: () => void;
}

export function Header({ title = 'SiMola', showBack = false, userAvatar, onMenuClick }: HeaderProps) {
  const navigate = useNavigate();
  const location = useLocation();

  // If we are on a page that needs a back button but didn't specify showBack
  const isInternalPage = location.pathname !== '/dashboard' && location.pathname !== '/';

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-outline-variant shadow-sm h-16 flex items-center justify-between px-4">
      <div className="flex items-center gap-3">
        {(showBack || isInternalPage) && location.pathname !== '/dashboard' ? (
          <button 
            onClick={() => navigate(-1)}
            className="p-2 hover:bg-surface-container rounded-full transition-colors"
          >
            <ArrowLeft className="text-on-surface" size={24} />
          </button>
        ) : (
          <button 
            onClick={onMenuClick}
            className="p-2 hover:bg-surface-container rounded-full transition-colors md:hidden"
          >
            <Menu className="text-primary" size={24} />
          </button>
        )}
        <h1 className={cn(
          "text-xl font-black tracking-tight italic",
          location.pathname === '/dashboard' ? "text-primary" : "text-on-surface"
        )}>
          {location.pathname === '/dashboard' ? 'SiMola' : title}
        </h1>
      </div>

      <div className="flex items-center gap-2">
        <button className="relative p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-colors">
          <Bell size={24} />
          <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border border-white" />
        </button>
        <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
          <img 
            src={userAvatar || "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"} 
            alt="User"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}
