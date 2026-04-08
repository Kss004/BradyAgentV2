import { Trophy, Target, TrendingUp, ArrowRight, MessageSquare, Dumbbell, LayoutDashboard } from 'lucide-react';
import { Screen } from '../types';
const m211Image = "https://picsum.photos/seed/m211/800/600";

interface ResultsProps {
  onNavigate: (screen: Screen) => void;
}

export default function Results({ onNavigate }: ResultsProps) {
  const strengths = [
    { title: 'Technical Architecture', score: 94, icon: Target },
    { title: 'Value Prop Alignment', score: 88, icon: TrendingUp },
    { title: 'Competitive Positioning', score: 82, icon: Target },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero Result Section */}
      <section className="text-center mb-16">
        <div className="w-24 h-24 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary mx-auto mb-8 animate-bounce">
          <Trophy className="w-12 h-12" />
        </div>
        <span className="text-[10px] font-display uppercase tracking-[0.3em] text-tertiary font-black mb-4 block">ASSESSMENT COMPLETE</span>
        <h1 className="text-6xl font-black font-display tracking-tighter text-on-surface mb-6">
          You're Ready to Sell.
        </h1>
        <p className="text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed mb-8">
          Exceptional performance on the M211 Core series. You've demonstrated a high level of technical proficiency and strategic alignment.
        </p>
        <div className="flex justify-center">
          <div className="w-32 h-32 bg-white rounded-2xl editorial-shadow p-4 flex items-center justify-center">
            <img src={m211Image} alt="M211" className="w-full h-full object-contain" referrerPolicy="no-referrer" />
          </div>
        </div>
      </section>

      {/* Score Breakdown Grid */}
      <div className="grid grid-cols-12 gap-8 mb-12">
        {/* Main Score Card */}
        <div className="col-span-12 lg:col-span-4 bg-white rounded-lg p-10 editorial-shadow border border-outline-variant/10 flex flex-col items-center justify-center text-center">
          <div className="relative w-48 h-48 flex items-center justify-center mb-6">
            <svg className="w-full h-full -rotate-90">
              <circle 
                cx="96" cy="96" r="88" 
                fill="none" stroke="currentColor" strokeWidth="12" 
                className="text-surface-container"
              />
              <circle 
                cx="96" cy="96" r="88" 
                fill="none" stroke="currentColor" strokeWidth="12" 
                strokeDasharray={2 * Math.PI * 88}
                strokeDashoffset={2 * Math.PI * 88 * (1 - 0.92)}
                className="text-tertiary transition-all duration-1000 ease-out"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-black font-display text-on-surface">92%</span>
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">OVERALL SCORE</span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-on-surface">11/12</p>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">CORRECT</p>
            </div>
            <div className="w-[1px] h-8 bg-outline-variant/30 self-center"></div>
            <div className="text-center">
              <p className="text-2xl font-bold text-on-surface">14:22</p>
              <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">TIME TAKEN</p>
            </div>
          </div>
        </div>

        {/* Strengths Breakdown */}
        <div className="col-span-12 lg:col-span-8 bg-white rounded-lg p-10 editorial-shadow border border-outline-variant/10">
          <h3 className="text-2xl font-bold font-display mb-8">Performance Breakdown</h3>
          <div className="space-y-8">
            {strengths.map((strength, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                      <strength.icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-on-surface">{strength.title}</span>
                  </div>
                  <span className="font-display text-sm font-black text-primary">{strength.score}%</span>
                </div>
                <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: `${strength.score}%`, transitionDelay: `${index * 200}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths & Improvements Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg p-8 editorial-shadow border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display">Key Strengths</h3>
          </div>
          <ul className="space-y-4">
            {[
              "Deep understanding of the M211 decentralized kernel architecture.",
              "Excellent alignment of technical specs with enterprise value propositions.",
              "Strong grasp of competitive differentiators against K-Series models."
            ].map((strength, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-tertiary shrink-0"></div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{strength}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-lg p-8 editorial-shadow border border-outline-variant/10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold font-display">Areas for Improvement</h3>
          </div>
          <ul className="space-y-4">
            {[
              "Refine the explanation of Bridge-Mode latency for non-technical stakeholders.",
              "Practice handling objections related to initial deployment costs.",
              "Memorize the specific throughput limits for standard vs. liquid-cooled models."
            ].map((improvement, i) => (
              <li key={i} className="flex gap-3 items-start">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0"></div>
                <p className="text-sm text-on-surface-variant leading-relaxed">{improvement}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Next Steps / Recommendations */}
      <section className="mb-12">
        <h3 className="text-2xl font-bold font-display mb-8">Recommended Next Steps</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button 
            onClick={() => onNavigate('coach')}
            className="p-8 bg-white rounded-lg border border-outline-variant/10 hover:shadow-xl hover:shadow-on-surface/5 transition-all text-left group"
          >
            <div className="w-12 h-12 bg-secondary-container text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-display mb-2">Review Weak Points</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Chat with Coach Brady about the questions you missed to solidify your understanding.</p>
            <span className="text-primary font-display text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              Start Coaching <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button 
            onClick={() => onNavigate('practice')}
            className="p-8 bg-white rounded-lg border border-outline-variant/10 hover:shadow-xl hover:shadow-on-surface/5 transition-all text-left group"
          >
            <div className="w-12 h-12 bg-tertiary-container text-tertiary rounded-xl flex items-center justify-center mb-6 group-hover:bg-tertiary group-hover:text-white transition-colors">
              <Dumbbell className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-display mb-2">Practice Pitching</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">Run through a simulated sales call with an AI customer to test your new knowledge.</p>
            <span className="text-tertiary font-display text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
              Enter Practice Zone <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>

          <button 
            onClick={() => onNavigate('dashboard')}
            className="p-8 bg-white rounded-lg border border-outline-variant/10 hover:shadow-xl hover:shadow-on-surface/5 transition-all text-left group"
          >
            <div className="w-12 h-12 bg-surface-container text-on-surface-variant rounded-xl flex items-center justify-center mb-6 group-hover:bg-on-surface group-hover:text-white transition-colors">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h4 className="text-lg font-bold font-display mb-2">Next Module</h4>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">You've unlocked the M510 Enterprise series. Continue your onboarding journey.</p>
            <span className="text-on-surface-variant font-display text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-on-surface">
              Go to Dashboard <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
