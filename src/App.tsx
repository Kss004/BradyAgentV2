/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ReadinessIntro from './components/ReadinessIntro';
import Assessment from './components/Assessment';
import Results from './components/Results';
import Coach from './components/Coach';
import Practice from './components/Practice';
import Community from './components/Community';
import Announcements from './components/Announcements';
import Onboarding from './components/Onboarding';
import Layout from './components/Layout';
import { Screen } from './types';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [user, setUser] = useState<{ name: string; email: string } | null>(null);

  const handleLogin = (email: string) => {
    setUser({ name: 'Debi', email });
    setScreen('onboarding');
  };

  const renderScreen = () => {
    if (screen === 'login') {
      return <Login onLogin={handleLogin} />;
    }

    if (screen === 'onboarding') {
      return <Onboarding onComplete={() => setScreen('dashboard')} />;
    }

    return (
      <Layout currentScreen={screen} onNavigate={setScreen} user={user}>
        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="p-8 lg:p-12"
          >
            {(() => {
              switch (screen) {
                case 'dashboard':
                  return <Dashboard onNavigate={setScreen} user={user} />;
                case 'readiness-intro':
                  return <ReadinessIntro onNavigate={setScreen} />;
                case 'assessment':
                  return <Assessment onNavigate={setScreen} />;
                case 'results':
                  return <Results onNavigate={setScreen} />;
                case 'coach':
                  return <Coach onNavigate={setScreen} />;
                case 'practice':
                  return <Practice onNavigate={setScreen} />;
                case 'community':
                  return <Community />;
                case 'announcements':
                  return <Announcements onNavigate={setScreen} />;
                default:
                  return <Dashboard onNavigate={setScreen} user={user} />;
              }
            })()}
          </motion.div>
        </AnimatePresence>
      </Layout>
    );
  };

  return (
    <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
      {renderScreen()}
    </div>
  );
}
