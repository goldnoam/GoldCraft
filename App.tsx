
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import GuideCard from './components/GuideCard';
import GuideModal from './components/GuideModal';
import { GUIDES } from './constants';
import { Guide } from './types';
import { ChevronDown, Sparkles, Hammer, ShieldAlert, Zap, Mail, RotateCcw } from 'lucide-react';

const App: React.FC = () => {
  // Dark mode by default as requested
  const [darkMode, setDarkMode] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<Guide | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(prev => !prev);
  };

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const resetPage = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const filteredGuides = activeCategory === 'all' 
    ? GUIDES 
    : GUIDES.filter(guide => guide.category === activeCategory);

  return (
    <div className="min-h-screen transition-colors duration-500 ease-in-out bg-gray-50 dark:bg-[#1a1a1a] text-gray-900 dark:text-gray-100 selection:bg-yellow-500 selection:text-black">
      <Navbar 
        darkMode={darkMode} 
        toggleTheme={toggleTheme} 
        toggleSidebar={toggleSidebar}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
        darkMode={darkMode}
        toggleTheme={toggleTheme}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {selectedGuide && (
        <GuideModal 
          guide={selectedGuide} 
          onClose={() => setSelectedGuide(null)} 
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
          <h1 className="text-7xl md:text-9xl font-black mb-8 minecraft-gold tracking-tight">GoldCraft</h1>
          <p className="text-2xl md:text-4xl font-bold max-w-3xl mx-auto leading-relaxed mb-10 text-gray-800 dark:text-gray-100 opacity-90">
            הפוך את עולם הקוביות שלך ליצירת אדריכלות מופת.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="#guides"
              className="bg-green-600 hover:bg-green-500 text-white text-2xl px-12 py-5 rounded-xl font-black shadow-[0_8px_0_0_#15803d] hover:translate-y-[-2px] active:translate-y-1 active:shadow-none transition-all"
            >
              התחל ללמוד
            </a>
            <a 
              href="mailto:goldnoamai@gmail.com"
              className="bg-yellow-600 hover:bg-yellow-500 text-black text-2xl px-12 py-5 rounded-xl font-black shadow-[0_8px_0_0_#b45309] hover:translate-y-[-2px] active:translate-y-1 active:shadow-none transition-all"
            >
              שלח משוב
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
            <h3 className="text-3xl font-black mb-6">טכניקות בנייה</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">למד להשתמש בבלוקים בצורה שלא חשבת עליה מעולם. עומק, טקסטורה ופרטים קטנים שעושים הבדל גדול.</p>
          </div>
          <div className="text-center group p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all">
            <div className="w-24 h-24 bg-gray-100 dark:bg-[#3d3d3d] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-green-600 transition-all shadow-xl">
              <Zap className="text-green-600 group-hover:text-black transition-colors" size={48} />
            </div>
            <h3 className="text-3xl font-black mb-6">אפקטים מיוחדים</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">יצירת פיצוצים אסתטיים, עשן ותאורה דינמית שמעניקים למבנה שלך חיים וסיפור ייחודי.</p>
          </div>
          <div className="text-center group p-8 rounded-3xl hover:bg-gray-50 dark:hover:bg-[#333] transition-all">
            <div className="w-24 h-24 bg-gray-100 dark:bg-[#3d3d3d] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 transition-all shadow-xl">
              <ShieldAlert className="text-blue-600 group-hover:text-black transition-colors" size={48} />
            </div>
            <h3 className="text-3xl font-black mb-6">תכנון אדריכלי</h3>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">הבנת פרופורציות, שילובי צבעים והנדסת מרחב בעולם הקוביות להשגת מראה מקצועי.</p>
          </div>
        </div>
      </section>

      {/* Guides Section */}
      <section id="guides" className="py-24 px-4 max-w-7xl mx-auto scroll-mt-20 min-h-[600px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-16">
          <div className="max-w-xl text-center md:text-right">
            <h2 className="text-5xl md:text-6xl font-black text-yellow-500 mb-4 tracking-tighter">מדריכי בנייה נבחרים</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 font-medium">אספנו עבורכם את מיטב המדריכים כדי שתוכלו להתחיל לבנות כבר עכשיו.</p>
          </div>
          <div className="hidden md:block h-1 flex-1 bg-yellow-600/20 mx-10 rounded-full"></div>
        </div>
        
        {filteredGuides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredGuides.map(guide => (
              <GuideCard 
                key={guide.id} 
                guide={guide} 
                onSelect={(g) => setSelectedGuide(g)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-gray-100 dark:bg-gray-800 rounded-3xl border-2 border-dashed border-gray-300 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-4 opacity-50">לא נמצאו מדריכים בקטגוריה זו עדיין...</h3>
            <button 
              onClick={() => setActiveCategory('all')}
              className="text-yellow-600 hover:text-yellow-500 font-bold underline"
            >
              חזור לכל המדריכים
            </button>
          </div>
        )}
      </section>

      {/* AdSense Placement */}
      <section className="max-w-7xl mx-auto mb-20 p-4">
        <div className="bg-gray-200 dark:bg-gray-800 h-32 flex items-center justify-center rounded-2xl border-4 border-dashed border-gray-400/50 overflow-hidden group">
           <div className="opacity-50 group-hover:opacity-100 transition-opacity flex flex-col items-center">
             <span className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Advertisement</span>
             <ins className="adsbygoogle"
                  style={{display:'block', width:'100%', height:'90px'}}
                  data-ad-client="ca-pub-0000000000000000"
                  data-ad-slot="0000000000"
                  data-ad-format="auto"
                  data-full-width-responsive="true"></ins>
           </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#111] py-20 px-4 border-t-8 border-yellow-600 transition-colors">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 items-start text-center md:text-right">
            <div>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="w-14 h-14 bg-yellow-500 rounded-xl flex items-center justify-center pixel-border shadow-lg">
                  <Sparkles className="text-black" size={32} />
                </div>
                <h2 className="text-4xl font-black minecraft-gold tracking-tighter">GoldCraft</h2>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-sm">
                קהילת הבנייה המובילה בישראל למיינקראפט. אנו מאמינים שכל אחד יכול להיות אדריכל בתוך המשחק.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black text-yellow-600 underline decoration-4 underline-offset-8">Send Feedback</h3>
              <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-300">
                <a href="mailto:goldnoamai@gmail.com" className="group flex items-center justify-center md:justify-start gap-3 hover:text-yellow-600 transition-colors font-bold text-lg">
                  <div className="p-3 bg-yellow-600/10 group-hover:bg-yellow-600 group-hover:text-black rounded-lg transition-all">
                    <Mail size={24} />
                  </div>
                  goldnoamai@gmail.com
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h3 className="text-2xl font-black text-yellow-600 underline decoration-4 underline-offset-8">קישורים מהירים</h3>
              <nav className="flex flex-col gap-4 text-lg font-bold">
                <a href="#" className="hover:text-yellow-600 transition-colors">דף הבית</a>
                <a href="#guides" className="hover:text-yellow-600 transition-colors">מדריכי בנייה</a>
                <a href="#" className="hover:text-yellow-600 transition-colors">תנאי שימוש</a>
                <a href="#" className="hover:text-yellow-600 transition-colors">מדיניות פרטיות</a>
              </nav>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 font-medium">
             <div className="flex flex-col items-center gap-2">
               <p className="text-lg font-bold text-gray-800 dark:text-gray-100">(C) Noam Gold AI 2026</p>
               <p>מיוצר באהבה עבור קהילת המיינקראפט הישראלית. כל הזכויות שמורות.</p>
             </div>
          </div>
        </div>
      </footer>

      {/* Floating Controls */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-[90]">
        <button 
          onClick={resetPage}
          className="p-5 bg-yellow-600 text-black rounded-2xl shadow-[0_8px_0_0_#b45309] hover:translate-y-[-4px] active:translate-y-1 active:shadow-none transition-all flex items-center justify-center"
          title="חזור למעלה"
        >
          <RotateCcw size={28} />
        </button>
      </div>
    </div>
  );
};

export default App;
