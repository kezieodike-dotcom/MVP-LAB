
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
            <div className="px-[32px] pt-[48px] pb-[120px]">
                <header className="mb-[40px]">
                    <div className="flex justify-between items-center mb-[32px]">
                        <h1 className="text-[28px] font-bold tracking-[-0.02em] leading-tight text-white">Creator Portal</h1>
                        <div className="bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                            <span className="text-[10px] font-bold text-primary uppercase tracking-[0.08em]">Top Tier</span>
                        </div>
                    </div>

                    <div className="glass p-[32px] rounded-[2.5rem] bg-gradient-to-br from-[#0A0A0F] to-white/5 border-white/5 shadow-3xl">
                        <div className="flex justify-between items-end mb-[32px]">
                            <div>
                                <p className="text-[11px] text-slate-500 font-bold uppercase tracking-[0.08em] mb-2 opacity-70">Total Creator Earnings</p>
                                <h3 className="text-[32px] font-bold tracking-tight text-white">$12,840.45</h3>
                            </div>
                            <div className="text-right">
                                <p className="text-[12px] font-bold text-secondary">+15% this Month</p>
                            </div>
                        </div>
                        <button className="h-[56px] w-full bg-primary text-white rounded-xl text-[14px] font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-premium">
                            Withdraw to Ecosystem Wallet
                        </button>
                    </div>
                </header>

                <div className="flex p-1.5 bg-white/5 rounded-2xl border border-white/10 mb-[48px]">
                    <button
                        onClick={() => setActiveSegment('campaigns')}
                        className={`flex-1 h-[44px] text-[12px] font-bold rounded-xl transition-premium ${activeSegment === 'campaigns' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white'
                            }`}
                    >
                        Open Campaigns
                    </button>
                    <button
                        onClick={() => setActiveSegment('my-content')}
                        className={`flex-1 h-[44px] text-[12px] font-bold rounded-xl transition-premium ${activeSegment === 'my-content' ? 'bg-white/10 text-white shadow-inner' : 'text-slate-500 hover:text-white'
                            }`}
                    >
                        My Performance
                    </button>
                </div>

                <section className="space-y-[32px]">
                    <div className="flex justify-between items-center">
                        <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] opacity-70">
                            {activeSegment === 'campaigns' ? 'Trending Content Tasks' : 'Content Analytics'}
                        </h2>
                        <button className="w-[40px] h-[40px] rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-premium">
                            <span className="material-symbols-outlined text-[20px]">filter_alt</span>
                        </button>
                    </div>

                    <div className="space-y-[24px]">
                        {campaigns.map((camp, i) => (
                            <div key={i} className="glass p-[32px] rounded-[2.5rem] border-white/5 relative overflow-hidden group hover:border-white/10 transition-premium">
                                <div className="flex justify-between items-start mb-[24px] relative z-10">
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-[56px] h-[56px] rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
                                            <span className="material-symbols-outlined text-[28px]">{camp.icon}</span>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[18px] tracking-tight text-white mb-1">{camp.title}</h4>
                                            <p className="text-[12px] text-slate-500 font-medium">Bounty: <span className="text-white font-bold">{camp.reward}</span></p>
                                        </div>
                                    </div>
                                    <span className="px-[12px] py-[4px] rounded-full bg-secondary/10 text-secondary text-[10px] font-bold uppercase tracking-[0.05em] border border-secondary/20">
                                        {camp.status}
                                    </span>
                                </div>

                                <div className="flex items-center justify-between p-[24px] bg-black/40 rounded-[1.5rem] border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <span className="material-symbols-outlined text-[16px] text-slate-500">visibility</span>
                                        <span className="text-[11px] text-slate-400 font-bold uppercase tracking-[0.05em]">Entry Views Req.</span>
                                    </div>
                                    <span className="text-[14px] font-bold text-white">{camp.views}</span>
                                </div>

                                <button className="h-[52px] w-full mt-[24px] bg-white/5 border border-white/10 rounded-xl text-[13px] font-bold hover:bg-white/10 transition-premium">
                                    Submit Content Draft
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mt-[64px] text-center pb-[40px] px-8">
                    <button className="w-[56px] h-[56px] bg-white/5 rounded-full flex items-center justify-center mx-auto mb-[24px] border border-white/10 text-slate-500 hover:text-white hover:border-white/20 transition-premium">
                        <span className="material-symbols-outlined text-[24px]">add</span>
                    </button>
                    <p className="text-[18px] font-bold text-slate-300 mb-2">Creator Partner Program</p>
                    <p className="text-[12px] text-slate-500 leading-[1.6] max-w-xs mx-auto">
                        Apply to become a verified MVP Lab creator and unlock high-yield revenue sharing and direct brand access.
                    </p>
                </section>
            </div>
        </MobileLayout>
    );
};

export default CreatorEconomy;
