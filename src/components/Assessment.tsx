import { useState } from 'react';
import { Timer, HelpCircle, CheckCircle2, ArrowRight, MessageSquare, Info } from 'lucide-react';
import { Screen } from '../types';
const m211Image = "https://picsum.photos/seed/m211/800/600";

interface AssessmentProps {
  onNavigate: (screen: Screen) => void;
}

export default function Assessment({ onNavigate }: AssessmentProps) {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const options = [
    "The 128-bit encryption standard is only active during idle states.",
    "The M211 uses a decentralized-ready kernel for cloud-to-edge transitions.",
    "It requires a manual hardware switch to toggle between legacy and modern modes.",
    "The architecture is limited to 500GB/s throughput in standard configurations."
  ];

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setIsAnswered(true);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Assessment Header */}
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-display uppercase tracking-[0.2em] text-on-surface-variant font-bold">Question 4 of 12</span>
          <h1 className="text-xl font-bold tracking-tight font-display text-primary">Readiness Assessment</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 px-4 py-2 bg-surface-container rounded-full text-on-surface-variant font-display text-xs font-bold">
            <Timer className="w-4 h-4" />
            08:42 REMAINING
          </div>
          <div className="w-48 h-2 bg-surface-container rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all duration-500" style={{ width: '33%' }}></div>
          </div>
        </div>
      </div>

      {/* Question Card */}
      <section className="bg-white rounded-lg p-12 editorial-shadow border border-outline-variant/10 relative overflow-hidden">
        {/* Decorative Element */}
        <div className="absolute top-0 right-0 p-8 opacity-5">
          <HelpCircle className="w-32 h-32" />
        </div>

        <div className="relative z-10">
          <span className="px-3 py-1 bg-primary/5 text-primary rounded-full font-display text-[10px] font-extrabold tracking-widest uppercase mb-6 inline-block">TECHNICAL ARCHITECTURE</span>
          <h2 className="text-3xl font-bold font-display text-on-surface leading-tight mb-10 max-w-2xl">
            Based on the M211 Enterprise Core specifications, which statement accurately describes its primary architectural differentiator?
          </h2>

          {/* Options List */}
          <div className="space-y-4">
            {options.map((option, index) => {
              const isSelected = selectedOption === index;
              const isCorrect = index === 1;
              const showResult = isAnswered;

              let borderClass = "border-outline-variant/20";
              let bgClass = "bg-surface-container/30 hover:bg-surface-container/50";
              let iconColor = "text-outline-variant";

              if (isSelected) {
                borderClass = "border-primary shadow-lg shadow-primary/5";
                bgClass = "bg-primary/5";
                iconColor = "text-primary";
              }

              if (showResult) {
                if (isCorrect) {
                  borderClass = "border-tertiary bg-tertiary/5";
                  iconColor = "text-tertiary";
                } else if (isSelected) {
                  borderClass = "border-error bg-error/5";
                  iconColor = "text-error";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(index)}
                  disabled={isAnswered}
                  className={`w-full flex items-center gap-6 p-6 rounded-xl border-2 transition-all duration-300 text-left group ${borderClass} ${bgClass}`}
                >
                  <div className={`w-8 h-8 shrink-0 rounded-full border-2 flex items-center justify-center transition-colors ${iconColor} ${isSelected ? 'border-current' : 'border-outline-variant/30'}`}>
                    {showResult && isCorrect ? (
                      <CheckCircle2 className="w-5 h-5" />
                    ) : (
                      <span className="text-xs font-bold font-display">{String.fromCharCode(65 + index)}</span>
                    )}
                  </div>
                  <span className={`text-lg font-medium transition-colors ${isSelected ? 'text-on-surface' : 'text-on-surface-variant group-hover:text-on-surface'}`}>
                    {option}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Action Footer */}
          <div className="mt-12 flex justify-between items-center pt-8 border-t border-outline-variant/10">
            <button className="flex items-center gap-2 text-on-surface-variant font-display text-sm font-bold hover:text-primary transition-colors">
              <HelpCircle className="w-4 h-4" />
              Flag for Review
            </button>
            
            {!isAnswered ? (
              <button 
                onClick={handleSubmit}
                disabled={selectedOption === null}
                className={`py-4 px-10 rounded-full font-bold text-lg shadow-xl transition-all duration-300 flex items-center gap-3 ${
                  selectedOption !== null 
                    ? 'bg-primary text-white shadow-primary/20 hover:scale-105' 
                    : 'bg-surface-container text-outline cursor-not-allowed'
                }`}
              >
                Submit Answer
                <ArrowRight className="w-5 h-5" />
              </button>
            ) : (
              <button 
                onClick={() => onNavigate('results')}
                className="py-4 px-10 rounded-full bg-tertiary text-white font-bold text-lg shadow-xl shadow-tertiary/20 hover:scale-105 transition-transform duration-300 flex items-center gap-3"
              >
                Next Question
                <ArrowRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Expert Insights - Only visible after answering */}
      {isAnswered && (
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="p-8 bg-surface-container rounded-lg border-l-4 border-tertiary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-tertiary/10 rounded-full flex items-center justify-center text-tertiary">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-on-surface">Why this is correct</h4>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed">
              The M211's decentralized kernel is its core innovation, allowing it to process data at the edge without constant cloud synchronization. This is a key selling point for high-security environments.
            </p>
          </div>
          <div className="p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <MessageSquare className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-on-surface">Sales Tip</h4>
            </div>
            <p className="text-sm text-on-surface-variant leading-relaxed italic">
              "When a client asks about latency, lead with the decentralized kernel. It's the technical proof of the performance gains you're promising."
            </p>
          </div>
        </div>
      )}

      {/* Quick Reference Sidebar (Simulated) */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 hidden xl:flex flex-col gap-4 w-64">
        <div className="p-6 bg-white rounded-lg editorial-shadow border border-outline-variant/10">
          <div className="flex items-center gap-2 mb-4 text-primary">
            <Info className="w-4 h-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Reference Material</span>
          </div>
          <h5 className="font-bold text-sm mb-2">M211 Core Specs</h5>
          <div className="mb-4 rounded-lg overflow-hidden bg-surface-container/50 p-2">
            <img src={m211Image} alt="M211 Reference" className="w-full h-24 object-contain" referrerPolicy="no-referrer" />
          </div>
          <p className="text-xs text-on-surface-variant leading-relaxed mb-4">Review the architecture diagram if you're unsure about the kernel structure.</p>
          <button className="w-full py-2 bg-surface-container rounded-lg text-[10px] font-bold uppercase tracking-widest text-on-surface hover:bg-primary/10 hover:text-primary transition-all">
            Open PDF Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
