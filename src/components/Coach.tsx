import { useState, useRef, useEffect } from 'react';
import React from 'react';
import { Send, Brain, User, Sparkles, ChevronRight, Mic, Paperclip, Video, Play, ExternalLink, Stars } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Screen } from '../types';

interface Message {
  id: string;
  role: 'assistant' | 'user';
  content: string;
  timestamp: Date;
  attachment?: {
    type: 'video' | 'image';
    url: string;
    name: string;
  };
}

interface CoachProps {
  onNavigate: (screen: Screen) => void;
}

export default function Coach({ onNavigate }: CoachProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      role: 'assistant',
      content: "Hi Debi! I'm Brady, your Sales Coach. I noticed you did great on the M211 technical specs, but we could polish the value proposition for IT Directors. Would you like to practice a specific objection, or should we review the legacy integration points?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const [isAiThinking, setIsAiThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (attachment?: Message['attachment']) => {
    if (!inputValue.trim() && !attachment) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue || (attachment ? `Uploaded a ${attachment.type}: ${attachment.name}` : ''),
      timestamp: new Date(),
      attachment
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsAiThinking(true);

    try {
      // Map messages for the OpenAI API
      const reqMessages = [...messages, userMessage].map(m => ({
        role: m.role,
        content: m.content
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: reqMessages })
      });
      
      const data = await res.json();
      
      setIsAiThinking(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.text || "Sorry, I had trouble processing that response.",
        timestamp: new Date()
      }]);
    } catch (e) {
      console.error(e);
      setIsAiThinking(false);
      setMessages(prev => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: "Connection error: please ensure OPENAI_API_KEY is configured in your Vercel project environment.",
        timestamp: new Date()
      }]);
    }
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setIsUploadingVideo(true);
      // Simulate upload
      setTimeout(() => {
        setIsUploadingVideo(false);
        handleSend({
          type: 'video',
          url: URL.createObjectURL(file),
          name: file.name
        });
      }, 1500);
    }
  };

  const expertVideos = [
    { title: "Brady M211 Portable Bluetooth Label Printer | Overview", expert: "Brady Corp", thumbnail: "https://img.youtube.com/vi/zieGEi-OI8c/hqdefault.jpg", duration: "1:07", url: "https://www.youtube.com/watch?v=zieGEi-OI8c" },
    { title: "Brady M211 Bluetooth Label Printer - Cartridges Explained", expert: "Brady Corp", thumbnail: "https://img.youtube.com/vi/G8Mr9SSbzUQ/hqdefault.jpg", duration: "1:33", url: "https://www.youtube.com/watch?v=G8Mr9SSbzUQ" },
    { title: "Create a Batch of Sequenced Labels with the Express Labels App", expert: "Brady Corp", thumbnail: "https://img.youtube.com/vi/W0JWPw2udpI/hqdefault.jpg", duration: "2:04", url: "https://www.youtube.com/watch?v=W0JWPw2udpI" },
  ];

  return (
    <div className="max-w-6xl mx-auto h-[calc(100vh-160px)] flex gap-8">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Coach Header */}
        <div className="mb-8 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-container rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Brain className="text-white w-7 h-7" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight font-display text-on-surface">AI Coach Brady</h1>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-tertiary animate-pulse"></div>
                <span className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">Active Coaching Session</span>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => onNavigate('practice')}
              className="px-6 py-2.5 bg-surface-container rounded-full text-xs font-bold font-display uppercase tracking-widest text-on-surface hover:bg-primary/10 hover:text-primary transition-all flex items-center gap-2"
            >
              Switch to Practice Mode
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Container */}
        <div className="flex-1 bg-white rounded-2xl editorial-shadow border border-outline-variant/10 flex flex-col overflow-hidden relative">
          {/* Messages Area */}
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-8 scroll-smooth"
          >
            {messages.map((msg) => (
              <div 
                key={msg.id} 
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${
                  msg.role === 'assistant' 
                    ? 'bg-primary text-white shadow-md shadow-primary/20' 
                    : 'bg-surface-container text-on-surface-variant'
                }`}>
                  {msg.role === 'assistant' ? <Brain className="w-5 h-5" /> : <User className="w-5 h-5" />}
                </div>
                <div className={`max-w-[70%] space-y-2 ${msg.role === 'user' ? 'items-end' : ''}`}>
                  <div className={`p-5 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'assistant' 
                      ? 'bg-surface-container/50 text-on-surface rounded-tl-none border border-outline-variant/5' 
                      : 'bg-primary text-white rounded-tr-none shadow-lg shadow-primary/10'
                  }`}>
                    {msg.attachment?.type === 'video' && (
                      <div className="mb-4 relative rounded-lg overflow-hidden bg-black/10 aspect-video flex items-center justify-center border border-white/20">
                        <Video className="w-8 h-8 opacity-50" />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                          <Play className="w-10 h-10 text-white fill-current" />
                        </div>
                        <span className="absolute bottom-2 left-2 text-[10px] font-bold text-white bg-black/40 px-2 py-1 rounded">
                          {msg.attachment.name}
                        </span>
                      </div>
                    )}
                    <ReactMarkdown 
                      components={{
                        strong: ({node, ...props}) => <strong className="font-bold text-on-surface" {...props} />,
                        p: ({node, ...props}) => <p className="mb-3 last:mb-0" {...props} />,
                        ul: ({node, ...props}) => <ul className="list-disc pl-5 mb-3 space-y-1 block" {...props} />,
                        ol: ({node, ...props}) => <ol className="list-decimal pl-5 mb-3 space-y-1 block" {...props} />,
                        li: ({node, ...props}) => <li className="pl-1 leading-relaxed" {...props} />
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  </div>
                  <span className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest px-2 block">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            ))}
            {isUploadingVideo && (
              <div className="flex gap-4 flex-row-reverse">
                <div className="w-10 h-10 shrink-0 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center">
                  <User className="w-5 h-5" />
                </div>
                <div className="max-w-[70%] bg-surface-container/30 p-4 rounded-2xl rounded-tr-none border border-dashed border-outline-variant flex items-center gap-3">
                  <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <span className="text-xs font-bold font-display text-on-surface-variant uppercase tracking-widest">Uploading video...</span>
                </div>
              </div>
            )}
            {isAiThinking && (
              <div className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full bg-primary text-white shadow-md shadow-primary/20 flex items-center justify-center">
                  <Brain className="w-5 h-5" />
                </div>
                <div className="max-w-[70%] space-y-2">
                  <div className="p-5 rounded-2xl bg-surface-container/50 text-on-surface rounded-tl-none border border-outline-variant/5 flex items-center gap-2 h-full min-h-[52px]">
                    <div className="w-2 h-2 bg-on-surface-variant/40 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-on-surface-variant/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-on-surface-variant rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input Area */}
          <div className="p-6 bg-white border-t border-outline-variant/10">
            <div className="relative flex items-center gap-4">
              <input 
                type="file" 
                ref={fileInputRef} 
                className="hidden" 
                accept="video/*" 
                onChange={handleVideoUpload}
              />
              <div className="flex-1 relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask Coach Brady anything..."
                  className="w-full bg-surface-container border-none rounded-2xl py-5 px-6 pr-24 focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all text-on-surface placeholder:text-outline/50 outline-none"
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <Video className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
              </div>
              <button 
                onClick={() => handleSend()}
                disabled={!inputValue.trim() && !isUploadingVideo}
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                  inputValue.trim() 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 hover:scale-105 active:scale-95' 
                    : 'bg-surface-container text-outline cursor-not-allowed'
                }`}
              >
                <Send className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar: Learn From Experts */}
      <aside className="w-80 shrink-0 flex flex-col gap-6">
        <div className="bg-white rounded-2xl p-8 editorial-shadow border border-outline-variant/10 flex-1 overflow-y-auto no-scrollbar">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold font-display">Learn From Experts</h2>
            <Stars className="w-5 h-5 text-tertiary" />
          </div>

          <div className="space-y-8">
            {expertVideos.map((video, i) => (
              <a href={video.url} target="_blank" rel="noopener noreferrer" key={i} className="group cursor-pointer block">
                <div className="relative aspect-video rounded-xl overflow-hidden mb-3 border border-outline-variant/10">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Play className="w-5 h-5 text-white fill-current" />
                    </div>
                  </div>
                  <span className="absolute bottom-2 right-2 bg-black/60 text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                    {video.duration}
                  </span>
                </div>
                <h3 className="font-bold text-sm text-on-surface mb-1 group-hover:text-primary transition-colors">{video.title}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-display font-bold text-on-surface-variant uppercase tracking-widest">{video.expert}</span>
                  <ExternalLink className="w-3 h-3 text-outline opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </a>
            ))}
          </div>

          <button className="w-full mt-8 py-4 bg-surface-container rounded-xl text-xs font-bold font-display uppercase tracking-widest text-on-surface hover:bg-primary/10 hover:text-primary transition-all">
            View All Expert Library
          </button>
        </div>

        {/* Quick Tip Card */}
        <div className="bg-tertiary rounded-2xl p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-[10px] font-display font-bold uppercase tracking-widest">Expert Tip</span>
          </div>
          <p className="text-sm font-medium leading-relaxed opacity-90">
            "When analyzing your own pitch video, look for filler words. Reducing 'um' and 'uh' by just 50% increases perceived authority by 2x."
          </p>
        </div>
      </aside>
    </div>
  );
}
