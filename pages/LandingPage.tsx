
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateFeasibilityReport } from '../services/geminiService';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();
  const [idea, setIdea] = useState('');
  const [report, setReport] = useState('');
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
    <div className="bg-background-dark text-slate-100 font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-tr from-primary to-accent-purple rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">M</span>
          </div>
          <span className="font-bold text-xl tracking-tight">MVP Lab</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <a href="#features" className="hover:text-primary transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-primary transition-colors">Process</a>
          <a href="#pricing" className="hover:text-primary transition-colors">Pricing</a>
        </div>
        <button 
          onClick={() => navigate('/dashboard')}
          className="bg-primary hover:bg-primary/90 px-6 py-2 rounded-full text-sm font-bold transition-all"
        >
          Enter Platform
        </button>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-12">
        <section className="relative px-6 py-12 text-center hero-glow">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            AI-Powered Venture Studio
          </div>
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight mb-6 gradient-text max-w-5xl mx-auto">
            From Raw Ideas to Scalable Ventures <span className="text-white">— Instantly</span>
          </h1>
          <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            The unified ecosystem to Build, Launch, and Invest in AI-powered applications. Powered by advanced neural networks.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row justify-center px-4">
            <button 
              onClick={() => navigate('/dashboard')}
              className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-10 rounded-full transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
            >
              Start Building
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <button className="bg-white/5 hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-full border border-white/10 transition-all">
              Explore Investments
            </button>
          </div>

          <div className="mt-20 relative px-4">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-primary/10 blur-[120px] rounded-full -z-10"></div>
            <div className="glass rounded-[2rem] p-4 mx-auto max-w-5xl ios-shadow border-white/10">
              <img 
                alt="Dashboard visualization" 
                className="rounded-2xl w-full" 
                src="https://picsum.photos/seed/dashboard/1200/600"
              />
            </div>
          </div>
        </section>

        {/* AI Feasibility Checker Section */}
        <section className="px-6 py-24 max-w-4xl mx-auto text-center">
          <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Instant Insight</p>
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Got an Idea? Check Feasibility</h2>
          <div className="glass p-8 rounded-3xl border-white/10">
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="Describe your venture idea (e.g., An AI that automates personalized financial coaching...)"
              className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-slate-100 placeholder-slate-500 focus:ring-primary focus:border-primary mb-6 min-h-[120px]"
            />
            <button
              onClick={handleFeasibilityCheck}
              disabled={loading || !idea}
              className="w-full bg-gradient-to-r from-primary to-accent-purple py-4 rounded-2xl font-bold text-white shadow-xl shadow-primary/20 hover:scale-[1.01] transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing with Gemini...' : 'Generate Feasibility Report'}
            </button>

            {report && (
              <div className="mt-8 text-left bg-black/40 p-6 rounded-2xl border border-white/5 whitespace-pre-wrap">
                <h4 className="text-primary font-bold mb-2">AI Analysis Report:</h4>
                <div className="text-slate-300 text-sm leading-relaxed">{report}</div>
              </div>
            )}
          </div>
        </section>

        {/* Ecosystem Grid */}
        <section id="features" className="px-6 py-24 bg-gradient-to-b from-transparent to-black/60">
          <div className="max-w-6xl mx-auto mb-16 text-center md:text-left">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">The Ecosystem</p>
            <h2 className="text-4xl font-bold">Unlocking Potential</h2>
            <p className="text-slate-500 mt-4 max-w-xl">Core modules designed for rapid growth and seamless scalability from day one.</p>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Build System", desc: "Automated deployment pipelines and boilerplate templates for AI SaaS.", icon: "terminal", color: "primary" },
              { title: "AI Investment", desc: "Decentralized funding pool for validated concepts. Connect with VCs.", icon: "payments", color: "indigo-400" },
              { title: "Marketplace", desc: "Buy, sell, or license pre-trained models and unique micro-SaaS apps.", icon: "storefront", color: "accent-purple" },
              { title: "Academy", desc: "Master AI prompt engineering and venture building with world-class courses.", icon: "school", color: "emerald-400" }
            ].map((feature, i) => (
              <div key={i} className="glass p-8 rounded-3xl relative overflow-hidden group hover:bg-white/5 transition-all">
                <div className={`absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity text-7xl text-${feature.color}`}>
                  <span className="material-symbols-outlined !text-7xl">{feature.icon}</span>
                </div>
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-primary mb-6">
                  <span className="material-symbols-outlined">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{feature.desc}</p>
                <a className="text-primary text-sm font-semibold flex items-center gap-1 group-hover:translate-x-1 transition-transform" href="#">
                  Learn more <span className="material-symbols-outlined text-xs">chevron_right</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="px-6 py-24">
          <div className="text-center mb-16">
            <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">Flexible Plans</p>
            <h2 className="text-4xl font-bold">Choose Your Path</h2>
          </div>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass p-10 rounded-[2.5rem] border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Creator</h3>
              <p className="text-slate-400 text-sm mb-8">For solo founders and tinkers.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-slate-500">/month</span>
              </div>
              <ul className="space-y-4 mb-12">
                {["AI Dashboard Access", "1 Active Project", "Community Support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all">Select Creator</button>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border-primary bg-primary/5 relative scale-105 shadow-2xl shadow-primary/20">
              <div className="absolute -top-4 right-10 bg-primary text-white text-[10px] font-extrabold px-4 py-1.5 rounded-full uppercase tracking-widest">Most Popular</div>
              <h3 className="text-2xl font-bold mb-2">Investor</h3>
              <p className="text-slate-300 text-sm mb-8">For venture scouts and angels.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-bold">$299</span>
                <span className="text-slate-400">/month</span>
              </div>
              <ul className="space-y-4 mb-12">
                {["Priority Deal Flow", "Due Diligence AI Reports", "Direct Founder Messaging", "Co-investment Rights"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-primary text-white font-bold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20">Select Investor</button>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border-slate-800 hover:border-slate-700 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Enterprise</h3>
              <p className="text-slate-400 text-sm mb-8">For custom development & labs.</p>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="text-5xl font-bold">Custom</span>
              </div>
              <ul className="space-y-4 mb-12">
                {["Dedicated Venture Team", "White-label Platform", "Private Marketplace"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <span className="material-symbols-outlined text-primary text-xl">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-2xl bg-white/5 border border-white/10 font-bold hover:bg-white/10 transition-all">Contact Sales</button>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-6 py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">M</span>
            </div>
            <span className="font-bold tracking-tight text-xl">MVP Lab</span>
          </div>
          <div className="flex gap-10 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
          <p className="text-slate-600 text-sm">© 2025 MVP Lab Ecosystem. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
