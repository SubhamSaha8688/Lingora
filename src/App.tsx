import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.tsx';
import { Header } from './components/Header.tsx';
import { BottomNavigation, DesktopSidebarNav } from './components/Navigation.tsx';
import { HomeDashboard } from './components/HomeDashboard.tsx';
import { LearnPath } from './components/LearnPath.tsx';
import { PracticeHub } from './components/PracticeHub.tsx';
import { StudyMaterialsView } from './components/StudyMaterialsView.tsx';
import { Leaderboard } from './components/Leaderboard.tsx';
import { UserProfileView } from './components/UserProfileView.tsx';
import { AdminDashboard } from './components/AdminDashboard.tsx';
import { QuizSession } from './components/QuizSession.tsx';
import { AuthModal } from './components/AuthModal.tsx';
import { SubscriptionModal } from './components/SubscriptionModal.tsx';
import { OnboardingModal } from './components/OnboardingModal.tsx';
import { InstallAppModal } from './components/InstallAppModal.tsx';
import { LingoraMascot } from './components/LingoraMascot.tsx';
import { Lesson } from './data/curriculum.ts';
import { testConnection } from './lib/firebase.ts';

function AppContent() {
  const { profile, loading } = useAuth();

  const [activeTab, setActiveTab] = useState<string>('home');
  const [activeLesson, setActiveLesson] = useState<Lesson | null>(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);

  useEffect(() => {
    testConnection();
  }, []);

  // Trigger onboarding if not completed yet
  useEffect(() => {
    if (!loading && !profile.hasCompletedOnboarding) {
      setOnboardingOpen(true);
    }
  }, [loading, profile.hasCompletedOnboarding]);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8F9FC] flex flex-col items-center justify-center space-y-4">
        <LingoraMascot expression="welcome" size="lg" bubbleText="Opening your learning portal..." />
        <div className="text-center">
          <p className="text-sm font-black text-[#1E3A8A]">LINGORA</p>
          <p className="text-xs font-bold text-slate-400 tracking-wider uppercase mt-0.5">
            Learn Languages. Unlock Your World.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F9FC] flex flex-col text-[#20243A]">
      {/* Sticky Header */}
      <Header
        onOpenAuth={() => setAuthModalOpen(true)}
        onOpenSubscription={() => setSubscriptionModalOpen(true)}
        onNavigateTab={(tab) => setActiveTab(tab)}
        activeTab={activeTab}
        onOpenInstallApp={() => setInstallModalOpen(true)}
      />

      {/* Main Container with Desktop Sidebar + Main Content */}
      <div className="max-w-6xl w-full mx-auto px-4 flex-1 flex">
        {/* Desktop Sidebar Navigation */}
        <DesktopSidebarNav activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} />

        {/* Content View Area */}
        <main className="flex-1 py-6 min-w-0">
          {activeTab === 'home' && (
            <HomeDashboard
              onStartLesson={(lesson) => setActiveLesson(lesson)}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onOpenSubscription={() => setSubscriptionModalOpen(true)}
            />
          )}

          {activeTab === 'learn' && (
            <LearnPath onStartLesson={(lesson) => setActiveLesson(lesson)} />
          )}

          {activeTab === 'practice' && <PracticeHub />}

          {activeTab === 'materials' && <StudyMaterialsView />}

          {activeTab === 'leaderboard' && <Leaderboard />}

          {activeTab === 'profile' && (
            <UserProfileView
              onOpenSubscription={() => setSubscriptionModalOpen(true)}
              onOpenAuth={() => setAuthModalOpen(true)}
            />
          )}

          {activeTab === 'admin' && <AdminDashboard />}
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <BottomNavigation activeTab={activeTab} onSelectTab={(tab) => setActiveTab(tab)} />

      {/* Interactive Quiz Session Overlay Modal */}
      {activeLesson && (
        <QuizSession
          lesson={activeLesson}
          onClose={() => setActiveLesson(null)}
          onComplete={() => {
            // Completed lesson handles XP and Firestore sync
          }}
        />
      )}

      {/* Authentication Modal */}
      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />

      {/* First-time Onboarding Modal */}
      <OnboardingModal isOpen={onboardingOpen} onClose={() => setOnboardingOpen(false)} />

      {/* Subscription & Pricing Modal */}
      <SubscriptionModal
        isOpen={subscriptionModalOpen}
        onClose={() => setSubscriptionModalOpen(false)}
      />

      {/* Android & Mobile App Install Modal */}
      <InstallAppModal
        isOpen={installModalOpen}
        onClose={() => setInstallModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
