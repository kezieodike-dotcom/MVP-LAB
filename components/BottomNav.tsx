
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface BottomNavProps {
  activeTab: string;
}

const BottomNav: React.FC<BottomNavProps> = ({ activeTab }) => {
  const navigate = useNavigate();

  const navItems = [
    { id: 'home', icon: 'dashboard', label: 'Home', path: '/dashboard' },
    { id: 'projects', icon: 'rocket_launch', label: 'Projects', path: '/invest' },
    { id: 'wallet', icon: 'account_balance_wallet', label: 'Wallet', path: '/wallet' },
    { id: 'invest', icon: 'insights', label: 'Invest', path: '/invest' },
    { id: 'profile', icon: 'person', label: 'Profile', path: '#' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-background-dark/80 backdrop-blur-xl border-t border-white/5 px-6 pt-3 pb-8 flex justify-between items-center z-50">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => item.path !== '#' && navigate(item.path)}
          className={`flex flex-col items-center gap-1 transition-colors ${
            activeTab === item.id ? 'text-primary' : 'text-slate-500'
          }`}
        >
          <span className={`material-symbols-outlined ${activeTab === item.id ? 'fill-[1]' : ''}`}>
            {item.icon}
          </span>
          <span className="text-[10px] font-medium">{item.label}</span>
        </button>
      ))}
    </nav>
  );
};

export default BottomNav;
