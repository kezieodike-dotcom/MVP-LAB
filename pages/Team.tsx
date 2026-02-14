import React from 'react';
import { useNavigate } from 'react-router-dom';

const Team: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-[#050505] text-slate-100 font-sans min-h-screen">
            {/* Navbar */}
            <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/5 px-6 py-4 flex justify-between items-center backdrop-blur-xl">
                <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 overflow-hidden p-1">
                        <img src="/logo.png" alt="MVP Lab Logo" className="w-full h-full object-contain" />
                    </div>
                    <span className="font-bold text-2xl tracking-tighter">MVP LAB</span>
                </div>
                <button onClick={() => navigate('/')} className="text-sm font-bold text-slate-400 hover:text-white transition-colors">
                    Back to Home
                </button>
            </nav>

            <main className="pt-32 px-6 pb-24">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-secondary font-black text-[10px] uppercase tracking-[0.3em] mb-4">The Architects</p>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">Built by Visionaries</h1>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Meet the team engineering the next generation of AI venture infrastructures.
                        </p>
                    </div>

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
            </main>
        </div>
    );
};

export default Team;
