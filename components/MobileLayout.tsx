
import React from 'react';
import BottomNav from './BottomNav';

interface MobileLayoutProps {
  children: React.ReactNode;
  activeTab?: string;
  showNav?: boolean;
}

const MobileLayout: React.FC<MobileLayoutProps> = ({ children, activeTab = 'home', showNav = true }) => {
  return (
    <div className="min-h-screen bg-[#050505] flex justify-center overflow-x-hidden transition-premium">
      <div className="w-full max-w-md bg-[#0A0A0F] min-h-screen flex flex-col relative shadow-[0_0_100px_rgba(0,0,0,0.5)] border-x border-white/5">
        {/* Glow Effects */}
        <div className="absolute top-[-120px] left-[-120px] w-80 h-80 bg-primary opacity-[0.08] blur-[120px] pointer-events-none rounded-full"></div>
        <div className="absolute top-1/2 right-[-160px] w-[320px] h-[320px] bg-secondary opacity-[0.05] blur-[140px] pointer-events-none rounded-full"></div>

        <main className="flex-1 overflow-y-auto no-scrollbar relative z-10 transition-premium">
          {children}
        </main>

        {showNav && <BottomNav activeTab={activeTab} />}
      </div>
    </div>
  );
};

export default MobileLayout;
