import { useState } from 'react';
import { Play, Pause, RotateCcw, Mic, MessageSquare, ShieldCheck, User, Brain, ArrowRight, Stars, Volume2, Package } from 'lucide-react';
import { Screen } from '../types';
const m211Image = "https://picsum.photos/seed/m211/800/600";

interface PracticeProps {
  onNavigate: (screen: Screen) => void;
}

export default function Practice({ onNavigate }: PracticeProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const scenarios = [
    { id: 1, title: 'The Skeptical IT Manager', difficulty: 'Intermediate', duration: '5 min' },
    { id: 2, title: 'Budget Constraints', difficulty: 'Advanced', duration: '8 min' },
    { id: 3, title: 'Legacy System Integration', difficulty: 'Expert', duration: '12 min' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Practice Header */}
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-display uppercase tracking-[0.2em] text-on-surface-variant font-bold">Practice Zone</span>
          <h1 className="text-xl font-bold tracking-tight font-display text-primary">Scenario Training</h1>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-surface-container overflow-hidden">
                <img src={`https://picsum.photos/seed/user${i}/100`} alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            ))}
          </div>
          <span className="text-xs font-display font-bold text-on-surface-variant uppercase tracking-widest">12 others practicing now</span>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Main Practice Area */}
        <div className="col-span-12 lg:col-span-8 flex flex-col gap-8">
          {/* Active Scenario Card */}
          <div className="bg-white rounded-2xl editorial-shadow border border-outline-variant/10 overflow-hidden flex flex-col min-h-[600px]">
            {/* Scenario Header */}
            <div className="p-8 bg-surface-container/30 border-b border-outline-variant/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-on-surface">The Skeptical IT Manager</h3>
                  <p className="text-xs text-on-surface-variant font-display font-bold uppercase tracking-widest">Scenario #1: Handling Objections</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="px-4 py-2 bg-white rounded-full border border-outline-variant/20 text-xs font-bold font-display text-on-surface-variant uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-tertiary" />
                  Intermediate
                </div>
              </div>
            </div>

            {/* Interaction Area */}
            <div className="flex-1 p-10 flex flex-col justify-center items-center text-center relative">
              {/* AI Persona */}
              <div className="mb-12 relative">
                <div className="w-32 h-32 rounded-full border-4 border-primary/20 p-2 relative z-10">
                  <img 
                    src="https://picsum.photos/seed/manager/400" 
                    alt="IT Manager" 
                    className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-primary z-20">
                  <Volume2 className="w-5 h-5" />
                </div>
                {/* Wave Animation when AI speaks */}
                <div className="absolute inset-0 bg-primary/5 rounded-full animate-ping opacity-20"></div>
              </div>

              <div className="max-w-xl space-y-6">
                <h4 className="text-2xl font-bold font-display text-on-surface">"Look, the M211 sounds impressive on paper, but we've been burned by 'seamless' integrations before. How exactly does your Bridge-Mode handle legacy packet loss?"</h4>
                <p className="text-on-surface-variant italic">The customer is leaning back, arms crossed. They're looking for technical reassurance, not a sales pitch.</p>
              </div>

              {/* Recording Controls */}
              <div className="mt-16 flex flex-col items-center gap-6">
                <div className="flex items-center gap-8">
                  <button className="w-14 h-14 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center hover:bg-outline-variant/20 transition-all">
                    <RotateCcw className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={() => setIsRecording(!isRecording)}
                    className={`w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500 ${
                      isRecording 
                        ? 'bg-error text-white shadow-2xl shadow-error/30 scale-110' 
                        : 'bg-primary text-white shadow-2xl shadow-primary/30 hover:scale-105'
                    }`}
                  >
                    {isRecording ? <Pause className="w-10 h-10" /> : <Mic className="w-10 h-10" />}
                  </button>
                  <button className="w-14 h-14 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center hover:bg-outline-variant/20 transition-all">
                    <Play className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className={`font-display text-xs font-bold uppercase tracking-widest ${isRecording ? 'text-error animate-pulse' : 'text-on-surface-variant'}`}>
                    {isRecording ? 'RECORDING YOUR RESPONSE...' : 'TAP TO RECORD YOUR PITCH'}
                  </span>
                  {isRecording && (
                    <div className="flex gap-1 h-4 items-center">
                      {[1, 2, 3, 4, 5, 6, 4, 2, 3, 5].map((h, i) => (
                        <div 
                          key={i} 
                          className="w-1 bg-error rounded-full animate-bounce" 
                          style={{ height: `${h * 20}%`, animationDelay: `${i * 0.1}s` }}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Coach Feedback Overlay (Simulated) */}
            <div className="p-8 bg-primary/5 border-t border-outline-variant/10 flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-sm">
                  <Brain className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-display font-bold text-primary uppercase tracking-widest block">Live Coaching Tip</span>
                  <p className="text-sm text-on-surface-variant font-medium">Try using the "Feel-Felt-Found" technique here to acknowledge their past experience.</p>
                </div>
              </div>
              <button className="px-6 py-2 bg-white rounded-full border border-outline-variant/20 text-xs font-bold font-display text-on-surface-variant uppercase tracking-widest hover:text-primary transition-all">
                Show Hint
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar Scenarios */}
        <div className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          {/* Product Reference Card */}
          <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10">
            <div className="flex items-center gap-2 mb-4 text-primary">
              <Package className="w-4 h-4" />
              <span className="text-[10px] font-bold uppercase tracking-widest">Product Reference</span>
            </div>
            <div className="flex gap-4 items-center">
              <div className="w-20 h-20 bg-surface-container/50 rounded-lg p-2 flex items-center justify-center">
                <img src={m211Image} alt="M211" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
              </div>
              <div>
                <h4 className="font-bold text-sm">M211 Enterprise Core</h4>
                <p className="text-xs text-on-surface-variant mt-1">Focus on: Bridge-Mode, 128-bit Encryption, Edge Processing.</p>
              </div>
            </div>
          </div>

          {/* Scenario Selector */}
          <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10">
            <h3 className="text-xl font-bold font-display mb-6">Other Scenarios</h3>
            <div className="space-y-4">
              {scenarios.map((scenario) => (
                <button 
                  key={scenario.id}
                  className={`w-full p-5 rounded-xl border-2 text-left transition-all group ${
                    scenario.id === 1 
                      ? 'border-primary bg-primary/5 shadow-lg shadow-primary/5' 
                      : 'border-outline-variant/10 hover:border-outline-variant/30 bg-surface-container/30'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-[10px] font-display font-bold uppercase tracking-widest ${scenario.id === 1 ? 'text-primary' : 'text-on-surface-variant'}`}>
                      {scenario.difficulty}
                    </span>
                    <span className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">
                      {scenario.duration}
                    </span>
                  </div>
                  <h4 className={`font-bold font-display ${scenario.id === 1 ? 'text-on-surface' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                    {scenario.title}
                  </h4>
                </button>
              ))}
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-gradient-to-br from-tertiary to-tertiary-container rounded-2xl p-8 text-white relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <Stars className="w-24 h-24" />
            </div>
            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display mb-6">Your Practice Stats</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-3xl font-black font-display">12</p>
                  <p className="text-[10px] font-bold text-tertiary-container uppercase tracking-widest opacity-80">SCENARIOS DONE</p>
                </div>
                <div>
                  <p className="text-3xl font-black font-display">84%</p>
                  <p className="text-[10px] font-bold text-tertiary-container uppercase tracking-widest opacity-80">AVG CONFIDENCE</p>
                </div>
              </div>
              <button 
                onClick={() => onNavigate('dashboard')}
                className="mt-8 w-full py-4 bg-white/20 backdrop-blur-md rounded-xl text-sm font-bold font-display uppercase tracking-widest hover:bg-white/30 transition-all flex items-center justify-center gap-2"
              >
                View Full Progress <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
