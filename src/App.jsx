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

  const [activeTab, setActiveTab] = useState(() => {
    if (typeof window !== 'undefined' && window.location.pathname.toLowerCase().includes('/admin')) {
      return 'admin';
    }
    return 'home';
  });
  const [activeLesson, setActiveLesson] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [subscriptionModalOpen, setSubscriptionModalOpen] = useState(false);
  const [onboardingOpen, setOnboardingOpen] = useState(false);
  const [installModalOpen, setInstallModalOpen] = useState(false);

  // Sync URL when visiting /admin directly or via browser history
  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname.toLowerCase().includes('/admin')) {
        setActiveTab('admin');
      } else if (activeTab === 'admin') {
        setActiveTab('home');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [activeTab]);

  const handleNavigateTab = (tab) => {
    setActiveTab(tab);
    if (tab === 'admin') {
      window.history.pushState(null, '', '/admin');
    } else if (window.location.pathname.toLowerCase().includes('/admin')) {
      window.history.pushState(null, '', '/');
    }
  };

  // Trigger onboarding only once per device/PC and only if not completed in profile
  useEffect(() => {
    const isDeviceDone =
      typeof window !== 'undefined' &&
      localStorage.getItem('lingora_device_onboarding_done') === 'true';
    if (!loading && !isDeviceDone && !profile.hasCompletedOnboarding && activeTab !== 'admin') {
      setOnboardingOpen(true);
    }
  }, [loading, profile.hasCompletedOnboarding, activeTab]);

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
        onNavigateTab={handleNavigateTab}
        activeTab={activeTab}
        onOpenInstallApp={() => setInstallModalOpen(true)}
      />

      {/* Main Container with Desktop Sidebar + Main Content */}
      <div className="max-w-6xl w-full mx-auto px-4 flex-1 flex">
        {/* Desktop Sidebar Navigation (Only shown for learner tabs, hidden in /admin) */}
        {activeTab !== 'admin' && (
          <DesktopSidebarNav activeTab={activeTab} onSelectTab={handleNavigateTab} />
        )}

        {/* Content View Area */}
        <main className={`flex-1 py-6 pb-24 lg:pb-8 min-w-0 ${activeTab === 'admin' ? 'w-full' : ''}`}>
          {activeTab === 'home' && (
            <HomeDashboard
              onStartLesson={(lesson) => setActiveLesson(lesson)}
              onNavigateTab={handleNavigateTab}
              onOpenSubscription={() => setSubscriptionModalOpen(true)}
            />
          )}

          {activeTab === 'learn' && (
            <LearnPath
              onStartLesson={(lesson) => setActiveLesson(lesson)}
              onNavigateTab={handleNavigateTab}
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

          {activeTab === 'admin' && (
            <AdminDashboard
              onNavigateHome={() => handleNavigateTab('home')}
              onOpenAuthModal={() => setAuthModalOpen(true)}
            />
          )}
        </main>
      </div>

      {/* Mobile Bottom Navigation (Hidden in /admin) */}
      {activeTab !== 'admin' && (
        <BottomNavigation activeTab={activeTab} onSelectTab={handleNavigateTab} />
      )}

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
