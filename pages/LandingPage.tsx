
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateFeasibilityReport } from '../services/geminiService';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState('');
  const [report, setReport] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFeasibilityCheck = async () => {
    if (!idea) return;
    setLoading(true);
    try {
      const result = await generateFeasibilityReport(idea);
      setReport(result || "Analysis complete. Reach out to our team to discuss next steps.");
    } catch (error) {
      console.error(error);
      setReport("Failed to generate report. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#050505] text-slate-100 font-sans overflow-x-hidden min-h-screen">
      {/* Background Glows */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 blur-[120px] rounded-full"></div>
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden p-1">
            <img src="/logo.png" alt="MVP Lab Logo" className="w-full h-full object-contain" />
          </div>
          <span className="font-bold text-2xl tracking-tighter">MVP LAB</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 text-[10px] font-bold uppercase tracking-widest text-slate-400">
          <a href="#ecosystem" className="hover:text-primary transition-colors">Ecosystem</a>
          <a href="#feasibility" className="hover:text-primary transition-colors">AI Analysis</a>
          <button onClick={() => navigate('/team')} className="hover:text-primary transition-colors uppercase">Team</button>
          <a href="#invest" className="hover:text-primary transition-colors">Invest</a>
          <button onClick={() => navigate('/admin')} className="hover:text-red-400 transition-colors">Control</button>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/dashboard')}
            className="hidden sm:block bg-primary hover:bg-primary/90 px-8 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all shadow-xl shadow-primary/20"
          >
            Enter Hub
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
          >
            <span className="material-symbols-outlined">{mobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 backdrop-blur-xl pt-24 px-6 lg:hidden">
          <div className="flex flex-col gap-8 text-2xl font-black uppercase tracking-tighter">
            <a href="#ecosystem" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Ecosystem</a>
            <a href="#feasibility" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">AI Analysis</a>
            <a href="#invest" onClick={() => setMobileMenuOpen(false)} className="hover:text-primary transition-colors">Invest</a>
            <button onClick={() => { navigate('/admin'); setMobileMenuOpen(false); }} className="text-left hover:text-red-400 transition-colors">Control Panel</button>
            <button
              onClick={() => navigate('/dashboard')}
              className="mt-8 bg-primary text-white py-4 rounded-2xl text-sm font-bold uppercase tracking-widest shadow-xl shadow-primary/20"
            >
              Enter Hub
            </button>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <main className="relative z-10 pt-48">
        <section className="px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-primary mb-8 shadow-inner">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Unified AI Venture Ecosystem
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.9] mb-8 gradient-text max-w-6xl mx-auto tracking-tighter">
            BUILD. LAUNCH.<br />INVEST. <span className="text-white">SCALE.</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            The master architecture to transform raw ideas into profitable AI applications within a single high-yield ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24">
            <button
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto bg-white text-black font-black uppercase tracking-widest py-5 px-12 rounded-2xl transition-all shadow-2xl hover:scale-105 active:scale-95 text-xs"
            >
              Start Building
            </button>
            <button
              onClick={() => navigate('/invest')}
              className="w-full sm:w-auto glass hover:bg-white/10 text-white font-black uppercase tracking-widest py-5 px-12 rounded-2xl border border-white/10 transition-all text-xs"
            >
              Explore Ventures
            </button>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative glass rounded-[3rem] p-4 border-white/10 backdrop-blur-2xl">
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  alt="Ecosystem Master Interface"
                  className="w-full grayscale-[0.5] hover:grayscale-0 transition-all duration-1000"
                  src="https://picsum.photos/seed/mvplab/1600/800"
                />
              </div>
            </div>
          </div>
        </section>

        {/* AI Feasibility Checker */}
        <section id="feasibility" className="px-6 py-40 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-4">Neural Analysis</p>
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">Instant Venture Validation</h2>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Our proprietary AI engine analyzes your concept against current market data, tech feasibility, and ROI potential in seconds.
              </p>
              <div className="space-y-4">
                {['Real-time Competitive Analysis', 'Tech Stack Recommendation', 'Projected Valuation Tiers'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-xl">verified</span>
                    <span className="text-sm font-bold text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass p-10 rounded-[3rem] border-white/10 shadow-2xl">
              <textarea
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                placeholder="Briefly describe your AI idea..."
                className="w-full bg-black/40 border border-white/10 rounded-3xl p-6 text-slate-100 placeholder-slate-600 focus:ring-2 focus:ring-primary focus:border-transparent mb-6 min-h-[160px] text-sm font-medium"
              />
              <button
                onClick={handleFeasibilityCheck}
                disabled={loading || !idea}
                className="w-full bg-gradient-to-r from-primary to-accent-purple py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest text-white shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50"
              >
                {loading ? 'Initializing Neural Link...' : 'Generate Full Report'}
              </button>

              {report && (
                <div className="mt-8 bg-white/5 p-6 rounded-2xl border border-white/5 animate-pulse-slow">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-[10px] font-black uppercase text-primary">Analysis Ready</span>
                  </div>
                  <div className="text-slate-300 text-xs leading-relaxed font-mono">{report}</div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* The Builder's Path - Timeline Section */}
        <section id="roadmap" className="px-6 py-40 relative">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-4">The Builder's Path</h2>
          </div>

          <div className="max-w-5xl mx-auto relative">
            {/* Central Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/50 to-primary/50 -translate-x-1/2"></div>

            <div className="space-y-32">
              {[
                {
                  phase: "PHASE 01",
                  title: "Idea Submission",
                  desc: "Submit your concept to our AI review board for initial viability scoring.",
                  number: "1",
                  align: "right"
                },
                {
                  phase: "PHASE 02",
                  title: "Build & Dev",
                  desc: "Engage our Dev Network to build a battle-tested MVP in under 60 days.",
                  number: "2",
                  align: "left"
                },
                {
                  phase: "PHASE 03",
                  title: "Launch & Scale",
                  desc: "Distribute through the App Marketplace and Creator Lab network.",
                  number: "3",
                  align: "right"
                },
                {
                  phase: "PHASE 04",
                  title: "Revenue & Exit",
                  desc: "Automated revenue share or full asset acquisition by our portfolio.",
                  number: "4",
                  align: "left"
                }
              ].map((item, i) => (
                <div key={i} className={`relative flex items-center ${item.align === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {/* Content Side */}
                  <div className={`w-1/2 ${item.align === 'left' ? 'pr-12 text-right' : 'pl-12 text-left'}`}>
                    <h3 className="text-2xl md:text-3xl font-black mb-2 text-white">{item.title}</h3>
                    <p className={`text-slate-400 text-sm md:text-base max-w-sm ${item.align === 'left' ? 'ml-auto' : 'mr-auto'}`}>
                      {item.desc}
                    </p>
                  </div>

                  {/* Circle */}
                  <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 bg-black border-2 border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    <span className="text-white font-black text-lg">{item.number}</span>
                  </div>

                  {/* Phase Label Side */}
                  <div className={`w-1/2 ${item.align === 'left' ? 'pl-12 text-left' : 'pr-12 text-right'}`}>
                    <span className="text-primary font-black text-xs tracking-widest uppercase">
                      {'phase' in item ? item.phase : (item as any).phrase}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Intelligent Venture Management - Features Grid */}
        <section className="px-6 py-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
              <div className="max-w-2xl">
                <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-4">Core Infrastructure</p>
                <h2 className="text-5xl md:text-6xl font-black tracking-tighter leading-none mb-6">Essential Features for Smart Ventures</h2>
              </div>
              <p className="text-slate-500 text-sm md:text-base max-w-sm mb-2">
                We offer the best financial and structural tools to ensure your AI projects are secure, scalable, and profit-optimized from day zero.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Budget Planning",
                  desc: "Set and track monthly build-budgets with personalized AI recommendations.",
                  icon: "account_balance_wallet",
                  color: "bg-purple-500/10 text-purple-400"
                },
                {
                  title: "Monitor Spending",
                  desc: "Get detailed insights into your token usage and compute expenses across all nodes.",
                  icon: "analytics",
                  color: "bg-teal-500/10 text-teal-400"
                },
                {
                  title: "Real-Time Tracking",
                  desc: "Stay updated on your venture's equity, revenue distribution, and health in real-time.",
                  icon: "schedule",
                  color: "bg-orange-500/10 text-orange-400"
                }
              ].map((item, i) => (
                <div key={i} className="glass p-10 rounded-[3rem] border-white/5 hover:border-white/10 transition-all flex flex-col gap-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${item.color}`}>
                    <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  <button className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-colors text-left mt-auto">
                    Read More
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Performance Showcase - Transactions/Vault */}
        <section className="px-6 py-40 bg-white/[0.01]">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-tight">
                Keep your venture plan organized<br />and on track for growth
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base">
                Maintain clarity and structure in your financial planning to ensure consistent progress and smart decision-making. Our tools help you streamline your goals.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <h3 className="text-4xl font-black tracking-tight">Easily Manage<br />Your Performance</h3>
                <p className="text-slate-500 leading-relaxed text-lg">
                  Our system allows you to monitor your venture's financial performance effortlessly through intuitive tools and detailed live reports.
                </p>

                <div className="space-y-6">
                  {[
                    { label: "Custom Equity Reports", active: false },
                    { label: "Enhanced Node Security", active: false },
                    { label: "Superfast Support Network", active: true, desc: "We offer the best financial services for you in terms that our services are secure. We prioritize your growth." }
                  ].map((feature, i) => (
                    <div key={i} className={`p-6 rounded-2xl border ${feature.active ? 'bg-white/5 border-primary/20' : 'border-white/5 opacity-60'}`}>
                      <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-primary">{feature.active ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                          <span className="font-bold text-sm tracking-tight">{feature.label}</span>
                        </div>
                        <span className="material-symbols-outlined text-slate-600">expand_more</span>
                      </div>
                      {feature.active && feature.desc && (
                        <p className="text-slate-500 text-xs pl-8 mt-2 leading-relaxed">{feature.desc}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mock Dashboard Representation */}
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/10 rounded-[4rem] blur-3xl opacity-20 transition-opacity group-hover:opacity-40"></div>
                <div className="relative glass p-4 rounded-[4rem] border-white/10 shadow-3xl">
                  <div className="bg-[#B7A7FF]/10 rounded-[3.5rem] p-12 space-y-6 backdrop-blur-2xl">
                    {[
                      { code: "KWD", name: "Kuwaiti Node", value: "5,780 XP", equivalent: "$18,965.60", icon: "🇰🇼" },
                      { code: "EUR", name: "Euro Node", value: "3,456 XP", equivalent: "$3,751.80", icon: "🇪🇺" },
                      { code: "USD", name: "US Node", value: "3,857 XP", equivalent: "$3,809.56", icon: "🇺🇸" },
                      { code: "KYD", name: "Cayman Node", value: "1,345 XP", equivalent: "$1,345.97", icon: "🇰🇾" }
                    ].map((node, i) => (
                      <div key={i} className="bg-white rounded-3xl p-5 flex items-center justify-between shadow-xl">
                        <div className="flex items-center gap-4">
                          <span className="text-3xl grayscale-[0.5]">{node.icon}</span>
                          <div>
                            <p className="font-black text-slate-900 text-sm">{node.code}</p>
                            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{node.name}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-black text-slate-900 text-sm">{node.value}</p>
                          <p className="text-[9px] font-bold text-slate-300 tracking-tighter">{node.equivalent}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section id="ecosystem" className="px-6 py-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="mb-24 text-center">
              <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-4">The Infrastructure</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Unified Hub Control</h2>
              <p className="text-slate-500 max-w-2xl mx-auto text-lg">Four mission-critical modules designed to accelerate every stage of the venture lifecycle.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { title: "Marketplace", desc: "Acquire validated AI ventures or co-invest in high-growth digital assets.", icon: "storefront", path: "/marketplace" },
                { title: "Creator Portal", desc: "Monetize content engagement with automated revenue sharing via Smart Channels.", icon: "auto_awesome", path: "/creator" },
                { title: "Academy", desc: "Master AI venture building with hands-on curriculum and neural certifications.", icon: "school", path: "/academy" },
                { title: "Investment", desc: "Institutional-grade entry into early-stage AI nodes with transparent ROI tracking.", icon: "insights", path: "/invest" }
              ].map((item, i) => (
                <div
                  key={i}
                  onClick={() => navigate(item.path)}
                  className="glass p-12 rounded-[3.5rem] border-white/5 hover:border-primary/30 transition-all cursor-pointer group relative overflow-hidden"
                >
                  <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all"></div>
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 tracking-tight">{item.title}</h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">{item.desc}</p>
                  <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest group-hover:gap-4 transition-all">
                    Launch Module <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Partners Section */}
        <section className="py-24 border-t border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-primary font-black text-[10px] uppercase tracking-[0.3em] mb-12">Trusted By Industry Leaders</p>

            {/* Special Partner Card */}
            <div className="mb-16 flex justify-center">
              <div className="glass p-6 rounded-3xl border border-primary/20 relative group hover:scale-105 transition-transform duration-500 animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center gap-6 bg-black/80 rounded-2xl px-8 py-4 backdrop-blur-xl">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center p-2 overflow-hidden">
                    <img src="/partners/africa_future_leaders.png" alt="Africa Future Leaders" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-orange-400 mb-1">Strategic Partner</p>
                    <h3 className="text-xl font-bold text-white tracking-tight">Top 100 Africa Future Leaders</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['NVIDIA', 'OPENAI', 'POLYGON', 'AWS STARTUPS', 'Y COMBINATOR'].map((partner, i) => (
                <div key={i} className="text-xl md:text-2xl font-black tracking-tighter text-white hover:text-primary transition-colors cursor-default">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Venture Insights - Blog Section */}
        <section className="px-6 py-40">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">Get professional insights<br />& tips from our blogs</h2>
              <p className="text-slate-500 max-w-xl mx-auto text-sm">Empowering the next generation of builders at every stage of the journey.</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Large Featured Card */}
              <div className="lg:col-span-2 glass rounded-[2.5rem] overflow-hidden group border-white/5 hover:border-primary/20 transition-all cursor-pointer">
                <div className="h-80 overflow-hidden relative">
                  <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Market shifts" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                </div>
                <div className="p-10">
                  <div className="flex gap-4 text-[10px] font-black uppercase tracking-widest text-primary mb-4">
                    <span>Sep 14, 2024</span>
                    <span>•</span>
                    <span>5 Min Read</span>
                  </div>
                  <h3 className="text-3xl font-black mb-4 leading-tight">Navigating AI Market Shifts: How to<br />Transition into a New Industry</h3>
                  <p className="text-slate-400">Master the art of pivoting your venture strategy as AI capabilities evolve at breakneck speeds.</p>
                </div>
              </div>

              {/* Stacked Small Cards */}
              <div className="flex flex-col gap-8">
                {[
                  {
                    title: "Strategies to land your dream seed round",
                    desc: "Proven techniques to stand out in a hard market including real pitch strategies.",
                    date: "Aug 17, 2024",
                    time: "8 min read",
                    img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&w=800&q=80"
                  },
                  {
                    title: "10 essential & solid venture health tips",
                    desc: "Practical advice on how to monitor your node performance effectively.",
                    date: "Sep 02, 2024",
                    time: "7 min read",
                    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=800&q=80"
                  }
                ].map((post, i) => (
                  <div key={i} className="glass rounded-[2rem] p-6 flex flex-col gap-5 border-white/5 hover:border-primary/20 transition-all cursor-pointer group">
                    <div className="flex gap-5">
                      <div className="w-24 h-24 rounded-2xl overflow-hidden shrink-0">
                        <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className="text-sm font-black leading-tight mb-2 group-hover:text-primary transition-colors">{post.title}</h4>
                        <div className="flex gap-3 text-[8px] font-black uppercase text-slate-500">
                          <span>{post.date}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mobile App CTA Section */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-[#1A0B2E] to-[#0A0A0B] rounded-[4rem] p-12 md:p-24 relative overflow-hidden group border border-white/5 shadow-3xl">
              <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-primary/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-1000"></div>

              <div className="grid lg:grid-cols-2 gap-16 items-center">
                <div className="relative z-10">
                  <h2 className="text-4xl md:text-7xl font-black tracking-tighter mb-8 leading-none">Download The<br /><span className="text-primary">Recroot Mobile App</span></h2>
                  <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-lg leading-relaxed">
                    Get the same powerful venture management experience on the platform, wherever you are. Secure, fast, and optimized.
                  </p>

                  <div className="flex flex-wrap gap-6">
                    <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl border border-white/10 transition-all group/btn">
                      <span className="material-symbols-outlined text-3xl">apple</span>
                      <div className="text-left">
                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Download on the</p>
                        <p className="text-sm font-black text-white">App Store</p>
                      </div>
                    </button>
                    <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl border border-white/10 transition-all group/btn">
                      <span className="material-symbols-outlined text-3xl">play_arrow</span>
                      <div className="text-left">
                        <p className="text-[8px] font-black uppercase tracking-widest text-slate-500">Get it on</p>
                        <p className="text-sm font-black text-white">Google Play</p>
                      </div>
                    </button>
                  </div>
                </div>

                <div className="relative z-10 hidden lg:block">
                  <div className="relative w-80 mx-auto transform rotate-12 group-hover:rotate-6 transition-transform duration-700">
                    <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem]"></div>
                    <div className="relative bg-[#0A0A0B] border-[8px] border-white/5 rounded-[3.5rem] p-4 shadow-2xl h-[580px]">
                      <div className="w-1/3 h-6 bg-white/5 rounded-full mx-auto mb-8"></div>
                      <div className="space-y-6">
                        <div className="h-32 bg-white/5 rounded-3xl"></div>
                        <div className="h-6 w-3/4 bg-white/5 rounded-full"></div>
                        <div className="h-6 w-1/2 bg-white/5 rounded-full"></div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="h-24 bg-white/5 rounded-2xl"></div>
                          <div className="h-24 bg-white/5 rounded-2xl"></div>
                        </div>
                        <div className="h-32 bg-primary/20 rounded-3xl border border-primary/20"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - What People Are Saying */}
        <section id="testimonials" className="px-6 py-40 border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-widest text-primary mb-6">
                Testimonials
              </div>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">What People Are Saying</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
              {[
                {
                  name: "Leslie Alexander",
                  role: "Venture Founder",
                  date: "January 22, 2025",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
                  quote: "The speed at which MVP Lab moves is incredible. We went from a raw concept to a fully functional AI node in under six weeks. The growth metrics have been consistent ever since."
                },
                {
                  name: "Ralph Edwards",
                  role: "Serial Entrepreneur",
                  date: "January 23, 2025",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
                  quote: "I've built several startups, but the infrastructure here is different. The AI review board gave us insights we hadn't even considered. Highly recommend for any serious builder."
                },
                {
                  name: "Garry Maccreon",
                  role: "Angel Investor",
                  date: "January 23, 2025",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
                  quote: "The transparency in equity tracking and ROI through the dashboard is refreshing. It's the most organized venture studio I've partnered with in the AI space."
                },
                {
                  name: "James Stamford",
                  role: "Tech Architect",
                  date: "January 24, 2025",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
                  quote: "Building within this ecosystem means you don't have to worry about the plumbing. You focus on the neural core, and MVP Lab handles the scale. It's a game changer."
                },
                {
                  name: "Jenny Wilson",
                  role: "Product Lead",
                  date: "January 25, 2025",
                  rating: 5,
                  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
                  quote: "The community of builders here is top-tier. The marketplace makes it so easy to collaborate or even acquire digital assets that fit our tech stack."
                }
              ].map((item, i) => (
                <div key={i} className={`glass p-10 rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all flex flex-col gap-6 ${i === 1 || i === 3 ? 'lg:mt-12' : ''}`}>
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-white leading-tight">{item.name}</h4>
                      <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">{item.role}</p>
                    </div>
                  </div>

                  <div className="flex gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <span key={i} className="material-symbols-outlined text-sm text-yellow-500">star</span>
                    ))}
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed italic">"{item.quote}"</p>

                  <div className="pt-4 border-t border-white/5">
                    <p className="text-[9px] font-black uppercase text-slate-600 tracking-widest">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Call to Action */}
        <section className="px-6 py-60 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[150px] rounded-full"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-black tracking-tighter mb-12">READY TO<br /><span className="text-primary">DOMINATE?</span></h2>
            <button
              onClick={() => navigate('/dashboard')}
              className="bg-primary text-white font-black uppercase tracking-widest py-6 px-16 rounded-3xl text-sm shadow-2xl shadow-primary/40 hover:scale-110 active:scale-95 transition-all"
            >
              Initialize Access
            </button>
          </div>
        </section>
      </main>

      <footer className="px-8 py-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-white rounded-xl flex items-center justify-center overflow-hidden p-1">
                <img src="/logo.png" alt="MVP Lab Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-xl tracking-tighter uppercase">MVP LAB</span>
            </div>
            <p className="text-slate-500 max-w-xs text-sm leading-relaxed mb-8">
              The next-generation venture studio for AI-powered applications. Powered by neural networks and decentralized growth models.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Discord', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="w-10 h-10 glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                  <span className="text-[10px] font-bold uppercase">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Build System</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investment Pool</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creator Academy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Company</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li>
                <button onClick={() => navigate('/team')} className="hover:text-primary transition-colors flex items-center gap-2 w-full text-left group">
                  <span className="material-symbols-outlined text-lg opacity-50 group-hover:opacity-100 transition-opacity">groups</span>
                  Team
                </button>
              </li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-white mb-8">Legal</h4>
            <ul className="space-y-4 text-sm font-bold text-slate-500">
              <li><a href="#" className="hover:text-primary transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">KYC/AML Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-white/5 text-center text-[10px] font-bold text-slate-600 tracking-widest uppercase">
          © 2025 MVP LAB CORE. SECURED BY POLYGON & ETHEREUM.
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
