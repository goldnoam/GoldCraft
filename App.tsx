import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GuideCard from './components/GuideCard';
import { GUIDES } from './constants';
import { ChevronDown, Sparkles, Hammer, ShieldAlert, Zap, Mail } from 'lucide-react';

const App: React.FC = () => {
  // Dark mode by default
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 selection:bg-yellow-500 selection:text-black">
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        toggleSidebar={toggleSidebar} 
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 blur-sm"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#1a1a1a]"></div>
        
        <div className="relative z-10 text-center px-4">
          <div className="mb-6 flex justify-center">
            <div className="bg-yellow-600 p-4 rounded-2xl pixel-border animate-bounce">
              <Sparkles size={48} className="text-black" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-6 minecraft-gold">GoldCraft</h1>
          <p className="text-xl md:text-3xl font-medium max-w-2xl mx-auto leading-relaxed mb-8">
            למד לבנות יצירות מופת במיינקראפט. מבתים מודרניים ועד גשרים אדירים, הכל במקום אחד.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="#guides"
              className="bg-green-600 hover:bg-green-500 text-white text-xl px-10 py-4 rounded-xl font-bold shadow-[0_6px_0_0_#15803d] hover:translate-y-[-2px] active:translate-y-1 active:shadow-none transition-all"
            >
              התחל ללמוד
            </a>
            <a 
              href="mailto:goldnoamai@gmail.com"
              className="bg-yellow-600 hover:bg-yellow-500 text-black text-xl px-10 py-4 rounded-xl font-bold shadow-[0_6px_0_0_#b45309] hover:translate-y-[-2px] active:translate-y-1 active:shadow-none transition-all"
            >
              צור קשר
            </a>
          </div>
          <div className="mt-16 animate-pulse">
            <ChevronDown size={48} className="mx-auto text-yellow-600" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white dark:bg-[#262626]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center group">
            <div className="w-20 h-20 bg-gray-100 dark:bg-[#3d3d3d] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors">
              <Hammer className="text-yellow-600 group-hover:text-black transition-colors" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">טכניקות בנייה</h3>
            <p className="text-gray-500 dark:text-gray-400">למד להשתמש בבלוקים בצורה שלא חשבת עליה מעולם.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gray-100 dark:bg-[#3d3d3d] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-green-600 transition-colors">
              <Zap className="text-green-600 group-hover:text-black transition-colors" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">אפקטים מיוחדים</h3>
            <p className="text-gray-500 dark:text-gray-400">יצירת פיצוצים אסתטיים, עשן ותאורה דינמית.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-gray-100 dark:bg-[#3d3d3d] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors">
              <ShieldAlert className="text-blue-600 group-hover:text-black transition-colors" size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4">תכנון אדריכלי</h3>
            <p className="text-gray-500 dark:text-gray-400">הבנת פרופורציות, עומק וצבע בעולם הקוביות.</p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-24 px-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 text-center md:text-right">
          <div className="h-1 flex-1 bg-yellow-600/30"></div>
          <h2 className="text-4xl font-black text-yellow-500">מדריכי בנייה נבחרים</h2>
          <div className="h-1 flex-1 bg-yellow-600/30"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {GUIDES.map(guide => (
            <GuideCard key={guide.id} guide={guide} />
          ))}
        </div>
      </section>

      {/* AdSense Placement */}
      <section className="max-w-7xl mx-auto mb-12 p-4">
        <div className="bg-gray-200 dark:bg-gray-800 h-24 flex items-center justify-center rounded border-2 border-dashed border-gray-400 overflow-hidden">
           <ins className="adsbygoogle"
                style={{display:'block', width:'100%', height:'90px'}}
                data-ad-client="ca-pub-0000000000000000"
                data-ad-slot="0000000000"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-[#111] py-16 px-4 border-t-4 border-yellow-600">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-12 h-12 bg-yellow-500 rounded flex items-center justify-center pixel-border">
              <Sparkles className="text-black" size={24} />
            </div>
            <h2 className="text-3xl font-black minecraft-gold">GoldCraft</h2>
          </div>
          
          <div className="flex flex-col gap-4 text-gray-600 dark:text-gray-400">
            <p className="text-lg font-bold">(C) Noam Gold AI 2026</p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-2">
              <span>Send Feedback:</span>
              <a href="mailto:goldnoamai@gmail.com" className="text-yellow-600 hover:underline font-bold flex items-center gap-1">
                <Mail size={16} />
                goldnoamai@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-8 text-sm font-bold opacity-70">
            <a href="#" className="hover:text-yellow-500">תקנון</a>
            <a href="#" className="hover:text-yellow-500">פרטיות</a>
            <a href="#" className="hover:text-yellow-500">נגישות</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;