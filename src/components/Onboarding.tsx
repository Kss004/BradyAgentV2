import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, ShieldCheck, MessageSquare, Dumbbell, ArrowRight, CheckCircle2, Stars } from 'lucide-react';
import { Screen } from '../types';

interface OnboardingProps {
  onComplete: () => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: "Welcome to Brady AI",
      description: "Your personalized AI-powered sales onboarding and coaching platform. We're here to turn you into a product expert.",
      icon: Brain,
      color: "bg-primary",
    },
    {
      title: "How It Works",
      description: "Our AI visits Brady product pages, scrapes documentation, and builds a custom course for you in seconds. No more manual searching.",
      icon: Stars,
      color: "bg-secondary",
    },
    {
      title: "Readiness Checks",
      description: "Complete baseline assessments to build your performance profile. We'll identify your strengths and areas for growth.",
      icon: ShieldCheck,
      color: "bg-tertiary",
    },
    {
      title: "AI Coaching & Practice",
      description: "Chat with Coach Brady for feedback or roleplay with AI customers in the Practice Zone to master your pitch.",
      icon: MessageSquare,
      color: "bg-primary-container",
    }
  ];

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      onComplete();
    }
  };

  const current = steps[step];

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6 overflow-hidden relative">
      {/* Ambient Background */}
      <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-20%] left-[-10%] w-[800px] h-[800px] bg-tertiary/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="w-full max-w-2xl bg-white rounded-3xl editorial-shadow border border-outline-variant/10 p-12 relative z-10">
        <div className="flex justify-between items-center mb-12">
          <div className="flex gap-2">
            {steps.map((_, i) => (
              <div 
                key={i} 
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  i === step ? 'w-8 bg-primary' : i < step ? 'w-4 bg-tertiary/40' : 'w-4 bg-surface-container'
                }`}
              ></div>
            ))}
          </div>
          <button 
            onClick={onComplete}
            className="font-display text-[10px] font-bold uppercase tracking-widest text-on-surface-variant hover:text-primary transition-colors"
          >
            Skip Intro
          </button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className={`w-24 h-24 ${current.color} rounded-2xl flex items-center justify-center text-white shadow-xl mb-8`}>
              <current.icon className="w-12 h-12" />
            </div>
            <h2 className="text-4xl font-black font-display tracking-tighter text-on-surface mb-6">
              {current.title}
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed mb-12 max-w-md">
              {current.description}
            </p>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center">
          <button 
            onClick={nextStep}
            className="group relative flex items-center gap-3 bg-primary text-white font-display font-bold py-5 px-12 rounded-full shadow-xl shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95 overflow-hidden"
          >
            <span className="relative z-10">
              {step === steps.length - 1 ? "Get Started" : "Continue"}
            </span>
            {step === steps.length - 1 ? (
              <CheckCircle2 className="w-5 h-5 relative z-10" />
            ) : (
              <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </div>
      </div>
    </div>
  );
}
