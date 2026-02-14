
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';
import { UserRole } from '../types';

const Dashboard: React.FC = () => {
  const [role, setRole] = useState<UserRole>(UserRole.CLIENT);

  return (
    <MobileLayout activeTab="home">
      <header className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold overflow-hidden border border-white/10">
              <img 
                alt="Profile" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/user1/100/100"
              />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-medium uppercase tracking-wider">Welcome back,</p>
              <h2 className="text-lg font-bold">Alex Sterling</h2>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 relative border border-white/5">
              <span className="material-icons-round text-xl">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </div>
        </div>

        <div className="flex p-1 bg-white/5 rounded-xl border border-white/5">
          {[UserRole.CLIENT, UserRole.INVESTOR, UserRole.CREATOR].map((r) => (
            <button
              key={r}
              onClick={() => setRole(r)}
              className={`flex-1 py-2 px-3 text-xs font-bold rounded-lg transition-all ${
                role === r ? 'bg-primary text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
              }`}
            >
              {r.charAt(0) + r.slice(1).toLowerCase()}
            </button>
          ))}
        </div>
      </header>

      <div className="px-6 space-y-8 mt-4">
        {/* Project Progress */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Project Progress</h3>
            <span className="text-[10px] text-slate-400 font-medium">MVP: AI Assistant</span>
          </div>
          <div className="glass p-6 rounded-3xl relative overflow-hidden group">
            <div className="flex items-center justify-between relative z-10">
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                  <span className="material-icons-round text-base">check</span>
                </div>
                <span className="text-[10px] font-bold text-primary">Idea</span>
              </div>
              <div className="h-0.5 flex-1 bg-primary"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white ring-4 ring-primary/20">
                  <span className="material-icons-round text-base">rate_review</span>
                </div>
                <span className="text-[10px] font-bold text-primary">Review</span>
              </div>
              <div className="h-0.5 flex-1 bg-primary/30"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary animate-pulse">
                  <span className="material-icons-round text-base">code</span>
                </div>
                <span className="text-[10px] font-bold text-slate-300">Dev</span>
              </div>
              <div className="h-0.5 flex-1 bg-white/10"></div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-500">
                  <span className="material-icons-round text-base">rocket_launch</span>
                </div>
                <span className="text-[10px] font-bold text-slate-500">Launch</span>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5">
              <div>
                <p className="text-xs text-slate-400">Current Phase</p>
                <p className="text-sm font-semibold">Active Development</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-slate-400">Completion</p>
                <p className="text-sm font-bold text-primary">68%</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Overview */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-secondary">Investment Overview</h3>
            <span className="material-icons-round text-slate-400 text-lg">trending_up</span>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="glass p-5 rounded-3xl border-l-4 border-l-secondary">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Total Funded</p>
              <p className="text-xl font-bold">$124,500</p>
              <div className="mt-2 flex items-center text-[10px] text-green-400 font-bold">
                <span className="material-icons-round text-sm">arrow_upward</span>
                12.5%
              </div>
            </div>
            <div className="glass p-5 rounded-3xl border-l-4 border-l-primary">
              <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">Active ROI</p>
              <p className="text-xl font-bold">18.2%</p>
              <div className="mt-2 flex items-center text-[10px] text-green-400 font-bold">
                <span className="material-icons-round text-sm">arrow_upward</span>
                4.3%
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section>
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-4">Quick Actions</h3>
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'New Idea', icon: 'lightbulb', color: 'primary' },
              { label: 'Creators', icon: 'people', color: 'secondary' },
              { label: 'Portfolio', icon: 'pie_chart', color: 'accent-purple' },
            ].map((action, i) => (
              <button key={i} className="glass aspect-square rounded-3xl flex flex-col items-center justify-center gap-2 hover:bg-white/10 transition-colors">
                <div className={`w-10 h-10 rounded-2xl bg-${action.color}/20 flex items-center justify-center text-${action.color}`}>
                  <span className="material-icons-round">{action.icon}</span>
                </div>
                <span className="text-[10px] font-bold text-center leading-tight">{action.label}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Recent Activity */}
        <section className="pb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Recent Activity</h3>
            <button className="text-[10px] text-primary font-bold">View All</button>
          </div>
          <div className="space-y-3">
            {[
              { title: "New proposal submitted", sub: "Sarah M. sent details for 'Project Nexus'", time: "2m ago", icon: "description", bg: "blue-500" },
              { title: "Dividend received", sub: "From 'HealthTech AI' investment", time: "1h ago", icon: "payments", bg: "green-500" },
              { title: "Milestone achieved", sub: "Phase 2 completed for 'EcoDash'", time: "5h ago", icon: "rocket", bg: "primary" }
            ].map((item, i) => (
              <div key={i} className="glass p-4 rounded-2xl flex items-center gap-4 border-white/5">
                <div className={`w-10 h-10 rounded-full bg-${item.bg}/10 flex items-center justify-center text-${item.bg} border border-${item.bg}/20`}>
                  <span className="material-icons-round text-lg">{item.icon}</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs font-semibold">{item.title}</p>
                  <p className="text-[10px] text-slate-400">{item.sub}</p>
                </div>
                <span className="text-[10px] text-slate-500 font-medium whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50">
        <button className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl shadow-primary/40 active:scale-90 transition-transform">
          <span className="material-icons-round text-3xl">add</span>
        </button>
      </div>
    </MobileLayout>
  );
};

export default Dashboard;
