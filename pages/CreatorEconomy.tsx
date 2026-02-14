
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';

const CreatorEconomy: React.FC = () => {
    const [activeSegment, setActiveSegment] = useState<'campaigns' | 'my-content'>('campaigns');

    const campaigns = [
        { title: 'Nexus UI Promotion', reward: '$1,200', views: '50k+', status: 'Active', icon: 'auto_videocam' },
        { title: 'BioSync Case Study', reward: '$2,500', views: '120k+', status: 'High Yield', icon: 'description' }
    ];

    return (
        <MobileLayout activeTab="creator">
            <div className="px-6 pt-12 pb-24">
                <header className="mb-10">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-xl font-bold tracking-tight">Creator Portal</h1>
                        <div className="bg-primary/10 border border-primary/20 px-3 py-1 rounded-full flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Top Tier</span>
                        </div>
                    </div>

                    <div className="glass p-6 rounded-[2.5rem] bg-gradient-to-br from-background-dark to-white/5 border-white/10">
                        <div className="flex justify-between items-end mb-4">
                            <div>
                                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Total Creator Earnings</p>
                                <h3 className="text-3xl font-bold font-mono">$12,840.45</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-[10px] text-secondary font-bold">+15% this Month</p>
                            </div>
                        </div>
                        <button className="w-full bg-primary py-3 rounded-2xl text-[11px] font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all">
                            Withdraw to Ecosystem Wallet
                        </button>
                    </div>
                </header>

                <div className="flex p-1 bg-white/5 rounded-2xl border border-white/5 mb-10">
                    <button
                        onClick={() => setActiveSegment('campaigns')}
                        className={`flex-1 py-3 text-[10px] font-bold rounded-xl transition-all ${activeSegment === 'campaigns' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500'
                            }`}
                    >
                        Open Campaigns
                    </button>
                    <button
                        onClick={() => setActiveSegment('my-content')}
                        className={`flex-1 py-3 text-[10px] font-bold rounded-xl transition-all ${activeSegment === 'my-content' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500'
                            }`}
                    >
                        My Performance
                    </button>
                </div>

                <section className="space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                            {activeSegment === 'campaigns' ? 'Trending Content Tasks' : 'Content Analytics'}
                        </h2>
                        <span className="material-symbols-outlined text-slate-600 text-lg">filter_alt</span>
                    </div>

                    <div className="space-y-4">
                        {campaigns.map((camp, i) => (
                            <div key={i} className="glass p-6 rounded-3xl border-white/10 relative overflow-hidden group">
                                <div className="flex justify-between items-start mb-6 relative z-10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                            <span className="material-symbols-outlined">{camp.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm tracking-tight">{camp.title}</h4>
                                            <p className="text-[10px] text-slate-500 font-medium">Bounty: <span className="text-white font-mono">{camp.reward}</span></p>
                                        </div>
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full bg-secondary/10 text-secondary text-[8px] font-bold uppercase tracking-widest border border-secondary/20">
                                        {camp.status}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-4 bg-black/40 rounded-2xl border border-white/5">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[10px] text-slate-500">visibility</span>
                                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Entry Views Req.</span>
                                    </div>
                                    <span className="text-xs font-bold font-mono text-white">{camp.views}</span>
                                </div>

                                <button className="w-full mt-4 bg-white/5 border border-white/10 py-3 rounded-2xl text-[10px] font-bold hover:bg-white/10 transition-colors">
                                    Submit Content Draft
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-12 text-center pb-8 px-8">
                    <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4 border border-white/5 text-slate-600">
                        <span className="material-symbols-outlined">add</span>
                    </div>
                    <p className="text-sm font-bold text-slate-300">Creator Partner Program</p>
                    <p className="text-[10px] text-slate-500 mt-2 leading-relaxed">
                        Apply to become a verified MVP Lab creator and unlock high-yield revenue sharing and direct brand access.
                    </p>
                </section>
            </div>
        </MobileLayout>
    );
};

export default CreatorEconomy;
