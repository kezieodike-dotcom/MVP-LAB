
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';
import { MarketplaceApp } from '../types';

const Marketplace: React.FC = () => {
    const [search, setSearch] = useState('');

    const featuredApps: MarketplaceApp[] = [
        {
            id: '1',
            name: 'Nexus Analytics',
            description: 'AI-driven predictive market analysis for retail sectors.',
            price: '$12,500',
            valuation: '$850k',
            revenue: '$2.4k/mo',
            status: 'live',
            category: 'FinTech',
            img: 'https://picsum.photos/seed/nxs/400/200'
        },
        {
            id: '2',
            name: 'BioSync AI',
            description: 'Neural network for personalized health optimization.',
            price: '$45,000',
            valuation: '$2.1M',
            revenue: '$8.2k/mo',
            status: 'live',
            category: 'HealthTech',
            img: 'https://picsum.photos/seed/bio/400/200'
        }
    ];

    const categories = ['All', 'FinTech', 'SaaS', 'HealthTech', 'AI Models', 'Social'];

    return (
        <MobileLayout activeTab="marketplace">
            <div className="px-[32px] pt-[48px] pb-[120px]">
                <header className="mb-[40px]">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-primary text-[28px]">storefront</span>
                        <h1 className="text-[28px] font-bold tracking-[-0.02em] leading-tight text-white">App Marketplace</h1>
                    </div>
                    <p className="text-[14px] text-slate-500 font-medium leading-[1.6]">Acquire validated AI ventures or co-invest in early-stage growth.</p>
                </header>

                {/* Featured App */}
                <section className="mb-[48px]">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] mb-4 opacity-70 px-1">Featured Listing</h2>
                    <div className="glass rounded-[2.5rem] overflow-hidden border-white/5 group hover:border-white/10 transition-premium shadow-3xl">
                        <div className="relative h-[240px]">
                            <img src={featuredApps[0].img} alt={featuredApps[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"></div>
                            <div className="absolute top-6 left-6 bg-primary/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-white uppercase tracking-[0.08em] shadow-lg shadow-primary/20">
                                Trending
                            </div>
                        </div>
                        <div className="p-[32px]">
                            <div className="flex justify-between items-start mb-6">
                                <h3 className="text-[24px] font-bold text-white tracking-tight">{featuredApps[0].name}</h3>
                                <span className="text-[20px] font-bold text-primary tracking-tighter">{featuredApps[0].price}</span>
                            </div>
                            <p className="text-[14px] text-slate-400 mb-[32px] leading-[1.6]">
                                {featuredApps[0].description}
                            </p>
                            <div className="grid grid-cols-3 gap-3 mb-[32px]">
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.05em] mb-1 opacity-70">Valuation</p>
                                    <p className="text-[13px] font-bold text-white">{featuredApps[0].valuation}</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.05em] mb-1 opacity-70">Revenue</p>
                                    <p className="text-[13px] font-bold text-white">{featuredApps[0].revenue}</p>
                                </div>
                                <div className="bg-white/5 rounded-2xl p-4 border border-white/10">
                                    <p className="text-[9px] text-slate-500 uppercase font-bold tracking-[0.05em] mb-1 opacity-70">Status</p>
                                    <p className="text-[13px] font-bold uppercase text-secondary">{featuredApps[0].status}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <button className="flex-1 h-[56px] bg-white text-black rounded-xl text-[14px] font-bold hover:bg-slate-200 active:scale-95 transition-premium shadow-xl">
                                    Full Purchase
                                </button>
                                <button className="flex-1 h-[56px] bg-white/5 border border-white/10 text-white rounded-xl text-[14px] font-bold hover:bg-white/10 active:scale-95 transition-premium">
                                    Co-Invest
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search & Categories */}
                <section className="mb-[48px]">
                    <div className="relative mb-8 group">
                        <span className="material-symbols-outlined absolute left-[20px] top-1/2 -translate-y-1/2 text-slate-500 text-[20px] group-focus-within:text-primary transition-colors transition-premium">search</span>
                        <input
                            type="text"
                            placeholder="Searchventures..."
                            className="w-full h-[56px] bg-white/5 border border-white/10 rounded-2xl pl-[56px] pr-[24px] text-[14px] focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-premium text-white placeholder-slate-500 outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-3 overflow-x-auto no-scrollbar -mx-[32px] px-[32px] pb-[8px]">
                        {categories.map((cat, i) => (
                            <button key={i} className={`px-8 h-[44px] rounded-full text-[12px] font-bold whitespace-nowrap border transition-premium ${i === 0 ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 border-white/5 text-slate-500 hover:text-white'
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Listings */}
                <section>
                    <div className="flex justify-between items-center mb-6 px-1">
                        <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] opacity-70">Market Feed</h2>
                        <button className="text-[11px] text-primary font-bold uppercase tracking-[0.05em] hover:opacity-80 transition-premium">Filter by ROI</button>
                    </div>
                    <div className="space-y-[16px]">
                        {featuredApps.map((app) => (
                            <div key={app.id} className="glass p-[20px] rounded-[2.5rem] border-white/5 flex gap-[20px] items-center hover:border-white/10 active:scale-[0.98] transition-premium group">
                                <div className="w-[64px] h-[64px] rounded-[1.5rem] overflow-hidden shrink-0 border border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-xl">
                                    <img src={app.img} alt={app.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-[16px] truncate text-white mb-1">{app.name}</h4>
                                    <div className="flex items-center gap-2.5">
                                        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.05em] bg-white/5 px-3 py-1 rounded-full border border-white/5">{app.category}</span>
                                        <span className="text-[11px] font-bold text-secondary">{app.revenue}</span>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-[16px] font-bold text-white tracking-tight">{app.price}</p>
                                    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.05em] mt-1 opacity-70">Acquisition</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </MobileLayout>
    );
};

export default Marketplace;
