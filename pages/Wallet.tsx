
import React from 'react';
import MobileLayout from '../components/MobileLayout';

const Wallet: React.FC = () => {
  return (
    <MobileLayout activeTab="wallet">
      <div className="px-6 pt-12">
        <header className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-primary text-xl">account_balance_wallet</span>
            </div>
            <h1 className="text-lg font-semibold tracking-tight">Ecosystem Wallet</h1>
          </div>
          <div className="flex items-center gap-2 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-[9px] font-bold text-emerald-500 uppercase tracking-widest">2FA Active</span>
          </div>
        </header>

        <section className="mb-12 text-center">
          <p className="text-slate-500 text-xs mb-2">Total Balance</p>
          <div className="flex items-center justify-center gap-1 mb-8">
            <span className="text-2xl font-light text-slate-400">$</span>
            <span className="text-4xl font-bold tracking-tight text-white font-mono">124,850.00</span>
          </div>
          <div className="flex gap-3 justify-center">
            <button className="bg-gradient-to-r from-primary to-accent-purple text-white px-8 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 shadow-lg shadow-primary/20 transition-transform active:scale-95">
              <span className="material-symbols-outlined text-lg">add_circle</span>
              Deposit
            </button>
            <button className="glass px-8 py-3.5 rounded-2xl text-sm font-bold flex items-center gap-2 transition-transform active:scale-95 text-white border-white/10">
              <span className="material-symbols-outlined text-lg">file_upload</span>
              Withdraw
            </button>
          </div>
        </section>

        <section className="space-y-3 mb-10">
          {[
            { label: 'Available', amount: '$42,300.00', icon: 'payments', color: 'blue-500' },
            { label: 'Escrow (Pending Projects)', amount: '$12,550.00', icon: 'pending_actions', color: 'amber-500' },
            { label: 'Locked (Active Investments)', amount: '$70,000.00', icon: 'lock', color: 'primary' }
          ].map((item, i) => (
            <div key={i} className="glass p-5 rounded-3xl flex items-center justify-between border-white/5 hover:bg-white/5 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl bg-${item.color}/10 flex items-center justify-center text-${item.color}`}>
                  <span className="material-symbols-outlined">{item.icon}</span>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.label}</p>
                  <p className="text-lg font-bold font-mono text-white">{item.amount}</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-slate-600">chevron_right</span>
            </div>
          ))}
        </section>

        <div className="flex items-center justify-between mb-6 px-1">
          <h2 className="text-lg font-bold">Transaction History</h2>
          <button className="text-primary text-xs font-bold uppercase tracking-wider">View All</button>
        </div>

        <section className="space-y-6 pb-8">
          {[
            { name: "Revenue Split", sub: "Nexus Engine MVP", amount: "+$2,450.00", date: "Oct 24, 2023", status: "success", img: "https://picsum.photos/seed/nxs/100/100" },
            { name: "Milestone Release", sub: "Alpha Labs UI", amount: "-$5,000.00", date: "Oct 22, 2023", status: "pending", img: "https://picsum.photos/seed/alp/100/100" },
            { name: "Investment", sub: "Ivy Analytics", amount: "+$15,000.00", date: "Oct 19, 2023", status: "success", img: "https://picsum.photos/seed/ivy/100/100" }
          ].map((tx, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center relative">
                  <img alt="Icon" className="w-8 h-8 rounded-lg object-cover" src={tx.img} />
                  <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-background-dark flex items-center justify-center ${tx.status === 'success' ? 'bg-emerald-500' : 'bg-amber-500'}`}>
                    <span className="material-symbols-outlined text-[10px] text-white font-bold">
                      {tx.status === 'success' ? 'check' : 'schedule'}
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-xs">{tx.name}</h4>
                  <p className="text-[10px] text-slate-500 uppercase tracking-wider font-medium">{tx.sub}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-xs font-bold font-mono ${tx.amount.startsWith('+') ? 'text-emerald-500' : 'text-slate-300'}`}>
                  {tx.amount}
                </p>
                <p className="text-[9px] text-slate-600 mt-1">{tx.date}</p>
              </div>
            </div>
          ))}
        </section>

        <div className="mt-8 flex justify-center pb-10">
          <div className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/5 rounded-full">
            <span className="material-symbols-outlined text-primary text-xs">verified_user</span>
            <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Secure Audit Trail Verified</span>
          </div>
        </div>
      </div>
      
      {/* Top Banner Shield */}
      <div className="fixed top-5 left-1/2 -translate-x-1/2 flex items-center gap-2 glass px-4 py-1.5 rounded-full border border-white/10 z-[100] scale-75 opacity-80">
        <span className="material-symbols-outlined text-xs text-primary">security</span>
        <span className="text-[10px] font-semibold text-slate-300 tracking-wider">SECURED BY MVP-SHIELD</span>
      </div>
    </MobileLayout>
  );
};

export default Wallet;
