import React from 'react';
import { 
  LayoutDashboard, 
  ShieldCheck, 
  MessageSquare, 
  Dumbbell, 
  Megaphone, 
  HelpCircle, 
  LogOut,
  Bell,
  Settings,
  Users
} from 'lucide-react';
import { Screen } from '../types';

interface LayoutProps {
  children: React.ReactNode;
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
  user: { name: string; email: string } | null;
}

export default function Layout({ children, currentScreen, onNavigate, user }: LayoutProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'readiness-intro', label: 'Readiness Check', icon: ShieldCheck },
    { id: 'coach', label: 'AI Coach', icon: MessageSquare },
    { id: 'practice', label: 'Practice Zone', icon: Dumbbell },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'announcements', label: 'Announcements', icon: Megaphone },
  ];

  return (
    <div className="flex min-h-screen bg-surface">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-outline-variant/10 flex flex-col p-6 z-50">
        <div className="flex flex-col mb-10">
          <span className="text-2xl font-black text-primary font-display">Brady AI</span>
          <span className="text-[10px] text-on-surface-variant font-display uppercase tracking-widest font-bold">The Mindful Mentor</span>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto no-scrollbar">
          {navItems.map((item) => {
            const isActive = currentScreen === item.id || 
              (currentScreen === 'assessment' && item.id === 'readiness-intro') || 
              (currentScreen === 'results' && item.id === 'readiness-intro');
            return (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id as Screen)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 font-display text-sm font-semibold tracking-wide ${
                  isActive 
                    ? 'bg-gradient-to-r from-primary to-primary-container text-white shadow-lg shadow-primary/20' 
                    : 'text-on-surface-variant hover:bg-surface-container'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-outline-variant/10 space-y-2">
          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container transition-all font-display text-sm font-semibold tracking-wide">
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </button>
          <button 
            onClick={() => window.location.reload()}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-full text-on-surface-variant hover:bg-surface-container transition-all font-display text-sm font-semibold tracking-wide"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-64 flex flex-col">
        {/* Top Header */}
        <header className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-outline-variant/10 px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-8">
            {/* Breadcrumbs or Page Title could go here */}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
              <Settings className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 ml-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-bold text-on-surface">{user?.name || 'User'}</p>
                <p className="text-[10px] text-on-surface-variant font-display uppercase tracking-widest font-bold">Sales Executive</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-container overflow-hidden border border-outline-variant/30">
                <img 
                  src="https://picsum.photos/seed/avatar/200" 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
