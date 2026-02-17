
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  activeTab: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: 'dashboard', label: 'Home', path: '/dashboard' },
    { id: 'marketplace', icon: 'storefront', label: 'Market', path: '/marketplace' },
    { id: 'invest', icon: 'insights', label: 'Invest', path: '/invest' },
    { id: 'creator', icon: 'auto_awesome', label: 'Creator', path: '/creator' },
    { id: 'wallet', icon: 'account_balance_wallet', label: 'Wallet', path: '/wallet' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-[#0A0A0F]/90 backdrop-blur-2xl border-t border-white/5 px-[24px] pt-[16px] pb-[40px] flex justify-between items-center z-50 shadow-[0_-10px_40px_rgba(0,0,0,0.4)]">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => item.path !== '#' && navigate(item.path)}
          className={`group flex flex-col items-center gap-1.5 transition-premium ${activeTab === item.id ? 'text-primary' : 'text-slate-500 hover:text-slate-300'
            }`}
        >
          <div className={`p-2 rounded-xl transition-premium ${activeTab === item.id ? 'bg-primary/10' : 'group-hover:bg-white/5'}`}>
            <span className={`material-symbols-outlined text-[24px] ${activeTab === item.id ? 'fill-[1]' : ''}`}>
              {item.icon}
            </span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-[0.05em]">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
