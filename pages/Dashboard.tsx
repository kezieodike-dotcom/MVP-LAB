
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';
import { UserRole } from '../types';

const Dashboard: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.CLIENT);

  const renderRoleContent = () => {
    switch (role) {
      case UserRole.CLIENT:
        return (
          <section className="space-y-[32px]">
            <div>
              <div className="flex items-center justify-between mb-4 px-1">
                <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary opacity-70">Project Progress</h3>
                <span className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.05em]">MVP: AI Assistant</span>
              </div>
              <div className="glass p-[32px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-primary/5 shadow-3xl">
                <div className="flex items-center justify-between relative z-10 mb-[40px] font-bold">
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-primary/10">
                      <span className="material-symbols-outlined text-[20px]">check</span>
                    </div>
                    <span className="text-[10px] text-primary uppercase tracking-[0.08em]">Idea</span>
                  </div>
                  <div className="h-[2px] flex-1 bg-primary mx-4 opacity-30"></div>
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="w-[40px] h-[40px] rounded-full bg-primary flex items-center justify-center text-white ring-8 ring-primary/10">
                      <span className="material-symbols-outlined text-[20px]">rate_review</span>
                    </div>
                    <span className="text-[10px] text-primary uppercase tracking-[0.08em]">Review</span>
                  </div>
                  <div className="h-[2px] flex-1 bg-white/5 mx-4"></div>
                  <div className="flex flex-col items-center gap-2.5">
                    <div className="w-[40px] h-[40px] rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary animate-pulse">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <span className="text-[10px] text-slate-500 uppercase tracking-[0.08em]">Dev</span>
                  </div>
                </div>
                <div className="bg-black/40 p-[24px] rounded-[1.5rem] border border-white/5 flex justify-between items-center">
                  <div>
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.08em] mb-1 opacity-70">Status</p>
                    <p className="text-[16px] font-bold text-white">In Alpha Build</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.08em] mb-1 opacity-70">Completion</p>
                    <p className="text-[16px] font-bold text-primary">68%</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case UserRole.DEVELOPER:
        return (
          <section className="space-y-[32px]">
            <div>
              <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-primary mb-4 px-1 opacity-70">Active Sprints</h3>
              <div className="glass p-[24px] rounded-[2.5rem] border-white/5 space-y-4">
                {[
                  { task: 'Neural Core Integration', priority: 'High', deadline: '2h' },
                  { task: 'Edge API Optimization', priority: 'Medium', deadline: '1d' }
                ].map((t, i) => (
                  <div key={i} className="flex justify-between items-center p-[20px] bg-white/5 rounded-[1.25rem] border border-white/5 group hover:border-white/10 transition-premium">
                    <div>
                      <p className="text-[15px] font-bold text-white mb-1 group-hover:text-primary transition-colors">{t.task}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.08em]">Due: {t.deadline}</p>
                    </div>
                    <span className={`px-[12px] py-[4px] rounded-full text-[10px] font-bold uppercase tracking-[0.05em] ${t.priority === 'High' ? 'bg-red-500/10 text-red-500 border border-red-500/20' : 'bg-primary/10 text-primary border border-primary/20'}`}>
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
          <section className="space-y-[32px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-[24px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-secondary/5 border-l-4 border-l-secondary">
                <p className="text-[11px] uppercase font-bold text-slate-500 mb-2 tracking-[0.08em] opacity-70">Total Funded</p>
                <p className="text-[24px] font-bold tracking-tight text-white">$124,500</p>
              </div>
              <div className="glass p-[24px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-primary/5 border-l-4 border-l-primary">
                <p className="text-[11px] uppercase font-bold text-slate-500 mb-2 tracking-[0.08em] opacity-70">Est. ROI</p>
                <p className="text-[24px] font-bold tracking-tight text-white">18.2%</p>
              </div>
            </div>
          </section>
        );
      case UserRole.CREATOR:
        return (
          <section className="space-y-[32px]">
            <div className="glass p-[40px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-secondary/5 text-center shadow-3xl">
              <div className="w-[64px] h-[64px] rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-6 border border-primary/20">
                <span className="material-symbols-outlined text-[32px]">auto_videocam</span>
              </div>
              <h4 className="font-bold text-[16px] text-slate-400 uppercase tracking-[0.08em] mb-2 opacity-70">Content Rewards</h4>
              <p className="text-[40px] font-bold tracking-tighter text-white mb-2">$3,840.00</p>
              <p className="text-[12px] text-slate-500 font-medium">Earned from 12 Verified Campaigns</p>
            </div>
          </section>
        );
      case UserRole.STUDENT:
        return (
          <section className="space-y-[32px]">
            <div className="glass p-[32px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-primary/5">
              <h4 className="text-[11px] font-bold mb-[24px] uppercase tracking-[0.08em] text-slate-400 opacity-70">Current Course</h4>
              <div className="flex gap-[20px] items-center">
                <div className="w-[56px] h-[56px] rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
                  <span className="material-symbols-outlined text-[28px]">data_object</span>
                </div>
                <div className="flex-1">
                  <p className="text-[18px] font-bold text-white mb-3">Neural Architecting</p>
                  <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-[33%] transition-all duration-1000"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case UserRole.ADMIN:
        return (
          <section className="space-y-[32px]">
            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-[24px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-red-500/5">
                <p className="text-[11px] uppercase font-bold text-red-500/70 mb-2 tracking-[0.08em]">System Alerts</p>
                <p className="text-[24px] font-bold tracking-tight text-white">2 Priority</p>
              </div>
              <div className="glass p-[24px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-white/5">
                <p className="text-[11px] uppercase font-bold text-slate-500 mb-2 tracking-[0.08em] opacity-70">Queue Size</p>
                <p className="text-[24px] font-bold tracking-tight text-white">14 Apps</p>
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
      <header className="px-[32px] pt-[48px] pb-4">
        <div className="flex items-center justify-between mb-[40px]">
          <div className="flex items-center gap-[16px]">
            <button className="w-[48px] h-[48px] flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-premium">
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
            <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-br from-primary to-secondary p-[2px] transition-premium hover:scale-110 cursor-pointer">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0A0F]">
                <img
                  alt="Profile"
                  className="w-full h-full object-cover"
                  src="https://picsum.photos/seed/user1/100/100"
                />
              </div>
            </div>
            <div>
              <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.08em] opacity-70">Welcome back,</p>
              <h2 className="text-[20px] font-bold text-white tracking-tight">Sterling</h2>
            </div>
          </div>
          <button className="w-[48px] h-[48px] flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white transition-premium relative">
            <span className="material-symbols-outlined text-[20px]">notifications</span>
            <span className="absolute top-3.5 right-3.5 w-2 h-2 rounded-full bg-primary ring-2 ring-[#0A0A0F]"></span>
          </button>
        </div>

        <div className="flex gap-[12px] p-1.5 bg-white/5 rounded-2xl border border-white/10 overflow-x-auto no-scrollbar -mx-[32px] px-[32px]">
          {Object.values(UserRole).map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-shrink-0 h-[40px] px-6 text-[12px] font-bold rounded-xl transition-premium ${role === r ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-500 hover:text-white'
                }`}
            >
              {r.charAt(0) + r.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </header>

      <div className="px-[32px] pb-[120px] mt-[32px]">
        {renderRoleContent()}

        <h3 className="text-[11px] font-bold uppercase tracking-[0.08em] text-slate-500 mt-[48px] mb-6 opacity-70 px-1">Quick Insights</h3>
        <div className="grid grid-cols-2 gap-4">
          <div className="glass p-[24px] rounded-[2rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-white/[0.02]">
            <p className="text-[10px] uppercase font-bold text-slate-600 mb-3 tracking-[0.08em]">System Status</p>
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse shadow-[0_0_10px_rgba(0,255,160,0.5)]"></span>
              <span className="text-[12px] font-bold uppercase tracking-[0.05em] text-white">Optimal</span>
            </div>
          </div>
          <div className="glass p-[24px] rounded-[2rem] border-white/5 bg-gradient-to-br from-[#0A0A0F] to-white/[0.02]">
            <p className="text-[10px] uppercase font-bold text-slate-600 mb-3 tracking-[0.08em]">Active AI Nodes</p>
            <p className="text-[16px] font-bold text-white font-mono">1,024</p>
          </div>
        </div>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
