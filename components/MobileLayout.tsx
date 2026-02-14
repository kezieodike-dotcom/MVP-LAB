
import React from 'react';
import BottomNav from './BottomNav';

interface MobileLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
  showNav?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, activeTab = 'home', showNav = true }) => {
  return (
    <div className="min-h-screen bg-background-dark flex justify-center overflow-x-hidden">
      <div className="w-full max-w-md bg-[#0A0A0F] min-h-screen flex flex-col relative shadow-2xl">
        {/* Glow Effects */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary opacity-10 blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-secondary opacity-5 blur-[120px] pointer-events-none"></div>
        
        <main className="flex-1 overflow-y-auto no-scrollbar pb-24 relative z-10">
          {children}
        </main>

        {showNav && <BottomNav activeTab={activeTab} />}
      </div>
    </div>
  );
};

export default MobileLayout;
