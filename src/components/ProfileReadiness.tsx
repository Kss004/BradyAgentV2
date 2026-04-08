import React from 'react';
import { ArrowLeft, CheckCircle2, Circle, Clock, Target, BarChart2 } from 'lucide-react';
import { Screen } from '../types';

interface ProfileReadinessProps {
  onNavigate: (screen: Screen) => void;
}

export default function ProfileReadiness({ onNavigate }: ProfileReadinessProps) {
  const modules = [
    {
      id: "m211",
      title: "M211 Advanced",
      description: "Portable Bluetooth label printer specifications and real-world sales pitching.",
      status: "completed",
      score: "92%",
      date: "Apr 8, 2026",
      icon: CheckCircle2,
      color: "text-tertiary",
      bgColor: "bg-tertiary/10"
    },
    {
      id: "m511",
      title: "M511 Framework",
      description: "Mid-range edge printing architecture and integration protocols.",
      status: "in-progress",
      score: "50%",
      date: "Pending",
      icon: Clock,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      id: "m510",
      title: "M510 Enterprise",
      description: "Advanced industrial compliance and high-volume deployment scenarios.",
      status: "not-started",
      score: "-",
      date: "-",
      icon: Circle,
      color: "text-on-surface-variant",
      bgColor: "bg-surface-container"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto pb-12">
      {/* Header */}
      <button 
        onClick={() => onNavigate('dashboard')}
        className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors mb-8 font-display text-sm font-bold uppercase tracking-widest"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>

      <div className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-black text-on-surface font-display mb-3">Profile Readiness Report</h1>
          <p className="text-on-surface-variant font-medium">
            Detailed breakdown of your ongoing onboarding and module performance.
          </p>
        </div>
        <div className="flex items-center gap-3 px-6 py-3 bg-surface-container rounded-2xl border border-outline-variant/10 shadow-sm">
          <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
            <BarChart2 className="w-5 h-5" />
          </div>
          <div>
            <span className="block text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">Overall Score</span>
            <span className="block text-xl font-bold font-display leading-none text-on-surface">34%</span>
          </div>
        </div>
      </div>

      {/* Modules List */}
      <div className="space-y-6">
        {modules.map((mod) => (
          <div 
            key={mod.id} 
            className="bg-white rounded-2xl p-8 border border-outline-variant/20 shadow-sm relative overflow-hidden group"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
              {/* Status Icon */}
              <div className={`w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center ${mod.bgColor} ${mod.color}`}>
                <mod.icon className="w-7 h-7" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`text-[10px] font-bold font-display uppercase tracking-widest px-2 py-0.5 rounded-full ${mod.bgColor} ${mod.color}`}>
                    {mod.status.replace('-', ' ')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2">{mod.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {mod.description}
                </p>
              </div>

              {/* Stats */}
              <div className="flex sm:flex-col gap-6 sm:gap-2 w-full sm:w-auto items-center sm:items-end justify-between sm:justify-center border-t sm:border-t-0 sm:border-l border-outline-variant/10 pt-4 sm:pt-0 sm:pl-6">
                <div className="text-left sm:text-right">
                  <span className="block text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest mb-1">Score</span>
                  <span className={`text-2xl font-bold font-display ${mod.status === 'not-started' ? 'text-on-surface-variant' : 'text-primary'}`}>
                    {mod.score}
                  </span>
                </div>
                <div className="text-left sm:text-right">
                  <span className="block text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest mb-1">Date</span>
                  <span className="text-sm font-medium text-on-surface-variant">
                    {mod.date}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Target goals */}
      <div className="mt-12 bg-primary/5 rounded-2xl p-8 border border-primary/20 flex gap-6 items-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
          <Target className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-lg font-bold font-display text-on-surface mb-1">Next Milestone</h4>
          <p className="text-sm text-on-surface-variant">Complete the <strong>M511 Framework</strong> module to unlock Tier 2 product selling capabilities within your portal.</p>
        </div>
      </div>

    </div>
  );
}
