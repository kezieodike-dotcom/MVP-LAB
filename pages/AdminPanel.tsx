
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';

const AdminPanel: React.FC = () => {
    const [activeTab, setActiveTab] = useState('Overview');

    const stats = [
        { label: 'Market Cap', val: '$420.5M', trend: '+12%', color: 'primary' },
        { label: 'Ecosystem TVL', val: '$85.2M', trend: '+5.4%', color: 'secondary' },
        { label: 'Escrow Pool', val: '$12.4M', trend: '-2%', color: 'blue-400' },
        { label: 'Active Projects', val: '1,248', trend: '+124', color: 'accent-purple' }
    ];

    const approvalQueue = [
        { name: 'Quantum Ledger', type: 'FinTech', user: '@janesmith', status: 'Pending Review', id: 'QN-904' },
        { name: 'SkyNet Bot', type: 'SaaS', user: '@dev_ops', status: 'KYC Verification', id: 'SK-213' }
    ];

    return (
        <MobileLayout activeTab="admin">
            <div className="px-[32px] pt-[48px] pb-[120px]">
                <header className="mb-[40px]">
                    <div className="flex justify-between items-center mb-[32px]">
                        <div className="flex items-center gap-[16px]">
                            <div className="w-[48px] h-[48px] rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                                <span className="material-symbols-outlined text-[24px]">security</span>
                            </div>
                            <div>
                                <h1 className="text-[24px] font-bold tracking-[-0.02em] leading-tight text-white">Ecosystem Control</h1>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.08em] opacity-70">Level 5 Clearance Active</p>
                            </div>
                        </div>
                        <button className="w-[48px] h-[48px] rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-premium">
                            <span className="material-symbols-outlined text-[20px]">tune</span>
                        </button>
                    </div>

                    <div className="flex gap-2 p-1.5 bg-white/5 rounded-2xl border border-white/5 mb-[48px]">
                        {['Overview', 'Projects', 'Wallets', 'Users'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 h-[40px] text-[11px] font-bold rounded-xl transition-premium ${activeTab === tab ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="glass p-[24px] rounded-[2rem] border-white/5">
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.08em] mb-2 opacity-70">{stat.label}</p>
                                <div className="flex justify-between items-end">
                                    <p className="text-[20px] font-bold tracking-tight text-white">{stat.val}</p>
                                    <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-secondary' : 'text-red-400'}`}>
                                        {stat.trend}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </header>

                <section className="mb-[48px]">
                    <div className="flex justify-between items-center mb-4 px-1">
                        <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] opacity-70">Approval Queue</h2>
                        <span className="px-[12px] py-[4px] rounded-full bg-red-500 text-white text-[10px] font-bold uppercase tracking-[0.05em] shadow-lg shadow-red-500/20">Action Required</span>
                    </div>
                    <div className="space-y-[16px]">
                        {approvalQueue.map((item, i) => (
                            <div key={i} className="glass p-[20px] rounded-[2rem] border-white/5 flex items-center gap-[16px] hover:border-white/10 transition-premium">
                                <div className="w-[48px] h-[48px] rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-bold text-[14px]">
                                    {item.id}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-[15px] truncate text-white">{item.name}</h4>
                                    <p className="text-[11px] text-slate-500 font-medium">By {item.user} • {item.type}</p>
                                </div>
                                <button className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white px-[16px] py-[10px] rounded-xl text-[12px] font-bold transition-premium">
                                    Review
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-[48px]">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] mb-4 px-1 opacity-70">Direct System Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { label: 'Freeze Global Pool', icon: 'ac_unit', color: 'red-500' },
                            { label: 'Audit Ledger', icon: 'account_tree', color: 'primary' },
                            { label: 'Emergency Msg', icon: 'campaign', color: 'amber-500' },
                            { label: 'API Maintenance', icon: 'engineering', color: 'blue-500' }
                        ].map((action, i) => (
                            <button key={i} className="glass p-[24px] rounded-[2rem] border-white/5 flex flex-col items-center gap-[16px] hover:border-white/10 active:scale-95 transition-premium group">
                                <div className={`w-[52px] h-[52px] rounded-2xl bg-${action.color}/10 border border-${action.color}/20 flex items-center justify-center text-${action.color} group-hover:scale-110 transition-transform duration-500`}>
                                    <span className="material-symbols-outlined text-[28px]">{action.icon}</span>
                                </div>
                                <span className="text-[11px] font-bold text-slate-300 text-center leading-tight uppercase tracking-[0.02em]">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <div className="bg-orange-500/10 border border-orange-500/20 p-[24px] rounded-[2rem] flex gap-4 items-start shadow-xl shadow-orange-500/5">
                    <span className="material-symbols-outlined text-orange-500 text-[24px] shrink-0">warning</span>
                    <p className="text-[13px] text-orange-200/70 leading-relaxed font-medium">
                        System Alert: Database load is currently at 85%. Automated optimization routines have been initialized.
                    </p>
                </div>
            </div>
        </MobileLayout>
    );
};

export default AdminPanel;
