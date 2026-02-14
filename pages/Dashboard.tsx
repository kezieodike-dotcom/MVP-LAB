
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';
import { UserRole } from '../types';

const Dashboard: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.CLIENT);

  const renderRoleContent = () => {
    switch (role) {
      case UserRole.CLIENT:
        return (
          <section className="space-y-8">
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Project Progress</h3>
                <span className="text-[10px] text-slate-400 font-medium">MVP: AI Assistant</span>
              </div>
              <div className="glass p-6 rounded-3xl border-white/10">
                <div className="flex items-center justify-between relative z-10 mb-6 font-bold">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                      <span className="material-icons-round text-base">check</span>
                    </div>
                    <span className="text-[9px] text-primary">Idea</span>
                  </div>
                  <div className="h-0.5 flex-1 bg-primary mx-2"></div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                      <span className="material-icons-round text-base">rate_review</span>
                    </div>
                    <span className="text-[9px] text-primary">Review</span>
                  </div>
                  <div className="h-0.5 flex-1 bg-primary/30 mx-2"></div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary animate-pulse">
                      <span className="material-icons-round text-base">code</span>
                    </div>
                    <span className="text-[9px] text-slate-400">Dev</span>
                  </div>
                </div>
                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Status</p>
                    <p className="text-sm font-bold">In Alpha Build</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[9px] text-slate-500 uppercase font-bold mb-1">Completion</p>
                    <p className="text-sm font-bold text-primary">68%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case UserRole.DEVELOPER:
        return (
          <section className="space-y-8">
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary mb-4">Active Sprints</h3>
              <div className="glass p-5 rounded-3xl border-white/5 space-y-4">
                {[
                  { task: 'Neural Core Integration', priority: 'High', deadline: '2h' },
                  { task: 'Edge API Optimization', priority: 'Medium', deadline: '1d' }
                ].map((t, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-white/5 rounded-2xl border border-white/5">
                    <div>
                      <p className="text-xs font-bold">{t.task}</p>
                      <p className="text-[9px] text-slate-500 uppercase font-bold mt-1">Due: {t.deadline}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[8px] font-bold uppercase ${t.priority === 'High' ? 'bg-red-500/10 text-red-500' : 'bg-primary/10 text-primary'}`}>
                      {t.priority}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      case UserRole.INVESTOR:
        return (
          <section className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-3xl border-l-4 border-l-secondary">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Total Funded</p>
                <p className="text-xl font-bold font-mono">$124,500</p>
              </div>
              <div className="glass p-5 rounded-3xl border-l-4 border-l-primary">
                <p className="text-[10px] uppercase font-bold text-slate-500 mb-1">Est. ROI</p>
                <p className="text-xl font-bold font-mono">18.2%</p>
              </div>
            </div>
          </section>
        );
      case UserRole.CREATOR:
        return (
          <section className="space-y-8">
            <div className="glass p-6 rounded-3xl border-white/5 text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-3">auto_videocam</span>
              <h4 className="font-bold text-sm mb-2">Content Rewards</h4>
              <p className="text-2xl font-bold font-mono text-secondary">$3,840.00</p>
              <p className="text-[10px] text-slate-500 mt-2">Earned from 12 Campaigns</p>
            </div>
          </section>
        );
      case UserRole.STUDENT:
        return (
          <section className="space-y-8">
            <div className="glass p-6 rounded-3xl border-white/5">
              <h4 className="text-xs font-bold mb-4 uppercase tracking-widest text-slate-400">Current Course</h4>
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">data_object</span>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold">Neural Architecting</p>
                  <div className="w-full h-1 bg-white/5 rounded-full mt-2">
                    <div className="h-full bg-primary w-1/3"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case UserRole.ADMIN:
        return (
          <section className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-5 rounded-3xl border-white/10 bg-red-500/5">
                <p className="text-[9px] uppercase font-bold text-red-500/70 mb-1">System Alerts</p>
                <p className="text-xl font-bold">2 Priority</p>
              </div>
              <div className="glass p-5 rounded-3xl border-white/10">
                <p className="text-[9px] uppercase font-bold text-slate-500 mb-1">Queue Size</p>
                <p className="text-xl font-bold">14 Apps</p>
              </div>
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return (
    <MobileLayout activeTab="home">
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 border border-white/5 text-slate-400">
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold overflow-hidden border border-white/10">
              <img
                alt="Profile"
                className="w-full h-full object-cover"
                src="https://picsum.photos/seed/user1/100/100"
              />
            </div>
            <div>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Welcome,</p>
              <h2 className="text-lg font-bold">Sterling</h2>
            </div>
          </div>
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/5">
            <span className="material-icons-round text-xl">notifications</span>
          </button>
        </div>

        <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
          {Object.values(UserRole).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-shrink-0 py-2.5 px-4 text-[10px] font-bold rounded-xl transition-all ${role === r ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                }`}
            >
              {r.charAt(0) + r.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </header>

      <div className="px-6 pb-24 mt-4">
        {renderRoleContent()}

        <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-12 mb-4">Quick Insights</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-5 rounded-3xl border-white/5">
            <p className="text-[10px] uppercase font-bold text-slate-600 mb-1">Ecosystem Status</p>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-xs font-bold uppercase">Optimal</span>
            </div>
          </div>
          <div className="glass p-5 rounded-3xl border-white/5">
            <p className="text-[10px] uppercase font-bold text-slate-600 mb-1">Active AI Nodes</p>
            <p className="text-sm font-bold font-mono">1,024</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
