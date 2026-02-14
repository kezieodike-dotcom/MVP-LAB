
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
            <div className="px-6 pt-12 pb-24">
                <header className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-2xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-500">
                                <span className="material-symbols-outlined">security</span>
                            </div>
                            <div>
                                <h1 className="text-xl font-bold tracking-tight">Ecosystem Control</h1>
                                <p className="text-[9px] text-slate-500 font-bold uppercase tracking-widest">Level 5 Clearance Active</p>
                            </div>
                        </div>
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400">
                            <span className="material-symbols-outlined">tune</span>
                        </button>
                    </div>

                    <div className="flex gap-2 p-1 bg-white/5 rounded-2xl border border-white/5 mb-8">
                        {['Overview', 'Projects', 'Wallets', 'Users'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`flex-1 py-3 text-[10px] font-bold rounded-xl transition-all ${activeTab === tab ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500'
                                    }`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="glass p-5 rounded-3xl border-white/5">
                                <p className="text-[8px] text-slate-500 font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                                <div className="flex justify-between items-end">
                                    <p className="text-lg font-bold font-mono">{stat.val}</p>
                                    <span className={`text-[8px] font-bold ${stat.trend.startsWith('+') ? 'text-secondary' : 'text-red-400'}`}>
                                        {stat.trend}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </header>

                <section className="mb-10">
                    <div className="flex justify-between items-center mb-4 px-1">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Approval Queue</h2>
                        <span className="px-2 py-0.5 rounded-full bg-red-500 text-white text-[8px] font-bold uppercase tracking-widest">Action Required</span>
                    </div>
                    <div className="space-y-3">
                        {approvalQueue.map((item, i) => (
                            <div key={i} className="glass p-4 rounded-3xl border-white/5 flex items-center gap-4">
                                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-primary font-bold text-xs font-mono">
                                    {item.id}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-xs truncate">{item.name}</h4>
                                    <p className="text-[9px] text-slate-500 font-medium">By {item.user} • {item.type}</p>
                                </div>
                                <button className="bg-primary/20 text-primary border border-primary/30 px-3 py-1.5 rounded-xl text-[10px] font-bold">
                                    Review
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-10">
                    <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">Direct System Actions</h2>
                    <div className="grid grid-cols-2 gap-3">
                        {[
                            { label: 'Freeze Global Pool', icon: 'ac_unit', color: 'red-500' },
                            { label: 'Audit Ledger', icon: 'account_tree', color: 'primary' },
                            { label: 'Emergency Msg', icon: 'campaign', color: 'amber-500' },
                            { label: 'API Maintenance', icon: 'engineering', color: 'blue-500' }
                        ].map((action, i) => (
                            <button key={i} className="glass p-4 rounded-3xl border-white/5 flex flex-col items-center gap-3 active:bg-white/10 transition-colors">
                                <div className={`w-10 h-10 rounded-2xl bg-${action.color}/10 border border-${action.color}/20 flex items-center justify-center text-${action.color}`}>
                                    <span className="material-symbols-outlined">{action.icon}</span>
                                </div>
                                <span className="text-[9px] font-bold text-slate-300 text-center leading-tight">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </section>

                <div className="bg-orange-500/10 border border-orange-500/20 p-4 rounded-2xl flex gap-3 items-start">
                    <span className="material-symbols-outlined text-orange-500 text-lg shrink-0">warning</span>
                    <p className="text-[10px] text-orange-200/70 leading-relaxed font-medium">
                        System Alert: Database load is currently at 85%. Automated optimization routines have been initialized.
                    </p>
                </div>
            </div>
        </MobileLayout>
    );
};

export default AdminPanel;
