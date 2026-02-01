import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GuideCard from './components/GuideCard';
import GuideModal from './components/GuideModal';
import { GUIDES, UI_STRINGS } from './constants';
import { Guide, LanguageCode } from './types';
import { ChevronDown, Sparkles, Hammer, ShieldAlert, Zap, Mail, RotateCcw } from 'lucide-react';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState<LanguageCode>('he');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const t = UI_STRINGS[lang];
  const isRtl = lang === 'he' || lang === 'ar';

  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang, isRtl]);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(prev => !prev);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const resetPage = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const filteredGuides = activeCategory === 'all' 
    ? GUIDES 
    : GUIDES.filter(guide => guide.category === activeCategory);

  return (
    <div className={`min-h-screen transition-colors duration-500 ease-in-out bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 selection:bg-yellow-500 selection:text-black ${isRtl ? 'font-heebo' : 'font-rubik'}`}>
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        toggleSidebar={toggleSidebar}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        lang={lang}
        setLang={setLang}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        lang={lang}
        setLang={setLang}
      />

      {selectedGuide && (
        <GuideModal 
          guide={selectedGuide} 
          onClose={() => setSelectedGuide(null)} 
          lang={lang}
        />
      )}

      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 blur-sm transform scale-105"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop')` }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/50 dark:via-[#1a1a1a]/50 to-gray-50 dark:to-[#1a1a1a]"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <div className="mb-8 flex justify-center">
            <div className="bg-yellow-600 p-5 rounded-2xl shadow-[0_0_30px_rgba(202,138,4,0.5)] pixel-border animate-bounce">
              <Sparkles size={54} className="text-black" />
            </div>
          </div>
          <h1 className="text-7xl md:text-9xl font-black mb-8 minecraft-gold tracking-tight">{t.heroTitle}</h1>
          <p className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto leading-relaxed mb-10 text-gray-800 dark:text-gray-100 opacity-90">
            {t.heroSub}
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#guides"
              className="bg-green-600 hover:bg-green-500 text-white text-2xl px-12 py-5 rounded-xl font-black shadow-[0_8px_0_0_#15803d] hover:translate-y-[-2px] active:translate-y-1 active:shadow-none transition-all"
            >
              {t.learnBtn}
            </a>
            <a 
              href="mailto:goldnoamai@gmail.com"
              className="bg-yellow-600 hover:bg-yellow-500 text-black text-2xl px-12 py-5 rounded-xl font-black shadow-[0_8px_0_0_#b45309] hover:translate-y-[-2px] active:translate-y-1 active:shadow-none transition-all"
            >
              {t.feedbackBtn}
            </a>
          </div>
          <div className="mt-20 animate-pulse">
            <ChevronDown size={54} className="mx-auto text-yellow-600" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white dark:bg-[#262626] relative z-10 transition-colors">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all">
            <div className="w-24 h-24 bg-gray-100 dark:bg-[#3d3d3d] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-yellow-600 transition-all shadow-xl">
              <Hammer className="text-yellow-600 group-hover:text-black transition-colors" size={48} />
            </div>
            <h3 className="text-3xl font-black mb-6">{t.featuresTitle1}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{t.featuresDesc1}</p>
          </div>
          <div className="text-center group p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all">
            <div className="w-24 h-24 bg-gray-100 dark:bg-[#3d3d3d] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-600 transition-all shadow-xl">
              <Zap className="text-green-600 group-hover:text-black transition-colors" size={48} />
            </div>
            <h3 className="text-3xl font-black mb-6">{isRtl ? 'אפקטים מיוחדים' : 'Special Effects'}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{isRtl ? 'יצירת פיצוצים אסתטיים ותאורה דינמית.' : 'Creating aesthetic explosions and dynamic lighting.'}</p>
          </div>
          <div className="text-center group p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all">
            <div className="w-24 h-24 bg-gray-100 dark:bg-[#3d3d3d] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 transition-all shadow-xl">
              <ShieldAlert className="text-blue-600 group-hover:text-black transition-colors" size={48} />
            </div>
            <h3 className="text-3xl font-black mb-6">{isRtl ? 'תכנון אדריכלי' : 'Architectural Planning'}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">{isRtl ? 'הבנת פרופורציות ושילובי צבעים.' : 'Understanding proportions and color combinations.'}</p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20 min-h-[600px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className={`max-w-xl text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <h2 className="text-5xl md:text-6xl font-black text-yellow-500 mb-4 tracking-tighter">{t.guidesTitle}</h2>
          </div>
          <div className="hidden md:block h-1 flex-1 bg-yellow-600/20 mx-10 rounded-full"></div>
        </div>
        
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGuides.map(guide => (
              <GuideCard 
                key={guide.id} 
                guide={guide} 
                lang={lang}
                onSelect={(g) => setSelectedGuide(g)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 opacity-50">{t.noGuides}</h3>
            <button 
              onClick={() => setActiveCategory('all')}
              className="text-yellow-600 hover:text-yellow-500 font-bold underline"
            >
              {t.categoryAll}
            </button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#111] py-20 px-4 border-t-8 border-yellow-600 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-16 items-start text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <div>
              <div className={`flex items-center justify-center ${isRtl ? 'md:justify-start' : 'md:justify-start'} gap-4 mb-6`}>
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center pixel-border shadow-lg">
                  <Sparkles className="text-black" size={32} />
                </div>
                <h2 className="text-4xl font-black minecraft-gold tracking-tighter">GoldCraft</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm mx-auto md:mx-0">
                {t.footerDesc}
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black text-yellow-600 underline decoration-4 underline-offset-8">Send Feedback</h3>
              <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
                <a href="mailto:goldnoamai@gmail.com" className={`group flex items-center justify-center ${isRtl ? 'md:justify-start' : 'md:justify-start'} gap-3 hover:text-yellow-600 transition-colors font-bold text-lg`}>
                  <div className="p-3 bg-yellow-600/10 group-hover:bg-yellow-600 group-hover:text-black rounded-lg transition-all">
                    <Mail size={24} />
                  </div>
                  goldnoamai@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black text-yellow-600 underline decoration-4 underline-offset-8">{isRtl ? 'קישורים מהירים' : 'Quick Links'}</h3>
              <nav className="flex flex-col gap-4 text-lg font-bold">
                <a href="#" className="hover:text-yellow-600 transition-colors">{isRtl ? 'דף הבית' : 'Home'}</a>
                <a href="#guides" className="hover:text-yellow-600 transition-colors">{t.guidesTitle}</a>
              </nav>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 font-medium">
             <div className="flex flex-col items-center gap-2">
               <p className="text-lg font-bold text-gray-800 dark:text-gray-100">(C) Noam Gold AI 2026</p>
               <p>{isRtl ? 'מיוצר באהבה עבור קהילת המיינקראפט.' : 'Made with love for the Minecraft community.'}</p>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Controls */}
      <div className={`fixed bottom-8 ${isRtl ? 'left-8' : 'right-8'} flex flex-col gap-4 z-[90]`}>
        <button 
          onClick={resetPage}
          className="p-5 bg-yellow-600 text-black rounded-2xl shadow-[0_8px_0_0_#b45309] hover:translate-y-[-4px] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center"
        >
          <RotateCcw size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;
