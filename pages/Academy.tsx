
import React, { useState } from 'react';
import MobileLayout from '../components/MobileLayout';

const Academy: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const courses = [
        { title: 'Neural Prompt Engineering', level: 'Advanced', students: 1240, rating: 4.9, img: 'https://picsum.photos/seed/prompt/300/200', category: 'Dev' },
        { title: 'Venture Architecting for AI', level: 'Masterclass', students: 850, rating: 4.8, img: 'https://picsum.photos/seed/venture/300/200', category: 'Build' },
        { title: 'AI Ethics & Compliance', level: 'Foundational', students: 3200, rating: 4.7, img: 'https://picsum.photos/seed/legal/300/200', category: 'Legal' }
    ];

    return (
        <MobileLayout activeTab="academy">
            <div className="px-[32px] pt-[48px] pb-[120px]">
                <header className="mb-[40px]">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="material-symbols-outlined text-primary text-[28px]">school</span>
                        <h1 className="text-[28px] font-bold tracking-[-0.02em] leading-tight text-white">MVP Academy</h1>
                    </div>
                    <p className="text-[14px] text-slate-500 font-medium leading-[1.6]">Master the art of AI venture building with verified certifications.</p>
                </header>

                {/* My Progress */}
                <section className="mb-[48px]">
                    <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] mb-4 opacity-70">My Learning Path</h2>
                    <div className="glass p-[32px] rounded-[2.5rem] border-white/5 bg-gradient-to-br from-background-dark to-primary/5">
                        <div className="flex items-center gap-[24px] mb-[32px]">
                            <div className="w-[64px] h-[64px] rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-[16px] font-bold tracking-tight mb-2 text-white">AI Developer Track</h4>
                                <div className="flex items-center gap-3">
                                    <div className="flex-1 h-[6px] bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-[67%] transition-all duration-1000"></div>
                                    </div>
                                    <span className="text-[12px] font-bold text-primary">67%</span>
                                </div>
                            </div>
                        </div>
                        <button className="h-[56px] w-full bg-white text-black rounded-xl text-[14px] font-bold hover:bg-slate-200 transition-premium active:scale-95">
                            Resume: Multi-Agent Systems
                        </button>
                    </div>
                </section>

                {/* Course Filters */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar mb-[32px] -mx-[32px] px-[32px]">
                    {['All', 'Dev', 'Build', 'Marketing', 'Legal'].map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full text-[12px] font-bold whitespace-nowrap border transition-premium ${filter === cat ? 'bg-primary border-primary text-white' : 'bg-white/5 border-white/5 text-slate-500 hover:text-white'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Course List */}
                <section className="space-y-[24px]">
                    <div className="flex justify-between items-center mb-4 px-1">
                        <h2 className="text-[11px] font-bold text-slate-400 uppercase tracking-[0.08em] opacity-70">Certifications</h2>
                        <span className="text-[11px] text-primary font-bold uppercase tracking-[0.05em]">Trending</span>
                    </div>
                    {courses.map((course, i) => (
                        <div key={i} className="glass rounded-[2.5rem] overflow-hidden border-white/5 group hover:border-white/10 transition-premium">
                            <div className="relative h-[200px]">
                                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-transparent to-transparent"></div>
                                <div className="absolute top-6 right-6 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold text-slate-300 uppercase tracking-[0.08em] border border-white/10">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-[32px] pt-4">
                                <h3 className="font-bold text-[18px] mb-6 leading-[1.3] text-white group-hover:text-primary transition-colors">{course.title}</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-slate-500">group</span>
                                            <span className="text-[12px] text-slate-400 font-bold">{course.students}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="material-symbols-outlined text-[16px] text-amber-500">star</span>
                                            <span className="text-[12px] text-slate-400 font-bold">{course.rating}</span>
                                        </div>
                                    </div>
                                    <button className="h-[48px] w-[48px] rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-premium">
                                        <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mt-[64px] bg-gradient-to-br from-primary/20 to-secondary/10 rounded-[2.5rem] p-[40px] border border-white/10 relative overflow-hidden group">
                    <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary/20 rounded-full blur-[80px] group-hover:bg-primary/30 transition-colors duration-1000"></div>
                    <p className="text-[11px] text-primary font-bold uppercase tracking-[0.08em] mb-3">Exclusive Offer</p>
                    <h4 className="text-[24px] font-bold mb-4 tracking-tight text-white">Venture Builder Bundle</h4>
                    <p className="text-[14px] text-slate-400 mb-8 leading-[1.6]">
                        Get unlimited access to all courses, certification paths, and private Discord mentorship.
                    </p>
                    <button className="h-[56px] w-full bg-primary py-3 rounded-xl text-[14px] font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-premium text-white">
                        Upgrade to Pro Access
                    </button>
                </section>
            </div>
        </MobileLayout>
    );
};

export default Academy;
