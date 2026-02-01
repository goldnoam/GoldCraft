
import React, { useState } from 'react';
import { Home, Hammer, Sparkles, Sun, Moon, Menu, ChevronDown, Milestone, Lightbulb, Flame, Leaf, Globe, Zap, Shield, Image as ImageIcon } from 'lucide-react';
// Correcting imports: LanguageCode remains in types, while UI_STRINGS is imported from constants.
import { LanguageCode } from '../types';
import { UI_STRINGS } from '../constants';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
  lang: LanguageCode;
  setLang: (lang: LanguageCode) => void;
}

const LANGUAGES = [
  { code: 'he', label: 'עברית', flag: '🇮🇱' },
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, toggleSidebar, activeCategory, setActiveCategory, lang, setLang }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const t = (UI_STRINGS as any)[lang];
  const isRtl = lang === 'he' || lang === 'ar';

  const CATEGORIES = [
    { id: 'all', label: t.categoryAll, icon: Hammer },
    { id: 'architecture', label: t.categoryArch, icon: Home },
    { id: 'bridge', label: t.categoryBridge, icon: Milestone },
    { id: 'interior', label: t.categoryInterior, icon: Lightbulb },
    { id: 'tnt', label: t.categoryTnt, icon: Flame },
    { id: 'environment', label: t.categoryEnv, icon: Leaf },
    { id: 'redstone', label: t.categoryRedstone, icon: Zap },
    { id: 'survival', label: t.categorySurvival, icon: Shield },
    { id: 'pixelart', label: t.categoryPixel, icon: ImageIcon },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#2d2d2d] border-b-4 border-yellow-600 shadow-2xl px-4 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all text-gray-800 dark:text-white group"
          >
            <Menu size={28} className="group-hover:scale-110 transition-transform" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center pixel-border shadow-lg">
              <Sparkles className="text-black" size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter minecraft-gold">GoldCraft</h1>
          </div>
        </div>
        
        <div className="hidden md:flex gap-6 font-black text-lg items-center text-gray-800 dark:text-white">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition-all hover:scale-105 group">
            <Home size={22} className="group-hover:-translate-y-1 transition-transform" />
            {isRtl ? 'ראשי' : (lang === 'ar' ? 'الرئيسية' : 'Home')}
          </a>
          
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button className={`flex items-center gap-2 transition-all px-4 py-2 rounded-xl group ${activeCategory !== 'all' ? 'bg-yellow-600 text-black shadow-lg' : 'hover:text-yellow-600'}`}>
              <Hammer size={22} className="group-hover:rotate-12 transition-transform" />
              {activeCategory === 'all' ? (isRtl ? 'מדריכים' : 'Guides') : CATEGORIES.find(c => c.id === activeCategory)?.label}
              <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
            <div className={`absolute top-full ${isRtl ? 'right-0' : 'left-0'} mt-2 w-64 bg-white dark:bg-[#333] rounded-2xl shadow-2xl border-2 border-yellow-600 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setIsDropdownOpen(false); }}
                  className={`w-full text-right px-6 py-4 flex items-center gap-4 hover:bg-yellow-600 hover:text-black transition-colors font-bold ${activeCategory === cat.id ? 'bg-yellow-600/20 text-yellow-600' : ''}`}
                >
                  <cat.icon size={20} />
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="relative" onMouseEnter={() => setIsLangOpen(true)} onMouseLeave={() => setIsLangOpen(false)}>
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all group">
              <Globe size={22} className="group-hover:rotate-12 transition-transform" />
              <span className="uppercase">{lang}</span>
            </button>
            <div className={`absolute top-full ${isRtl ? 'right-0' : 'left-0'} mt-2 w-48 bg-white dark:bg-[#333] rounded-2xl shadow-2xl border-2 border-yellow-600 overflow-hidden transition-all duration-300 origin-top ${isLangOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => { setLang(l.code as LanguageCode); setIsLangOpen(false); }}
                  className={`w-full text-right px-6 py-3 flex items-center justify-between hover:bg-yellow-600 hover:text-black transition-colors font-bold ${lang === l.code ? 'bg-yellow-600/20 text-yellow-600' : ''}`}
                >
                  <span>{l.label}</span>
                  <span>{l.flag}</span>
                </button>
              ))}
            </div>
          </div>

          <button onClick={toggleTheme} className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-900 transition-all group shadow-md">
            {darkMode ? <Sun size={24} className="text-yellow-400 group-hover:rotate-45" /> : <Moon size={24} className="text-gray-600 group-hover:-rotate-12" />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
