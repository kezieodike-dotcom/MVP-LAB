
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
            <div className="px-6 pt-12 pb-24">
                <header className="mb-10">
                    <div className="flex items-center gap-2 mb-2">
                        <span className="material-symbols-outlined text-primary">school</span>
                        <h1 className="text-xl font-bold tracking-tight">MVP Academy</h1>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">Master the art of AI venture building with verified certifications.</p>
                </header>

                {/* My Progress */}
                <section className="mb-10">
                    <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">My Learning Path</h2>
                    <div className="glass p-6 rounded-3xl border-white/10 bg-gradient-to-br from-background-dark to-primary/5">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center border border-primary/30">
                                <span className="material-symbols-outlined text-primary text-3xl">terminal</span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-sm font-bold tracking-tight">AI Developer Track</h4>
                                <div className="flex items-center gap-2 mt-1">
                                    <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary w-2/3"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-primary">67%</span>
                                </div>
                            </div>
                        </div>
                        <button className="w-full bg-white text-black py-3 rounded-2xl text-[11px] font-bold shadow-xl active:scale-95 transition-all">
                            Resume: Multi-Agent Systems
                        </button>
                    </div>
                </section>

                {/* Course Filters */}
                <div className="flex gap-2 overflow-x-auto no-scrollbar mb-8">
                    {['All', 'Dev', 'Build', 'Marketing', 'Legal'].map((cat, i) => (
                        <button
                            key={i}
                            onClick={() => setFilter(cat)}
                            className={`px-6 py-2 rounded-full text-[10px] font-bold whitespace-nowrap border transition-all ${filter === cat ? 'bg-primary border-primary' : 'bg-white/5 border-white/5 text-slate-500'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Course List */}
                <section className="space-y-4">
                    <div className="flex justify-between items-center mb-2 px-1">
                        <h2 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Available Certifications</h2>
                        <span className="text-[10px] text-primary font-bold">Trending</span>
                    </div>
                    {courses.map((course, i) => (
                        <div key={i} className="glass rounded-[2rem] overflow-hidden border-white/5 group active:scale-[0.98] transition-all">
                            <div className="relative h-40">
                                <img src={course.img} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[8px] font-bold text-slate-300 uppercase tracking-widest border border-white/10">
                                    {course.level}
                                </div>
                            </div>
                            <div className="p-5">
                                <h3 className="font-bold text-sm mb-4 leading-tight">{course.title}</h3>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[10px] text-slate-500">group</span>
                                            <span className="text-[10px] text-slate-400 font-bold">{course.students}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="material-symbols-outlined text-[10px] text-amber-500">star</span>
                                            <span className="text-[10px] text-slate-400 font-bold">{course.rating}</span>
                                        </div>
                                    </div>
                                    <button className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                <section className="mt-12 bg-primary/10 rounded-[2.5rem] p-8 border border-primary/20 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl"></div>
                    <p className="text-[9px] text-primary font-bold uppercase tracking-widest mb-2">Exclusive Offer</p>
                    <h4 className="text-lg font-bold mb-4">Venture Builder Bundle</h4>
                    <p className="text-[10px] text-slate-300 mb-6 leading-relaxed">
                        Get unlimited access to all courses, certification paths, and private Discord mentorship.
                    </p>
                    <button className="w-full bg-primary py-3 rounded-2xl text-[10px] font-bold shadow-lg shadow-primary/20">
                        Upgrade to Pro Access
                    </button>
                </section>
            </div>
        </MobileLayout>
    );
};

export default Academy;
