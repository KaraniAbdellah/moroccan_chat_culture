import React, { useState } from 'react';
import { 
  Bot, Sparkles, Database, Globe, Zap, Shield, 
  MessageSquare, ChevronDown, Github, Twitter, 
  ArrowRight, Search, Send, Menu
} from 'lucide-react';

export default function AtlasLanding() {
  const [activeFaq, setActiveFaq] = useState(null);

  // Data Collections
  const datasets = [
    { name: 'Moroccan Darija Corpus', desc: '10M+ tokens of conversational Darija', size: '2.4 GB', tags: ['Text', 'Conversational'] },
    { name: 'Atlas Speech', desc: 'High-quality transcribed Moroccan audio', size: '15 GB', tags: ['Audio', 'Speech-to-Text'] },
    { name: 'Darija-English Parallel', desc: 'Curated translation pairs for NLP models', size: '800 MB', tags: ['Translation', 'Parallel'] },
  ];

  const features = [
    { icon: <MessageSquare />, title: 'Native Darija Understanding', desc: 'Built from the ground up to understand the nuances of Moroccan dialects.' },
    { icon: <Globe />, title: 'Real-time Translation', desc: 'Seamlessly bridge the gap between English, French, Standard Arabic, and Darija.' },
    { icon: <Zap />, title: 'Ultra-Low Latency', desc: 'Optimized inference engine delivering responses in under 200ms.' },
    { icon: <Shield />, title: 'Enterprise Security', desc: 'End-to-end encryption with zero data retention policies.' },
  ];

  const stats = [
    { value: '15+', label: 'Open Datasets' },
    { value: '2M+', label: 'Conversations' },
    { value: '500+', label: 'Contributors' },
    { value: '99.9%', label: 'Uptime' },
  ];

  const faqs = [
    { q: 'What is Atlas AI?', a: 'Atlas AI is a specialized language model platform designed specifically for the Moroccan context, supporting Darija, Arabic, French, and English natively.' },
    { q: 'Is the platform open source?', a: 'Yes, our core datasets and base models are available on Hugging Face to empower the Moroccan AI community.' },
    { q: 'How can I contribute?', a: 'You can contribute via our GitHub repositories or by submitting high-quality text/audio data through our community portal.' },
  ];

  return (
    <div className="min-h-screen bg-background text-white font-sans selection:bg-blue-500/30 overflow-hidden">
      
      {/* Abstract Background Glows */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-background/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight">Atlas AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#datasets" className="hover:text-white transition">Datasets</a>
            <a href="#community" className="hover:text-white transition">Community</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="hidden md:block text-sm font-medium hover:text-white transition text-gray-300">Log in</button>
            <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-200 transition">
              Get Started
            </button>
            <Menu className="md:hidden w-6 h-6 text-gray-300" />
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        
        {/* 1. Hero Section */}
        <section className="max-w-7xl mx-auto px-6 text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 mb-8">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>Atlas Model v2.0 is now live</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            The Moroccan AI Assistant <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Built for Everyone.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10">
            Experience the first enterprise-grade language model engineered specifically for Moroccan Darija, culture, and context.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 transition flex items-center justify-center gap-2">
              Start Chatting <ArrowRight className="w-4 h-4" />
            </button>
            <button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition flex items-center justify-center gap-2">
              <Database className="w-4 h-4" /> Explore Datasets
            </button>
          </div>
        </section>

        {/* 2. Chatbot Preview Section */}
        <section className="max-w-5xl mx-auto px-6 mt-24">
          <div className="rounded-2xl border border-white/10 bg-[#121214]/80 backdrop-blur-xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-[600px]">
            {/* Sidebar Mock */}
            <div className="hidden md:flex w-64 border-r border-white/10 bg-[#09090B]/50 flex-col p-4">
              <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-white/5 transition border border-white/5 mb-6">
                <span className="text-sm font-medium text-gray-300">New Chat</span>
                <Bot className="w-4 h-4 text-gray-400" />
              </button>
              <div className="text-xs font-semibold text-gray-500 mb-3 px-2 uppercase tracking-wider">Today</div>
              <div className="flex flex-col gap-1">
                <div className="px-3 py-2 rounded text-sm text-gray-300 bg-white/5 truncate">Moroccan history overview</div>
                <div className="px-3 py-2 rounded text-sm text-gray-500 hover:bg-white/5 cursor-pointer truncate">Translate email to Darija</div>
              </div>
            </div>
            
            {/* Chat Area Mock */}
            <div className="flex-1 flex flex-col relative bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-blend-overlay">
              <div className="flex-1 p-6 overflow-y-auto space-y-6">
                {/* User Message */}
                <div className="flex items-start justify-end gap-4">
                  <div className="bg-blue-600/20 text-blue-100 border border-blue-500/20 rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] text-sm leading-relaxed">
                    Can you explain the history of the Almoravid dynasty and its impact on architecture?
                  </div>
                </div>
                {/* AI Message */}
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                  <div className="bg-white/5 border border-white/10 text-gray-200 rounded-2xl rounded-tl-sm px-5 py-4 max-w-[85%] text-sm leading-relaxed">
                    <p className="mb-3">The Almoravid dynasty (Al-Murabitun), originating from nomadic Sanhaja Berber tribes in the 11th century, profoundly shaped Moroccan and Andalusian architecture.</p>
                    <p>Their style introduced a distinct blend of austerity and intricate Andalusian elements. A prime example is the <strong>Koubba Ba'adiyn</strong> in Marrakech, characterized by its complex brickwork arches and distinct ribbed domes.</p>
                    <div className="w-2 h-4 bg-blue-400 mt-2 animate-pulse" /> {/* Typing indicator */}
                  </div>
                </div>
              </div>

              {/* Input Area */}
              <div className="p-4 bg-gradient-to-t from-[#121214] to-transparent">
                <div className="relative max-w-3xl mx-auto flex items-center bg-[#18181B] border border-white/10 rounded-xl p-2 shadow-inner">
                  <input 
                    type="text" 
                    placeholder="Message Atlas AI..." 
                    className="w-full bg-transparent border-none outline-none text-gray-300 px-4 py-2 text-sm"
                    disabled
                  />
                  <button className="p-2 bg-white/10 rounded-lg text-white hover:bg-white/20 transition shrink-0">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-center text-xs text-gray-500 mt-3">Atlas AI can make mistakes. Verify important information.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AI Features */}
        <section id="features" className="max-w-7xl mx-auto px-6 mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Capabilities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Engineered from the ground up to handle complex linguistic tasks with high accuracy and cultural awareness.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feat, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                  {feat.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. Hugging Face Partnership & 3. Datasets */}
        <section id="datasets" className="max-w-7xl mx-auto px-6 mt-32">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#18181B] to-background overflow-hidden">
            <div className="p-10 md:p-16 border-b border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl">🤗</div>
                  <h2 className="text-3xl font-bold">Openly Available on Hugging Face</h2>
                </div>
                <p className="text-gray-400 max-w-xl text-lg">We believe in open science. Our core datasets and base models are freely accessible to researchers and developers worldwide.</p>
              </div>
              <button className="px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 font-medium transition whitespace-nowrap">
                Explore on Hugging Face
              </button>
            </div>
            
            <div className="p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-6">
              {datasets.map((ds, i) => (
                <div key={i} className="p-6 rounded-xl bg-background border border-white/5 hover:border-blue-500/30 transition">
                  <h3 className="text-xl font-semibold mb-2 flex items-center justify-between">
                    {ds.name} <ArrowRight className="w-4 h-4 text-gray-500" />
                  </h3>
                  <p className="text-sm text-gray-400 mb-6">{ds.desc}</p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                    <span className="text-xs text-gray-500">{ds.size}</span>
                    <div className="flex gap-2">
                      {ds.tags.map(tag => (
                        <span key={tag} className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 8. Statistics */}
        <section className="border-y border-white/10 bg-white/[0.02] mt-32 py-20">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
            {stats.map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. FAQ */}
        <section className="max-w-3xl mx-auto px-6 mt-32">
          <h2 className="text-3xl font-bold text-center mb-10">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i} 
                className="border border-white/10 rounded-xl overflow-hidden bg-white/5 transition-all"
              >
                <button 
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-medium">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${activeFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {activeFaq === i && (
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* 11. Footer */}
      <footer className="border-t border-white/10 bg-background pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
            <div className="col-span-2 lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Bot className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-lg">Atlas AI</span>
              </div>
              <p className="text-gray-400 text-sm max-w-xs mb-6">
                Advancing Moroccan Artificial Intelligence through open research, high-quality datasets, and accessible models.
              </p>
              <div className="flex gap-4">
                <Github className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
                <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition" />
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Chat Interface</a></li>
                <li><a href="#" className="hover:text-white transition">API Documentation</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Research</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">Hugging Face</a></li>
                <li><a href="#" className="hover:text-white transition">Datasets</a></li>
                <li><a href="#" className="hover:text-white transition">Technical Report</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs text-gray-500">
            <p>© 2026 Atlas AI. Built for Morocco.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <span>All systems operational</span>
              <span className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-green-500"></div> Online</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}