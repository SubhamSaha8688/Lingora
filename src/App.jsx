import React, { useState, useEffect } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext.jsx';
import { CurriculumProvider } from './context/CurriculumContext.jsx';
import { Header } from './components/Header.jsx';
import { BottomNavigation, DesktopSidebarNav } from './components/Navigation.jsx';
import { HomeDashboard } from './components/HomeDashboard.jsx';
import { LearnPath } from './components/LearnPath.jsx';
import { PracticeHub } from './components/PracticeHub.jsx';
import { StudyMaterialsView } from './components/StudyMaterialsView.jsx';
import { Leaderboard } from './components/Leaderboard.jsx';
import { UserProfileView } from './components/UserProfileView.jsx';
import { AdminDashboard } from './components/AdminDashboard.jsx';
import { QuizSession } from './components/QuizSession.jsx';
import { AuthModal } from './components/AuthModal.jsx';
import { SubscriptionModal } from './components/SubscriptionModal.jsx';
import { OnboardingModal } from './components/OnboardingModal.jsx';
import { InstallAppModal } from './components/InstallAppModal.jsx';
import { LingoraMascot } from './components/LingoraMascot.jsx';

function AppContent() {
  const { profile, loading } = useAuth();

  const [activeTab, setActiveTab] = useState('home');
  const [activeLesson, setActiveLesson] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);

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
        <main className="flex-1 py-6 pb-24 lg:pb-8 min-w-0">
          {activeTab === 'home' && (
            <HomeDashboard
              onStartLesson={(lesson) => setActiveLesson(lesson)}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onOpenSubscription={() => setSubscriptionModalOpen(true)}
            />
          )}

          {activeTab === 'learn' && (
            <LearnPath
              onStartLesson={(lesson) => setActiveLesson(lesson)}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
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
            // Completed lesson handles XP and progress record
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
      <CurriculumProvider>
        <AppContent />
      </CurriculumProvider>
    </AuthProvider>
  );
}
