import { useState } from 'react';
import { MessageSquare, Users, ShieldAlert, Search, Filter, Plus, MessageCircle, Heart, Share2, MoreHorizontal } from 'lucide-react';
import m211Image from '../assets/m211.jpg';

export default function Community() {
  const [activeTab, setActiveTab] = useState<'discussions' | 'guidelines'>('discussions');

  const discussions = [
    {
      id: 1,
      author: "Sarah Jenkins",
      avatar: "https://picsum.photos/seed/sarah/100",
      role: "Senior Sales Lead",
      title: "How to handle the 'Fragility' objection on job sites?",
      content: "I've been seeing pushback from foremen who think portable printers break too easily. Has anyone found success leading with the MIL-STD-810G drop tests?",
      tags: ["Strategy", "Objections"],
      likes: 24,
      comments: 12,
      time: "2h ago"
    },
    {
      id: 2,
      author: "Michael Chen",
      avatar: "https://picsum.photos/seed/michael/100",
      role: "Account Executive",
      title: "M211 vs Competition: Cartridge Loading",
      content: "Just finished a deep dive comparing our M211 with the other guys. The fact that the M211 uses drop-lock-print continuous cartridges saves so much time compared to threading tape.",
      tags: ["Product Knowledge", "Competitive"],
      likes: 56,
      comments: 8,
      time: "5h ago"
    },
    {
      id: 3,
      author: "Elena Rodriguez",
      avatar: "https://picsum.photos/seed/elena/100",
      role: "Technical Specialist",
      title: "Clarification on Express Labels App Syncing",
      content: "I'm seeing some confusion about how the app handles custom fonts. The M211 natively supports 85 fonts directly through the Express Labels mobile app via Bluetooth 5.0.",
      tags: ["Technical", "M211"],
      likes: 42,
      comments: 15,
      time: "1d ago"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <header className="mb-12 flex justify-between items-end">
        <div>
          <span className="font-display text-[10px] tracking-wider uppercase text-on-surface-variant block mb-2 font-bold">Brady Global Network</span>
          <h1 className="text-4xl font-extrabold font-display tracking-tight text-on-surface">Community Hub</h1>
        </div>
        <div className="flex bg-surface-container rounded-full p-1 border border-outline-variant/10">
          <button 
            onClick={() => setActiveTab('discussions')}
            className={`px-6 py-2 rounded-full text-xs font-bold font-display uppercase tracking-widest transition-all ${activeTab === 'discussions' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Discussions
          </button>
          <button 
            onClick={() => setActiveTab('guidelines')}
            className={`px-6 py-2 rounded-full text-xs font-bold font-display uppercase tracking-widest transition-all ${activeTab === 'guidelines' ? 'bg-white text-primary shadow-sm' : 'text-on-surface-variant hover:text-on-surface'}`}
          >
            Guidelines
          </button>
        </div>
      </header>

      {activeTab === 'discussions' ? (
        <div className="grid grid-cols-12 gap-8">
          {/* Main Feed */}
          <div className="col-span-12 lg:col-span-8 space-y-6">
            {/* Search & Filter Bar */}
            <div className="flex gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
                <input 
                  type="text" 
                  placeholder="Search discussions, questions, or tags..."
                  className="w-full bg-white border border-outline-variant/10 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>
              <button className="px-4 py-3 bg-white border border-outline-variant/10 rounded-xl flex items-center gap-2 text-on-surface-variant hover:bg-surface-container transition-all">
                <Filter className="w-4 h-4" />
                <span className="text-sm font-bold font-display uppercase tracking-widest">Filter</span>
              </button>
              <button className="px-6 py-3 bg-primary text-white rounded-xl flex items-center gap-2 font-bold font-display uppercase tracking-widest shadow-lg shadow-primary/20 hover:scale-[1.02] transition-all">
                <Plus className="w-4 h-4" />
                <span>New Post</span>
              </button>
            </div>

            {/* Discussion Cards */}
            {discussions.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10 hover:border-primary/20 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div>
                      <h4 className="font-bold text-on-surface group-hover:text-primary transition-colors">{post.author}</h4>
                      <p className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">{post.role}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">{post.time}</span>
                </div>
                
                <h3 className="text-xl font-bold font-display mb-4 text-on-surface">{post.title}</h3>
                <p className="text-on-surface-variant leading-relaxed mb-6 line-clamp-2">{post.content}</p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-surface-container rounded-full text-[10px] font-bold font-display text-primary uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                  <div className="flex items-center gap-6">
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                      <Heart className="w-4 h-4" />
                      <span className="text-xs font-bold font-display">{post.likes}</span>
                    </button>
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                      <MessageCircle className="w-4 h-4" />
                      <span className="text-xs font-bold font-display">{post.comments}</span>
                    </button>
                    <button className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="p-2 text-on-surface-variant hover:bg-surface-container rounded-full transition-all">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="col-span-12 lg:col-span-4 space-y-8">
            {/* Community Stats */}
            <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Users className="w-24 h-24" />
              </div>
              <h3 className="text-xl font-bold font-display mb-6 relative z-10">Community Stats</h3>
              <div className="grid grid-cols-2 gap-6 relative z-10">
                <div>
                  <p className="text-3xl font-black font-display">1,240</p>
                  <p className="text-[10px] font-bold text-primary-container uppercase tracking-widest opacity-80">ACTIVE MEMBERS</p>
                </div>
                <div>
                  <p className="text-3xl font-black font-display">42</p>
                  <p className="text-[10px] font-bold text-primary-container uppercase tracking-widest opacity-80">NEW POSTS TODAY</p>
                </div>
              </div>
            </div>

            {/* Trending Tags */}
            <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10">
              <h3 className="text-xl font-bold font-display mb-6">Trending Topics</h3>
              <div className="space-y-4">
                {["#M211Launch", "#ObjectionHandling", "#Q4Strategy", "#ExpressLabels"].map((tag, i) => (
                  <div key={i} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-sm font-bold text-on-surface-variant group-hover:text-primary transition-colors">{tag}</span>
                    <span className="text-[10px] font-display font-bold text-outline uppercase tracking-widest">{120 - i * 20} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Top Contributors */}
            <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10">
              <h3 className="text-xl font-bold font-display mb-6">Top Contributors</h3>
              <div className="space-y-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <img src={m211Image} alt="Contributor" className="w-10 h-10 rounded-full object-cover" referrerPolicy="no-referrer" />
                    <div className="flex-1">
                      <h4 className="text-sm font-bold text-on-surface">Contributor Name</h4>
                      <p className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">Expert • 2.4k points</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 editorial-shadow border border-outline-variant/10">
          <div className="flex items-center gap-4 mb-10 text-primary">
            <ShieldAlert className="w-10 h-10" />
            <h2 className="text-3xl font-bold font-display">Community Guidelines</h2>
          </div>
          
          <div className="space-y-10">
            <section>
              <h3 className="text-xl font-bold font-display mb-4 text-on-surface">1. Be Professional & Respectful</h3>
              <p className="text-on-surface-variant leading-relaxed">This is a professional space for Brady employees. Treat every colleague with respect. Harassment, discrimination, or unprofessional conduct will not be tolerated.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold font-display mb-4 text-on-surface">2. Protect Confidential Information</h3>
              <p className="text-on-surface-variant leading-relaxed">Do not share sensitive customer data, unreleased product roadmaps, or internal pricing strategies that aren't already public within the Brady network.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold font-display mb-4 text-on-surface">3. Help Others Grow</h3>
              <p className="text-on-surface-variant leading-relaxed">The goal of this community is mutual growth. If you have an insight that helped you close a deal, share it! If someone asks a question you can answer, take a moment to help.</p>
            </section>

            <section>
              <h3 className="text-xl font-bold font-display mb-4 text-on-surface">4. Stay On Topic</h3>
              <p className="text-on-surface-variant leading-relaxed">Keep discussions focused on sales strategy, product knowledge, and professional development. Use appropriate tags to help others find your content.</p>
            </section>
          </div>

          <div className="mt-12 pt-12 border-t border-outline-variant/10 flex justify-center">
            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold font-display uppercase tracking-widest shadow-xl shadow-primary/20 hover:scale-[1.02] transition-all">
              I Accept the Guidelines
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
