export type Screen = 'login' | 'onboarding' | 'dashboard' | 'readiness-intro' | 'assessment' | 'results' | 'coach' | 'practice' | 'community' | 'announcements' | 'profile-readiness';

export interface Module {
  id: string;
  title: string;
  category: string;
  duration: string;
  icon: string;
  status: 'NOT_STARTED' | 'IN_PROGRESS' | 'COMPLETED';
}

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}
