import { Play, ArrowRight, ShieldCheck, Package, MessageSquare, Timer, ChevronRight } from 'lucide-react';
import { Screen } from '../types';
const m211Image = "https://picsum.photos/seed/m211/800/600";

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
  user: { name: string; email: string } | null;
}

export default function Dashboard({ onNavigate, user }: DashboardProps) {
  const modules = [
    { id: 'm211', title: 'M211 Advanced', category: 'CORE SERIES', duration: '25 min', icon: Package },
    { id: 'm510', title: 'M510 Enterprise', category: 'NEW LAUNCH', duration: '40 min', icon: ShieldCheck },
    { id: 'm511', title: 'M511 Framework', category: 'ARCHITECTURE', duration: '18 min', icon: Package },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header Section */}
      <header className="mb-12 flex justify-between items-end">
        <div>
          <span className="font-display text-[10px] tracking-wider uppercase text-on-surface-variant block mb-2 font-bold">October 24, 2023</span>
          <h1 className="text-4xl font-extrabold font-display tracking-tight text-on-surface">Good Morning, {user?.name || 'Debi'}</h1>
        </div>
      </header>

      {/* Announcement */}
      <div className="mb-12 bg-primary/5 border border-primary/10 py-3 px-6 rounded-xl flex items-center gap-4 overflow-hidden shadow-sm">
        <span className="shrink-0 font-bold font-display uppercase tracking-widest text-[10px] bg-primary text-white px-3 py-1.5 rounded-full shadow-md">Announcements</span>
        <div className="flex-1 font-medium text-sm text-primary">
          <button 
            onClick={() => onNavigate('announcements')} 
            className="hover:underline hover:text-primary-container cursor-pointer transition-colors"
          >
             M211 Firmware v2.1 Update Release
          </button>
        </div>
      </div>

      {/* Top Featured Row */}
      <section className="grid grid-cols-12 gap-8 mb-12">
        {/* Readiness Status Card */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-lg p-8 relative overflow-hidden group editorial-shadow border border-outline-variant/10">
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-6">
              <span className="px-3 py-1 bg-secondary-container text-primary rounded-full font-display text-[10px] font-bold tracking-widest uppercase">Current Status</span>
            </div>
            <h2 className="text-3xl font-bold font-display mb-4">Getting Started</h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">You've completed 0 of 5 initial baseline assessments. Let's build your performance profile.</p>
            <div className="space-y-4">
              <div className="flex justify-between items-end mb-1">
                <span className="font-display text-[10px] font-bold text-on-surface">PROFILE READINESS</span>
                <span className="font-display text-[10px] font-bold text-tertiary">12%</span>
              </div>
              <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-tertiary w-[12%] rounded-full"></div>
              </div>
            </div>
            
            <button 
              onClick={() => onNavigate('profile-readiness')}
              className="mt-6 w-full py-3 bg-surface-container rounded-xl text-xs font-bold font-display uppercase tracking-widest text-on-surface hover:bg-primary/10 hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              Read more
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="absolute -right-8 -bottom-8 opacity-5 group-hover:scale-110 transition-transform duration-500">
            <ShieldCheck className="w-48 h-48" />
          </div>
        </div>

        {/* Featured Program Card */}
        <div className="col-span-12 lg:col-span-8 bg-primary rounded-lg p-10 text-white flex flex-col justify-between relative overflow-hidden group">
          <div 
            className="absolute inset-0 opacity-40 bg-contain bg-no-repeat bg-right transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url(${m211Image})` }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/95 to-transparent"></div>
          
          <div className="relative z-10">
            <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full font-display text-[10px] font-bold tracking-widest uppercase mb-6 inline-block">Recommended for you</span>
            <h2 className="text-5xl font-black font-display mb-4 max-w-xl leading-tight">3 Product Quick Readiness Check</h2>
            <p className="text-primary-container text-lg max-w-lg mb-8 opacity-90">Master the core value propositions for the M-Series line in under 15 minutes of AI-guided roleplay.</p>
          </div>

          <div className="relative z-10 flex items-center gap-6">
            <button 
              onClick={() => onNavigate('readiness-intro')}
              className="bg-white text-primary font-bold py-4 px-10 rounded-full hover:scale-105 transition-all duration-300 shadow-xl flex items-center gap-2"
            >
              Start Now
              <ArrowRight className="w-4 h-4" />
            </button>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <img 
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-primary object-cover" 
                  src={`https://picsum.photos/seed/mentor${i}/100`} 
                  alt="Mentor"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-10 h-10 rounded-full border-2 border-primary bg-primary-container flex items-center justify-center text-[10px] font-bold">+12</div>
            </div>
            <span className="text-[10px] font-display text-white/80 uppercase tracking-widest font-bold">Active Mentors</span>
          </div>
        </div>
      </section>

      {/* Modules Grid */}
      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold font-display">Product Modules</h3>
            <button className="text-primary font-display text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              View All Catalog <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {modules.map((module) => (
              <div 
                key={module.id}
                onClick={() => onNavigate('readiness-intro')}
                className="bg-white rounded-lg p-6 hover:shadow-xl hover:shadow-on-surface/5 transition-all cursor-pointer border border-outline-variant/10 group"
              >
                <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <module.icon className="w-6 h-6" />
                </div>
                <span className="font-display text-[10px] font-extrabold tracking-widest text-on-surface-variant/60 uppercase">{module.category}</span>
                <h4 className="text-lg font-bold font-display mt-1 mb-2">{module.title}</h4>
                <div className="flex items-center gap-2 text-xs text-on-surface-variant font-display font-bold">
                  <Timer className="w-3.5 h-3.5" />
                  {module.duration}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Sales Tips */}
        <div className="col-span-12 lg:col-span-4">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-bold font-display">Quick Sales Tips</h3>
          </div>
          <div className="relative group cursor-pointer overflow-hidden rounded-lg editorial-shadow">
            <img 
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-700" 
              src="https://picsum.photos/seed/sales/600/400" 
              alt="Sales Tips"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6">
              <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center mb-4 self-center group-hover:scale-110 transition-all duration-300">
                <Play className="w-6 h-6 text-white fill-current" />
              </div>
              <span className="font-display text-[10px] font-bold text-primary-container uppercase tracking-widest mb-1">HANDLING OBJECTIONS</span>
              <h4 className="text-white text-xl font-bold font-display">The 3-Second Pause Technique</h4>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden">
                <img src="https://picsum.photos/seed/coach/100" alt="Expert" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <span className="text-xs font-display font-bold text-on-surface-variant">Coach Marcus</span>
            </div>
            <span className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">2:45 duration</span>
          </div>
        </div>
      </section>
    </div>
  );
}
