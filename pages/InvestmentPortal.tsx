
import React from 'react';
import MobileLayout from '../components/MobileLayout';

const InvestmentPortal: React.FC = () => {
  return (
    <MobileLayout activeTab="invest">
      <header className="px-6 pt-12 pb-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-20">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-xl font-bold tracking-tight">AI Investment</h1>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="material-icons-round text-secondary text-sm">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-secondary">KYC Verified</span>
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-purple-400 p-0.5 border border-white/10">
            <img 
              alt="User Profile" 
              className="w-full h-full object-cover rounded-full" 
              src="https://picsum.photos/seed/user2/100/100"
            />
          </div>
        </div>

        <div className="p-6 rounded-3xl bg-gradient-to-br from-primary to-indigo-600 text-white shadow-xl shadow-primary/20">
          <p className="text-xs opacity-80 mb-1">Total Portfolio Value</p>
          <div className="flex justify-between items-center">
            <h3 className="text-2xl font-bold">$124,500.00</h3>
            <div className="px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-[10px] font-bold">+12.4%</div>
          </div>
        </div>
      </header>

      <div className="px-6 space-y-8 mt-6">
        {/* Featured Opportunities */}
        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Featured</h2>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
          <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
            {[
              { name: "CogniAL", tag: "Generative AI", desc: "Predictive data analysis for SaaS.", val: "$2.4M", goal: 87, icon: "auto_awesome", color: "primary" },
              { name: "NeuralSync", tag: "NeuroTech", desc: "Brain-computer interface for focus.", val: "$1.8M", goal: 42, icon: "psychology", color: "secondary" }
            ].map((opp, i) => (
              <div key={i} className="flex-shrink-0 w-64 glass p-6 rounded-[2rem] border-white/10 relative overflow-hidden group">
                <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${opp.color}/10 rounded-full blur-3xl group-hover:bg-${opp.color}/20 transition-all`}></div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-white/5 flex items-center justify-center">
                    <span className={`material-icons-round text-${opp.color} text-xl`}>{opp.icon}</span>
                  </div>
                  <span className={`px-2 py-1 rounded-full bg-${opp.color}/10 text-${opp.color} text-[8px] font-bold uppercase`}>{opp.tag}</span>
                </div>
                <h3 className="text-lg font-bold mb-1">{opp.name}</h3>
                <p className="text-[11px] text-slate-400 mb-6 leading-relaxed">{opp.desc}</p>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-[10px]">
                    <span className="text-slate-500">Valuation</span>
                    <span className="font-bold">{opp.val}</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px]">
                      <span className="text-slate-500">Goal</span>
                      <span className="text-secondary font-bold">{opp.goal}%</span>
                    </div>
                    <div className="w-full h-1 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-secondary" style={{ width: `${opp.goal}%` }}></div>
                    </div>
                  </div>
                </div>
                <button className="w-full py-2.5 rounded-2xl bg-primary text-white font-bold text-xs hover:bg-primary/90 transition-all">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Search & Filter */}
        <section>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <span className="material-icons-round absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 text-lg">search</span>
              <input 
                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border-white/5 rounded-2xl text-xs focus:ring-primary focus:border-primary text-white placeholder-slate-500" 
                placeholder="Search ventures..." 
                type="text" 
              />
            </div>
            <button className="w-12 h-12 flex items-center justify-center bg-white/5 border border-white/5 rounded-2xl text-slate-400">
              <span className="material-icons-round">tune</span>
            </button>
          </div>
        </section>

        {/* Available Ventures List */}
        <section className="pb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Ventures</h2>
            <span className="text-[10px] text-slate-500">24 results</span>
          </div>
          <div className="space-y-3">
            {[
              { name: "DataFlow AI", category: "B2B Middleware", split: "25% Split", growth: "+18% Growth", icon: "dataset", bg: "from-blue-500 to-indigo-600" },
              { name: "VisionCore", category: "Computer Vision", split: "15% Split", growth: "+32% Growth", icon: "camera", bg: "from-pink-500 to-rose-600" },
              { name: "SecureBot", category: "Cybersecurity", split: "20% Split", growth: "+12% Growth", icon: "security", bg: "from-amber-500 to-orange-600" }
            ].map((venture, i) => (
              <div key={i} className="flex items-center gap-4 p-4 rounded-3xl glass border-white/5 active:bg-white/[0.02] transition-colors">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${venture.bg} flex items-center justify-center shadow-lg`}>
                  <span className="material-icons-round text-white">{venture.icon}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-sm truncate">{venture.name}</h4>
                  <p className="text-[9px] text-slate-400 uppercase font-semibold tracking-wider">{venture.category}</p>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-bold text-secondary flex items-center justify-end gap-1">
                    <span className="material-icons-round text-xs">trending_up</span>
                    {venture.split}
                  </div>
                  <p className="text-[9px] text-slate-500">{venture.growth}</p>
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
