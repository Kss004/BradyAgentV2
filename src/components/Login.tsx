import React, { useState } from 'react';
import { Brain, Chrome } from 'lucide-react';

interface LoginProps {
  onLogin: (email: string) => void;
}

export default function Login({ onLogin }: LoginProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) onLogin(email);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-surface">
      {/* Subtle Background Ambient Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-tertiary/5 rounded-full blur-[120px] pointer-events-none"></div>

      <main className="w-full max-w-[480px] z-10">
        {/* Branding */}
        <div className="flex flex-col items-center mb-12">
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-container rounded-lg flex items-center justify-center mb-6 shadow-xl shadow-primary/20">
            <Brain className="text-white w-10 h-10" />
          </div>
          <h1 className="font-display font-extrabold text-3xl tracking-tighter text-primary">Brady AI</h1>
          <p className="font-display text-[10px] tracking-[0.2em] uppercase text-on-surface-variant mt-2 font-bold">The Mindful Mentor</p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-xl p-10 editorial-shadow border border-outline-variant/10">
          <header className="mb-10">
            <h2 className="font-display font-bold text-2xl text-on-surface mb-2">Welcome Back</h2>
            <p className="text-on-surface-variant leading-relaxed">Sign in to your dashboard to continue your coaching journey.</p>
          </header>

          <div className="space-y-6">
            {/* SSO Action */}
            <button 
              onClick={() => onLogin('demo@brady.com')}
              className="w-full flex items-center justify-center gap-4 bg-surface-container hover:bg-outline-variant/20 text-on-surface font-display font-semibold py-4 px-6 rounded-full transition-all duration-300 group"
            >
              <Chrome className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors" />
              <span>Continue with SSO</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-4">
              <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
              <span className="font-display text-[10px] uppercase tracking-widest text-outline font-bold">or email</span>
              <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
            </div>

            {/* Form Fields */}
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="space-y-1.5">
                <label className="font-display text-[10px] font-bold tracking-wider text-on-surface-variant uppercase ml-1">Work Email</label>
                <input 
                  className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 outline-none" 
                  placeholder="name@company.com" 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center px-1">
                  <label className="font-display text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">Password</label>
                  <a className="font-display text-[10px] font-bold tracking-wider text-primary uppercase hover:underline" href="#">Forgot?</a>
                </div>
                <input 
                  className="w-full bg-surface-container border-none rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 outline-none" 
                  placeholder="••••••••" 
                  type="password"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-primary-container text-white font-display font-bold py-4 px-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 mt-4 active:scale-[0.98]"
              >
                Sign In to Brady
              </button>
            </form>
          </div>

          {/* Footer Link */}
          <footer className="mt-8 text-center">
            <p className="text-on-surface-variant text-sm">
              Don't have an account? 
              <a className="text-primary font-bold hover:underline ml-1" href="#">Contact Admin</a>
            </p>
          </footer>
        </div>

        {/* System Status */}
        <div className="mt-12 flex justify-between items-center px-4">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-tertiary"></div>
            <span className="font-display text-[10px] font-bold tracking-widest text-tertiary uppercase">System Operational</span>
          </div>
          <div className="flex gap-6">
            <a className="font-display text-[10px] font-bold tracking-widest text-on-surface-variant uppercase hover:text-primary transition-colors" href="#">Privacy</a>
            <a className="font-display text-[10px] font-bold tracking-widest text-on-surface-variant uppercase hover:text-primary transition-colors" href="#">Terms</a>
          </div>
        </div>
      </main>

      {/* Side Decoration */}
      <div className="hidden xl:block absolute left-12 bottom-12 max-w-[240px]">
        <blockquote className="border-l-2 border-primary/20 pl-6">
          <p className="font-display italic text-on-surface-variant text-lg leading-snug">"The key to masterful sales isn't just speaking—it's active, mindful listening."</p>
          <cite className="block mt-4 font-display text-[10px] font-extrabold tracking-widest text-primary uppercase">— Coaching Insight #42</cite>
        </blockquote>
      </div>
    </div>
  );
}
