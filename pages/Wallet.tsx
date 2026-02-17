
import React from 'react';
import MobileLayout from '../components/MobileLayout';

const Wallet: React.FC = () => {
  return (
    <MobileLayout activeTab="wallet">
      <div className="px-[32px] pt-[48px] pb-[120px]">
        <header className="flex justify-between items-center mb-[48px]">
          <div className="flex items-center gap-3">
            <div className="w-[48px] h-[48px] rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/5">
              <span className="material-symbols-outlined text-[28px]">account_balance_wallet</span>
            </div>
            <h1 className="text-[20px] font-bold tracking-tight text-white">Ecosystem Wallet</h1>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-4 py-1.5 rounded-full border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.08em]">2FA Active</span>
          </div>
        </header>

        <section className="mb-[64px] text-center">
          <p className="text-slate-500 text-[12px] font-bold uppercase tracking-[0.08em] mb-4 opacity-70">Total Available Balance</p>
          <div className="flex items-baseline justify-center gap-1 mb-[40px]">
            <span className="text-[24px] font-bold text-slate-500 tracking-tighter">$</span>
            <span className="text-[48px] font-bold tracking-tighter text-white">124,850.00</span>
          </div>
          <div className="flex gap-4 justify-center">
            <button className="h-[56px] flex-1 bg-primary text-white rounded-xl text-[14px] font-bold flex items-center justify-center gap-3 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-premium">
              <span className="material-symbols-outlined text-[20px]">add_circle</span>
              Deposit
            </button>
            <button className="h-[56px] flex-1 glass rounded-xl text-[14px] font-bold flex items-center justify-center gap-3 hover:bg-white/5 active:scale-95 transition-premium text-white border-white/10">
              <span className="material-symbols-outlined text-[20px]">file_upload</span>
              Withdraw
            </button>
          </div>
        </section>

        <section className="space-y-[16px] mb-[64px]">
          {[
            { label: 'Available', amount: '$42,300.00', icon: 'payments', color: 'blue-500' },
            { label: 'Escrow (Pending Projects)', amount: '$12,550.00', icon: 'pending_actions', color: 'amber-500' },
            { label: 'Locked (Active Investments)', amount: '$70,000.00', icon: 'lock', color: 'primary' }
          ].map((item, i) => (
            <div key={i} className="glass p-[24px] rounded-[2rem] flex items-center justify-between border-white/5 hover:border-white/10 transition-premium group active:scale-[0.98]">
              <div className="flex items-center gap-[20px]">
                <div className={`w-[48px] h-[48px] rounded-2xl bg-${item.color}/10 border border-${item.color}/20 flex items-center justify-center text-${item.color} group-hover:scale-110 transition-transform duration-500`}>
                  <span className="material-symbols-outlined text-[24px]">{item.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.05em] mb-1 opacity-70">{item.label}</p>
                  <p className="text-[18px] font-bold text-white tracking-tight">{item.amount}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-600 group-hover:text-white transition-colors">chevron_right</span>
            </div>
          ))}
        </section>

        <div className="flex items-center justify-between mb-8 px-1">
          <h2 className="text-[18px] font-bold text-white tracking-tight">Recent Activity</h2>
          <button className="text-primary text-[11px] font-bold uppercase tracking-[0.05em] hover:opacity-80 transition-premium">View All</button>
        </div>

        <section className="space-y-[24px] pb-8">
          {[
            { name: "Revenue Split", sub: "Nexus Engine MVP", amount: "+$2,450.00", date: "Oct 24, 2023", status: "success", img: "https://picsum.photos/seed/nxs/100/100" },
            { name: "Milestone Release", sub: "Alpha Labs UI", amount: "-$5,000.00", date: "Oct 22, 2023", status: "pending", img: "https://picsum.photos/seed/alp/100/100" },
            { name: "Investment", sub: "Ivy Analytics", amount: "+$15,000.00", date: "Oct 19, 2023", status: "success", img: "https://picsum.photos/seed/ivy/100/100" }
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between group hover:opacity-80 transition-premium cursor-pointer">
              <div className="flex items-center gap-[16px]">
                <div className="w-[56px] h-[56px] rounded-[1.25rem] bg-white/5 border border-white/10 flex items-center justify-center relative shadow-xl">
                  <img alt="Icon" className="w-[32px] h-[32px] rounded-lg object-cover" src={tx.img} />
                  <div className={`absolute -bottom-1 -right-1 w-[18px] h-[18px] rounded-full border-2 border-[#0A0A0F] flex items-center justify-center ${tx.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500 shadow-[0_0_10px_rgba(251,191,36,0.5)]'}`}>
                    <span className="material-symbols-outlined text-[10px] text-white font-bold">
                      {tx.status === 'success' ? 'check' : 'schedule'}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-[14px] text-white mb-0.5">{tx.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.05em] font-bold opacity-70">{tx.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[15px] font-bold ${tx.amount.startsWith('+') ? 'text-emerald-500' : 'text-slate-300'}`}>
                  {tx.amount}
                </p>
                <p className="text-[11px] text-slate-600 font-medium mt-1">{tx.date}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-[64px] flex justify-center pb-[40px]">
          <div className="flex items-center gap-2.5 px-6 py-2.5 bg-white/5 border border-white/10 rounded-full shadow-lg">
            <span className="material-symbols-outlined text-primary text-[16px]">verified_user</span>
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.08em] opacity-80">Secure Audit Trail Verified</span>
          </div>
        </div>
      </div>

      {/* Top Banner Shield */}
      <div className="fixed top-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 glass px-4 py-2 rounded-full border border-primary/20 z-[100] shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)] animate-float">
        <span className="material-symbols-outlined text-[14px] text-primary">security</span>
        <span className="text-[10px] font-bold text-slate-300 tracking-[0.1em] uppercase">Secured by MVP-Shield</span>
      </div>
    </MobileLayout>
  );
};

export default Wallet;
