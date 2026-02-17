
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
      <nav className={`fixed top-0 left-0 right-0 z-50 px-10 md:px-20 py-6 transition-all duration-300 ${mobileMenuOpen ? 'bg-[#050505]' : 'glass border-b border-white/5 backdrop-blur-xl'}`}>
        <div className="max-w-[1240px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => navigate('/')}>
            <div className="w-[40px] h-[40px] bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-lg shadow-white/5 transition-transform group-hover:scale-110">
              <img src="/logo.png" alt="MVP Lab Logo" className="w-full h-full object-contain" />
            </div>
            <span className="font-bold text-[20px] tracking-[-0.02em] uppercase">MVP LABS</span>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            {['Ecosystem', 'Testimonials', 'Team'].map(item => (
              <a
                key={item}
                href={item === 'Team' ? '/#/team' : `#${item.toLowerCase()}`}
                className="text-[14px] font-medium text-slate-400 hover:text-white transition-premium tracking-[0.02em]"
                onClick={(e) => {
                  if (item === 'Team') return;
                  e.preventDefault();
                  document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {item}
              </a>
            ))}
            <button
              onClick={() => navigate('/dashboard')}
              className="h-[44px] px-6 bg-white text-black font-bold text-[14px] rounded-lg hover:bg-slate-200 transition-premium active:scale-95"
            >
              Get Started
            </button>
          </div>

          <button
            className="lg:hidden w-[40px] h-[40px] flex items-center justify-center text-white hover:text-primary transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="material-symbols-outlined text-[32px] leading-none">{mobileMenuOpen ? 'close' : 'menu'}</span>
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
      <main className="relative z-10 pt-[120px] md:pt-[160px]">
        <section className="max-w-[1200px] mx-auto px-10 md:px-20 text-left">
          {/* Hero Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[14px] md:text-[16px] font-medium uppercase tracking-[0.08em] text-slate-400 mb-4 opacity-70">
            AI Powered | Global Impact | Trusted by 10k+
          </div>

          <div className="max-w-[720px]">
            <h1 className="text-[40px] md:text-[72px] font-bold leading-[1.1] mb-6 tracking-[-0.02em] text-white">
              Build Systems That<br />Scale Global Impact
            </h1>
            <p className="text-slate-400 text-[18px] md:text-[22px] font-normal mb-10 leading-[1.6] max-w-[600px]">
              The master architecture to transform raw ideas into profitable AI applications within a single high-yield ecosystem.
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="h-[56px] w-full md:w-auto px-8 bg-primary hover:bg-primary/90 text-white font-semibold text-[16px] rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
              >
                Start Building
              </button>
              <button
                onClick={() => navigate('/invest')}
                className="h-[56px] w-full md:w-auto px-8 border border-white/10 hover:bg-white/5 text-white font-semibold text-[16px] rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95"
              >
                Explore Ventures
              </button>
            </div>
          </div>

          <div className="relative mt-[80px] group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[3rem] blur-2xl opacity-10 group-hover:opacity-20 transition-opacity"></div>
            <div className="relative glass rounded-[3rem] p-4 border-white/5 backdrop-blur-2xl">
              <div className="rounded-[2.5rem] overflow-hidden">
                <img
                  alt="Ecosystem Master Interface"
                  className="w-full grayscale hover:grayscale-0 transition-all duration-1000"
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
                className="w-full h-[56px] bg-primary hover:bg-primary/90 text-white font-semibold text-[16px] rounded-xl transition-all duration-200 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/30 disabled:opacity-50"
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
        <section className="max-w-[1200px] mx-auto px-10 md:px-20 py-[120px] border-t border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-start mb-[64px] gap-8">
            <div className="max-w-[720px]">
              <p className="text-slate-400 font-medium text-[14px] uppercase tracking-[0.08em] mb-4 opacity-70">Core Infrastructure</p>
              <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] leading-[1.2] mb-6">Essential Features for Smart Ventures</h2>
            </div>
            <p className="text-slate-500 text-[18px] max-w-[400px] leading-[1.6]">
              We offer the best financial and structural tools to ensure your AI projects are secure, scalable, and profit-optimized from day zero.
            </p>
          </div>

          {/* Features Grid Items */}
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
              <div key={i} className="glass p-[40px] rounded-[2.5rem] border-white/5 hover:border-white/10 transition-all duration-200 flex flex-col gap-6">
                <div className={`w-[56px] h-[56px] rounded-xl flex items-center justify-center ${item.color}`}>
                  <span className="material-symbols-outlined text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-[24px] font-bold tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-[14px] leading-[1.6]">{item.desc}</p>
                <button className="text-[12px] font-bold uppercase tracking-[0.05em] text-slate-400 hover:text-white transition-colors text-left mt-auto">
                  Read More
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Performance Showcase - Transactions/Vault */}
        <section className="max-w-[1200px] mx-auto px-10 md:px-20 py-[120px] bg-white/[0.01]">
          <div className="grid lg:grid-cols-2 gap-[80px] items-center">
            <div className="space-y-[48px]">
              <div className="max-w-[600px]">
                <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] leading-[1.1] mb-[24px]">
                  Keep your venture plan organized & on track for growth
                </h2>
                <p className="text-slate-500 text-[18px] leading-[1.6]">
                  Maintain clarity and structure in your financial planning to ensure consistent progress and smart decision-making. Our tools help you streamline your goals.
                </p>
              </div>

              <div className="space-y-[16px]">
                <h3 className="text-[24px] font-bold tracking-tight">Easily Manage Your Performance</h3>
                <p className="text-slate-500 text-[16px] leading-[1.6]">
                  Our system allows you to monitor your venture's financial performance effortlessly through intuitive tools and detailed live reports.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Custom Equity Reports", active: false },
                  { label: "Enhanced Node Security", active: false },
                  { label: "Superfast Support Network", active: true, desc: "We offer the best financial services for you in terms that our services are secure. We prioritize your growth." }
                ].map((feature, i) => (
                  <div key={i} className={`p-6 rounded-2xl border ${feature.active ? 'bg-white/5 border-primary/20' : 'border-white/5 opacity-60'}`}>
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-primary">{feature.active ? 'radio_button_checked' : 'radio_button_unchecked'}</span>
                        <span className="font-bold text-[14px] tracking-tight">{feature.label}</span>
                      </div>
                      <span className="material-symbols-outlined text-slate-600">expand_more</span>
                    </div>
                    {feature.active && feature.desc && (
                      <p className="text-slate-500 text-[13px] pl-8 mt-2 leading-relaxed">{feature.desc}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Mock Dashboard Representation */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] blur-3xl opacity-20 transition-opacity group-hover:opacity-40"></div>
              <div className="relative glass p-4 rounded-[3rem] border-white/10 shadow-3xl">
                <div className="bg-[#B7A7FF]/10 rounded-[2.5rem] p-[40px] space-y-6 backdrop-blur-2xl">
                  {[
                    { code: "KWD", name: "Kuwaiti Node", value: "5,780 XP", equivalent: "$18,965.60", icon: "🇰🇼" },
                    { code: "EUR", name: "Euro Node", value: "3,456 XP", equivalent: "$3,751.80", icon: "🇪🇺" },
                    { code: "USD", name: "US Node", value: "3,857 XP", equivalent: "$3,809.56", icon: "🇺🇸" },
                    { code: "KYD", name: "Cayman Node", value: "1,345 XP", equivalent: "$1,345.97", icon: "🇰🇾" }
                  ].map((node, i) => (
                    <div key={i} className="bg-white rounded-2xl p-[20px] flex items-center justify-between shadow-xl hover:scale-[1.02] transition-transform duration-200 transition-premium">
                      <div className="flex items-center gap-4">
                        <span className="text-3xl grayscale-[0.5]">{node.icon}</span>
                        <div>
                          <p className="font-bold text-slate-900 text-[16px]">{node.code}</p>
                          <p className="text-[11px] font-medium text-slate-400 uppercase tracking-[0.05em]">{node.name}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-slate-900 text-[16px]">{node.value}</p>
                        <p className="text-[12px] font-medium text-slate-300 tracking-tighter">{node.equivalent}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section id="ecosystem" className="max-w-[1200px] mx-auto px-10 md:px-20 py-[120px] border-t border-white/5">
          <div className="mb-[64px] text-center max-w-[720px] mx-auto">
            <p className="text-slate-400 font-medium text-[14px] uppercase tracking-[0.08em] mb-4 opacity-70">The Infrastructure</p>
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] leading-[1.2] mb-6">Unified Hub Control</h2>
            <p className="text-slate-500 text-[18px] leading-[1.6]">Four mission-critical modules designed to accelerate every stage of the venture lifecycle.</p>
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
                className="glass p-[48px] rounded-[2.5rem] border-white/5 hover:border-primary/30 transition-all duration-200 cursor-pointer group relative overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-[80px] group-hover:bg-primary/10 transition-all"></div>
                <div className="w-[64px] h-[64px] bg-white/5 rounded-xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                </div>
                <h3 className="text-[28px] font-bold mb-4 tracking-[-0.01em]">{item.title}</h3>
                <p className="text-slate-400 text-[16px] leading-[1.6] mb-8">{item.desc}</p>
                <div className="flex items-center gap-2 text-primary font-bold text-[14px] uppercase tracking-[0.05em] group-hover:gap-4 transition-all">
                  Launch Module <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* Partners Section */}
        <section className="py-[120px] border-t border-white/5 bg-white/[0.02] overflow-hidden">
          <div className="max-w-[1200px] mx-auto px-10 md:px-20 text-center">
            <p className="text-slate-400 font-medium text-[14px] uppercase tracking-[0.08em] mb-[64px] opacity-70">Trusted By Industry Leaders</p>

            {/* Special Partner Card */}
            <div className="mb-[64px] flex justify-center">
              <div className="glass p-[24px] rounded-2xl border border-primary/20 relative group hover:scale-[1.02] transition-transform duration-500 animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity"></div>
                <div className="relative flex items-center gap-[24px] bg-black/80 rounded-xl p-[24px] backdrop-blur-xl">
                  <div className="w-[64px] h-[64px] rounded-full bg-white flex items-center justify-center p-2 overflow-hidden">
                    <img src="/partners/africa_future_leaders.png" alt="Africa Future Leaders" className="w-full h-full object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="text-[12px] font-medium uppercase tracking-[0.08em] text-orange-400 mb-1">Strategic Partner</p>
                    <h3 className="text-[20px] font-bold text-white tracking-tight">Top 100 Africa Future Leaders</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-[48px] md:gap-[80px] opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
              {['NVIDIA', 'OPENAI', 'POLYGON', 'AWS STARTUPS', 'Y COMBINATOR'].map((partner, i) => (
                <div key={i} className="text-[20px] md:text-[24px] font-bold tracking-[-0.02em] text-white hover:text-primary transition-colors cursor-default">
                  {partner}
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Venture Insights - Blog Section */}
        <section className="max-w-[1200px] mx-auto px-10 md:px-20 py-[120px]">
          <div className="text-center mb-[64px] max-w-[720px] mx-auto">
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] leading-[1.2] mb-6">Get professional insights & tips from our blogs</h2>
            <p className="text-slate-500 text-[18px] leading-[1.6]">Empowering the next generation of builders at every stage of the journey.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Large Featured Card */}
            <div className="lg:col-span-2 glass rounded-[2rem] overflow-hidden group border-white/5 hover:border-primary/20 transition-all duration-200 cursor-pointer">
              <div className="h-80 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80" alt="Market shifts" className="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80"></div>
              </div>
              <div className="p-[40px]">
                <div className="flex gap-4 text-[12px] font-medium uppercase tracking-[0.08em] text-primary mb-4 opacity-80">
                  <span>Sep 14, 2024</span>
                  <span>•</span>
                  <span>5 Min Read</span>
                </div>
                <h3 className="text-[32px] font-bold mb-4 leading-[1.2] tracking-[-0.01em]">Navigating AI Market Shifts: How to Transition into a New Industry</h3>
                <p className="text-slate-400 text-[16px] leading-[1.6]">Master the art of pivoting your venture strategy as AI capabilities evolve at breakneck speeds.</p>
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
                <div key={i} className="glass rounded-[1.5rem] p-[24px] flex flex-col gap-[20px] border-white/5 hover:border-primary/20 transition-all duration-200 cursor-pointer group">
                  <div className="flex gap-[20px]">
                    <div className="w-[80px] h-[80px] rounded-xl overflow-hidden shrink-0">
                      <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                    </div>
                    <div className="flex flex-col justify-center">
                      <h4 className="text-[16px] font-bold leading-tight mb-2 group-hover:text-primary transition-colors">{post.title}</h4>
                      <div className="flex gap-3 text-[10px] font-medium uppercase tracking-[0.05em] text-slate-500 opacity-80">
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
        </section>

        {/* Mobile App CTA Section */}
        <section className="max-w-[1200px] mx-auto px-10 md:px-20 py-[80px]">
          <div className="bg-gradient-to-r from-[#1A0B2E] to-[#0A0A0B] rounded-[3rem] p-[48px] md:p-[80px] relative overflow-hidden group border border-white/5 shadow-3xl">
            <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[140%] bg-primary/20 blur-[120px] rounded-full pointer-events-none group-hover:bg-primary/30 transition-all duration-1000"></div>

            <div className="grid lg:grid-cols-2 gap-[64px] items-center">
              <div className="relative z-10">
                <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] mb-8 leading-[1.1]">Download The<br /><span className="text-primary">Recroot Mobile App</span></h2>
                <p className="text-slate-400 text-[18px] md:text-[20px] mb-12 max-w-lg leading-[1.6]">
                  Get the same powerful venture management experience on the platform, wherever you are. Secure, fast, and optimized.
                </p>

                <div className="flex flex-wrap gap-6">
                  <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl border border-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-95 group/btn">
                    <span className="material-symbols-outlined text-3xl">apple</span>
                    <div className="text-left">
                      <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500">Download on the</p>
                      <p className="text-[16px] font-bold text-white">App Store</p>
                    </div>
                  </button>
                  <button className="flex items-center gap-4 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-xl border border-white/10 transition-all duration-200 hover:scale-[1.02] active:scale-95 group/btn">
                    <span className="material-symbols-outlined text-3xl">play_arrow</span>
                    <div className="text-left">
                      <p className="text-[10px] font-medium uppercase tracking-[0.08em] text-slate-500">Get it on</p>
                      <p className="text-[16px] font-bold text-white">Google Play</p>
                    </div>
                  </button>
                </div>
              </div>

              <div className="relative z-10 hidden lg:block">
                <div className="relative w-80 mx-auto transform rotate-6 group-hover:rotate-3 transition-transform duration-700">
                  <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-[3rem]"></div>
                  <div className="relative bg-[#0A0A0B] border-[8px] border-white/5 rounded-[3rem] p-4 shadow-2xl h-[580px]">
                    <div className="w-[80px] h-6 bg-white/5 rounded-full mx-auto mb-8"></div>
                    <div className="space-y-6">
                      <div className="h-32 bg-white/5 rounded-2xl"></div>
                      <div className="h-6 w-3/4 bg-white/5 rounded-full"></div>
                      <div className="h-6 w-1/2 bg-white/5 rounded-full"></div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="h-24 bg-white/5 rounded-xl"></div>
                        <div className="h-24 bg-white/5 rounded-xl"></div>
                      </div>
                      <div className="h-32 bg-primary/20 rounded-2xl border border-primary/20"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials - What People Are Saying */}
        <section id="testimonials" className="max-w-[1200px] mx-auto px-10 md:px-20 py-[120px] border-t border-white/5">
          <div className="text-center mb-[80px]">
            <p className="text-slate-400 font-medium text-[14px] uppercase tracking-[0.08em] mb-4 opacity-70">Testimonials</p>
            <h2 className="text-[40px] md:text-[56px] font-bold tracking-[-0.02em] leading-[1.1]">What People Are Saying</h2>
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
              <div key={i} className={`glass p-[40px] rounded-[2.5rem] border-white/5 hover:border-primary/20 transition-all duration-200 flex flex-col gap-6 ${i === 1 || i === 3 ? 'lg:mt-[48px]' : ''}`}>
                <div className="flex items-center gap-[16px]">
                  <div className="w-[56px] h-[56px] rounded-full overflow-hidden border-2 border-primary/20 shrink-0">
                    <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="text-[18px] font-bold text-white leading-tight">{item.name}</h4>
                    <p className="text-[12px] font-medium uppercase text-slate-500 tracking-[0.05em]">{item.role}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-[16px] text-yellow-500">star</span>
                  ))}
                </div>

                <p className="text-slate-400 text-[14px] leading-[1.6] italic">"{item.quote}"</p>

                <div className="pt-4 border-t border-white/5">
                  <p className="text-[11px] font-medium uppercase text-slate-600 tracking-[0.05em]">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Call to Action */}
        <section className="px-6 py-60 text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[150px] rounded-full"></div>
          <div className="relative z-10 max-w-[720px] mx-auto">
            <h2 className="text-[40px] md:text-[72px] font-bold tracking-[-0.02em] mb-10 leading-[1.1]">READY TO<br /><span className="text-primary">DOMINATE?</span></h2>
            <button
              onClick={() => navigate('/dashboard')}
              className="h-[64px] px-16 bg-primary hover:bg-primary/90 text-white font-bold text-[18px] rounded-2xl transition-all duration-200 hover:scale-[1.05] active:scale-95 shadow-2xl shadow-primary/40"
            >
              Initialize Access
            </button>
          </div>
        </section>
      </main>

      <footer className="px-10 md:px-20 py-[80px] border-t border-white/5 bg-black/40 backdrop-blur-md">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-[64px]">
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-[40px] h-[40px] bg-white rounded-xl flex items-center justify-center overflow-hidden p-1 shadow-lg shadow-white/5">
                <img src="/logo.png" alt="MVP Lab Logo" className="w-full h-full object-contain" />
              </div>
              <span className="font-bold text-[24px] tracking-[-0.02em] uppercase">MVP LABS</span>
            </div>
            <p className="text-slate-500 max-w-xs text-[15px] leading-[1.6] mb-8">
              The next-generation venture studio for AI-powered applications. Powered by neural networks and decentralized growth models.
            </p>
            <div className="flex gap-4">
              {['Twitter', 'Discord', 'LinkedIn'].map(s => (
                <a key={s} href="#" className="w-[48px] h-[48px] glass rounded-xl flex items-center justify-center text-slate-400 hover:text-white hover:border-white/20 transition-all duration-200">
                  <span className="text-[12px] font-bold uppercase tracking-[0.05em]">{s[0]}</span>
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/50 mb-8">Ecosystem</h4>
            <ul className="space-y-4 text-[15px] font-medium text-slate-400">
              <li><a href="#" className="hover:text-primary transition-colors">Build System</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Investment Pool</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creator Academy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[12px] font-medium uppercase tracking-[0.08em] text-white/50 mb-8">Company</h4>
            <ul className="space-y-4 text-[15px] font-medium text-slate-400">
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
        </div>
        <div className="mt-[80px] pt-8 border-t border-white/5 text-center text-[11px] font-medium text-slate-600 tracking-[0.1em] uppercase">
          © 2025 MVP LABS CORE. SECURED BY POLYGON & ETHEREUM.
        </div>
      </footer>
    </div >
  );
};

export default LandingPage;
