
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


        {/* Team Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-purple/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
            <p className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-4">The Architects</p>
            <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter">Built by Visionaries</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Paul Nwosu", role: "Executive Director, MVP Labs", img: "/team/paul_nwosu.png", bio: "Leading strategic growth and ecosystem expansion across Africa." },
                { name: "Sarah Jenkins", role: "Head of Operations", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80", bio: "Ex-Google Ops lead. Scaling venture infrastructure for high-growth startups." },
                { name: "Michael Chen", role: "Lead AI Architect", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80", bio: "PhD in Neural Networks. Designing the core generative agents for the ecosystem." },
                { name: "Amara Diop", role: "VP of Product", img: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=800&q=80", bio: "Product visionary turning complex AI capabilities into intuitive user experiences." }
              ].map((member, i) => (
                <div key={i} className="glass rounded-[2rem] border-white/5 hover:border-primary/40 transition-all group text-left relative overflow-hidden flex flex-col h-full bg-[#0A0A0B]">
                  <div className="h-80 w-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B] via-transparent to-transparent opacity-20"></div>
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover object-top scale-100 group-hover:scale-105 transition-all duration-700" />
                  </div>
                  <div className="p-6 flex flex-col flex-1 border-t border-white/5 relative z-20">
                    <div className="mb-4">
                      <h3 className="text-lg font-bold mb-1 text-white group-hover:text-primary transition-colors">{member.name}</h3>
                      <p className="text-[9px] uppercase font-black tracking-widest text-slate-500">{member.role}</p>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed opacity-80 mb-6 flex-1">{member.bio}</p>

                    <div className="flex gap-3">
                      <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all text-slate-500">
                        <span className="text-[10px] font-bold">IN</span>
                      </span>
                      <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary hover:text-white cursor-pointer transition-all text-slate-500">
                        <span className="text-[10px] font-bold">X</span>
                      </span>
                    </div>
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
