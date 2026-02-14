
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
            <div className="px-6 pt-12 pb-24">
                <header className="mb-8">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary">storefront</span>
                        <h1 className="text-xl font-bold tracking-tight">App Marketplace</h1>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Acquire validated AI ventures or co-invest in early-stage growth.</p>
                </header>

                {/* Featured App */}
                <section className="mb-10">
                    <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Featured Listing</h2>
                    <div className="glass rounded-[2rem] overflow-hidden border-white/10 group active:scale-[0.98] transition-all">
                        <div className="relative h-48">
                            <img src={featuredApps[0].img} alt={featuredApps[0].name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                            <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                                Trending
                            </div>
                        </div>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-xl font-bold">{featuredApps[0].name}</h3>
                                <span className="text-lg font-bold text-primary font-mono">{featuredApps[0].price}</span>
                            </div>
                            <p className="text-xs text-slate-400 mb-6 leading-relaxed line-clamp-2">
                                {featuredApps[0].description}
                            </p>
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                    <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Valuation</p>
                                    <p className="text-xs font-bold font-mono">{featuredApps[0].valuation}</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                                    <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Revenue</p>
                                    <p className="text-xs font-bold font-mono">{featuredApps[0].revenue}</p>
                                </div>
                                <div className="bg-white/5 rounded-xl p-3 border border-white/5 text-secondary">
                                    <p className="text-[8px] text-slate-500 uppercase font-bold mb-1">Status</p>
                                    <p className="text-xs font-bold uppercase">{featuredApps[0].status}</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex-1 bg-white text-black py-3 rounded-2xl text-xs font-bold hover:bg-slate-200 transition-colors">
                                    Full Purchase
                                </button>
                                <button className="flex-1 bg-white/5 border border-white/10 text-white py-3 rounded-2xl text-xs font-bold hover:bg-white/10 transition-colors">
                                    Co-Invest
                                </button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Search & Categories */}
                <section className="mb-10">
                    <div className="relative mb-6">
                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">search</span>
                        <input
                            type="text"
                            placeholder="Search by tech stack, revenue, or category..."
                            className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-xs focus:ring-primary focus:border-primary text-white"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>
                    <div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
                        {categories.map((cat, i) => (
                            <button key={i} className={`px-5 py-2 rounded-full text-[10px] font-bold whitespace-nowrap border transition-all ${i === 0 ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/5 text-slate-400'
                                }`}>
                                {cat}
                            </button>
                        ))}
                    </div>
                </section>

                {/* Listings */}
                <section>
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Market Feed</h2>
                        <button className="text-[10px] text-primary font-bold">Filter by ROI</button>
                    </div>
                    <div className="space-y-4">
                        {featuredApps.map((app) => (
                            <div key={app.id} className="glass p-4 rounded-3xl border-white/5 flex gap-4 items-center">
                                <div className="w-16 h-16 rounded-2xl overflow-hidden shrink-0">
                                    <img src={app.img} alt={app.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-bold text-sm truncate">{app.name}</h4>
                                    <div className="flex items-center gap-2 mt-0.5">
                                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider bg-white/5 px-2 py-0.5 rounded-full">{app.category}</span>
                                        <span className="text-[9px] font-bold text-secondary">{app.revenue}</span>
                                    </div>
                                </div>
                                <div className="text-right shrink-0">
                                    <p className="text-xs font-bold font-mono">{app.price}</p>
                                    <p className="text-[9px] text-slate-500 mt-1">Acquisition</p>
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
