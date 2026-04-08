import { Stars, Gauge, Network, ShieldCheck, Lightbulb, ArrowRight } from 'lucide-react';
import { Screen } from '../types';
import m211Image from '../assets/m211.jpg';

interface ReadinessIntroProps {
  onNavigate: (screen: Screen) => void;
}

export default function ReadinessIntro({ onNavigate }: ReadinessIntroProps) {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Progress Header */}
      <div className="mb-12 flex items-center justify-between">
        <div className="flex flex-col">
          <span className="text-[10px] font-display uppercase tracking-[0.2em] text-on-surface-variant font-bold">Step 1 of 4</span>
          <h1 className="text-xl font-bold tracking-tight font-display text-primary">Readiness Check</h1>
        </div>
        <div className="w-1/3 h-2 bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '25%' }}></div>
        </div>
      </div>

      {/* Hero Heading Section */}
      <section className="mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-secondary-container text-primary font-display text-[10px] font-bold mb-6 uppercase tracking-widest">
          <Stars className="w-3.5 h-3.5" />
          PRODUCT DEEP DIVE
        </div>
        <h2 className="text-5xl font-black font-display tracking-tighter text-on-surface max-w-3xl leading-[1.1]">
          The Brady M211 Printer
        </h2>
        <p className="mt-6 text-lg text-on-surface-variant max-w-2xl font-medium">
          A next-generation portable, Bluetooth-enabled thermal transfer printer designed for rugged, on-site industrial identification.
        </p>
      </section>

      {/* Main Bento-Style Layout */}
      <div className="grid grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-7 flex flex-col gap-8">
          {/* Image Card */}
          <div className="relative overflow-hidden rounded-lg shadow-sm h-[400px] bg-white group flex items-center justify-center p-8">
            <img 
              className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-105" 
              src={m211Image} 
              alt="M211 Printer"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <span className="font-display text-on-surface text-[10px] tracking-widest uppercase mb-2 block font-bold">Product Hardware</span>
              <h3 className="text-on-surface text-2xl font-bold font-display">The M211 Label Printer</h3>
            </div>
          </div>

          {/* Summary Card */}
          <div className="p-8 rounded-lg bg-white border border-outline-variant/10 editorial-shadow">
            <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Core Overview</h4>
            <div className="space-y-4 text-on-surface-variant font-medium leading-relaxed">
              <p>The Brady M211 isn't just a printer; it's a paradigm shift in how technicians handle on-site labeling. Driven entirely by the Express Labels Mobile App, it enables seamless label creation directly from your smartphone via robust Bluetooth 5.0 LE.</p>
              <p>Your goal in this assessment is to understand the technical nuances that differentiate the M211 from other portable models, specifically focusing on its military-grade durability and drop-lock-print cartridges.</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-5 flex flex-col gap-8">
          {/* Strategic Fit Section */}
          <div className="p-10 rounded-lg bg-white editorial-shadow border-l-4 border-primary">
            <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-primary mb-8">Strategic Fit</h4>
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Unmatched Durability</h5>
                  <p className="text-sm text-on-surface-variant mt-1">MIL-STD-810G compliant. Survives 6-foot drops and 250-lb crushes with ease.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Mobile-First Workflow</h5>
                  <p className="text-sm text-on-surface-variant mt-1">Design, preview, and print labels natively from the Express Labels mobile app.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                  <Gauge className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">All-Day Power</h5>
                  <p className="text-sm text-on-surface-variant mt-1">Built-in 1200 mAh lithium-ion battery prints over 300 labels on a single charge.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="p-8 rounded-lg bg-surface-container">
            <h4 className="font-display text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-6">Quick Specs</h4>
            <ul className="space-y-4">
              <li className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                <span className="text-sm text-on-surface-variant font-medium">Model ID</span>
                <span className="text-sm font-bold text-on-surface">M211 Portable</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                <span className="text-sm text-on-surface-variant font-medium">Battery</span>
                <span className="text-sm font-bold text-on-surface">1200 mAh Li-ion</span>
              </li>
              <li className="flex justify-between items-center py-2 border-b border-outline-variant/30">
                <span className="text-sm text-on-surface-variant font-medium">Max Print Speed</span>
                <span className="text-sm font-bold text-on-surface">36 in/min</span>
              </li>
              <li className="flex justify-between items-center py-2">
                <span className="text-sm text-on-surface-variant font-medium">Connectivity</span>
                <span className="text-sm font-bold text-on-surface">Bluetooth 5.0 LE</span>
              </li>
            </ul>
          </div>

          {/* Action Button */}
          <button 
            onClick={() => onNavigate('assessment')}
            className="mt-4 w-full py-6 rounded-full bg-gradient-to-r from-primary to-primary-container text-white font-bold text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform duration-300"
          >
            Continue to Readiness Assessment
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Coaching Insight */}
      <div className="mt-16 p-8 bg-tertiary-container rounded-lg flex gap-6 items-start">
        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center shrink-0">
          <Lightbulb className="w-6 h-6 text-white" />
        </div>
        <div>
          <h5 className="text-white font-bold mb-1">Mentor's Note</h5>
          <p className="text-white/80 text-sm leading-relaxed max-w-3xl">
            Focus on the "Mobile-First Workflow" point when discussing with field workers. The fact that they can step onto a job site and design complex panel labels right from their phones is a massive time-saver.
          </p>
        </div>
      </div>
    </div>
  );
}
