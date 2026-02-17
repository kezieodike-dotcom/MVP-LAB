
import React from 'react';
import MobileLayout from '../components/MobileLayout';

const InvestmentPortal: React.FC = () => {
  return (
    <MobileLayout activeTab="invest">
      <header className="px-[32px] pt-[48px] pb-4 bg-[#0A0A0F]/80 backdrop-blur-md sticky top-0 z-20 border-b border-white/5">
        <div className="flex justify-between items-center mb-[32px]">
          <div>
            <h1 className="text-[24px] font-bold tracking-[-0.02em] leading-tight text-white">AI Investment</h1>
            <div className="flex items-center gap-1.5 mt-1">
              <span className="material-symbols-outlined text-secondary text-[16px]">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.08em] text-secondary">KYC Verified</span>
            </div>
          </div>
          <div className="w-[48px] h-[48px] rounded-full bg-gradient-to-tr from-primary to-purple-400 p-[2px] border border-white/10 hover:scale-110 transition-premium cursor-pointer">
            <div className="w-full h-full rounded-full overflow-hidden border-2 border-[#0A0A0F]">
              <img
                alt="User Profile"
                className="w-full h-full object-cover"
                src="https://picsum.photos/seed/user2/100/100"
              />
            </div>
          </div>
        </div>

        <div className="p-[32px] rounded-[2.5rem] bg-gradient-to-br from-primary to-indigo-600 text-white shadow-2xl shadow-primary/20 relative overflow-hidden group">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-[60px] group-hover:bg-white/20 transition-colors duration-1000"></div>
          <p className="text-[11px] font-bold uppercase tracking-[0.08em] mb-2 opacity-80">Total Portfolio Value</p>
          <div className="flex justify-between items-center">
            <h3 className="text-[32px] font-bold tracking-tighter">$124,500.00</h3>
            <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-[11px] font-bold">+12.4%</div>
          </div>
        </div>
      </header>

      <div className="px-[32px] space-y-[48px] mt-[32px] pb-[120px]">
        {/* Featured Opportunities */}
        <section>
          <div className="flex justify-between items-center mb-6 px-1">
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] opacity-70">Featured Opportunities</h2>
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(var(--primary-rgb),0.5)]"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
          <div className="flex gap-6 overflow-x-auto no-scrollbar -mx-[32px] px-[32px] py-2">
            {[
              { name: "CogniAL", tag: "Generative AI", desc: "Predictive data analysis for SaaS.", val: "$2.4M", goal: 87, icon: "auto_awesome", color: "primary" },
              { name: "NeuralSync", tag: "NeuroTech", desc: "Brain-computer interface for focus.", val: "$1.8M", goal: 42, icon: "psychology", color: "secondary" }
            ].map((opp, i) => (
              <div key={i} className="flex-shrink-0 w-[280px] glass p-[32px] rounded-[2.5rem] border-white/5 relative overflow-hidden group hover:border-white/10 transition-premium">
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${opp.color}/10 rounded-full blur-[60px] group-hover:bg-${opp.color}/20 transition-all duration-700`}></div>
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-[48px] h-[48px] rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <span className={`material-symbols-outlined text-${opp.color} text-[24px]`}>{opp.icon}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full bg-${opp.color}/10 text-${opp.color} text-[10px] font-bold uppercase tracking-[0.05em] border border-${opp.color}/20`}>
                    {opp.tag}
                  </span>
                </div>
                <h3 className="text-[20px] font-bold text-white mb-2 tracking-tight">{opp.name}</h3>
                <p className="text-[13px] text-slate-400 mb-8 leading-[1.6] line-clamp-2">{opp.desc}</p>
                <div className="space-y-[24px] mb-[32px]">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.05em]">Valuation</span>
                    <span className="text-[14px] font-bold text-white tracking-tight">{opp.val}</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.05em]">Funding Goal</span>
                      <span className="text-[12px] text-secondary font-bold">{opp.goal}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary shadow-[0_0_8px_rgba(var(--secondary-rgb),0.5)] transition-all duration-1000" style={{ width: `${opp.goal}%` }}></div>
                    </div>
                  </div>
                </div>
                <button className="w-full h-[48px] rounded-xl bg-primary text-white font-bold text-[13px] hover:bg-primary/90 hover:scale-[1.02] active:scale-95 transition-premium shadow-lg shadow-primary/20">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Search & Filter */}
        <section>
          <div className="flex gap-4">
            <div className="relative flex-1 group">
              <span className="material-symbols-outlined absolute left-[20px] top-1/2 -translate-y-1/2 text-slate-500 text-[20px] group-focus-within:text-primary transition-colors">search</span>
              <input
                className="w-full h-[56px] pl-[56px] pr-[24px] bg-white/5 border border-white/10 rounded-2xl text-[14px] focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-premium text-white placeholder-slate-500 outline-none"
                placeholder="Search ventures..."
                type="text"
              />
            </div>
            <button className="w-[56px] h-[56px] flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl text-slate-400 hover:text-white transition-premium active:scale-95">
              <span className="material-symbols-outlined text-[20px]">tune</span>
            </button>
          </div>
        </section>

        {/* Available Ventures List */}
        <section className="pb-[40px]">
          <div className="flex justify-between items-center mb-6 px-1">
            <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] opacity-70">Available Ventures</h2>
            <span className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.05em]">24 Results</span>
          </div>
          <div className="space-y-[16px]">
            {[
              { name: "DataFlow AI", category: "B2B Middleware", split: "25% Split", growth: "+18% Growth", icon: "dataset", bg: "from-blue-500 to-indigo-600" },
              { name: "VisionCore", category: "Computer Vision", split: "15% Split", growth: "+32% Growth", icon: "camera", bg: "from-pink-500 to-rose-600" },
              { name: "SecureBot", category: "Cybersecurity", split: "20% Split", growth: "+12% Growth", icon: "security", bg: "from-amber-500 to-orange-600" }
            ].map((venture, i) => (
              <div key={i} className="flex items-center gap-[20px] p-[20px] rounded-[2.5rem] glass border-white/5 hover:border-white/10 active:scale-[0.98] transition-premium group">
                <div className={`w-[52px] h-[52px] rounded-2xl bg-gradient-to-br ${venture.bg} flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-white text-[24px]">{venture.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-[16px] truncate text-white mb-0.5">{venture.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.05em] opacity-70">{venture.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-[13px] font-bold text-secondary flex items-center justify-end gap-1 mb-0.5">
                    <span className="material-symbols-outlined text-[14px]">trending_up</span>
                    {venture.split}
                  </div>
                  <p className="text-[11px] text-slate-500 font-bold tracking-tight">{venture.growth}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </MobileLayout>
  );
};

export default InvestmentPortal;
