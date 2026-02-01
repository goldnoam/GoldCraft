
import React, { useState } from 'react';
import { X, Home, Hammer, Mail, Info, Sun, Moon, ChevronDown, Milestone, Lightbulb, Flame, Leaf, Sparkles, Globe, Zap, Shield, Image as ImageIcon } from 'lucide-react';
// Correcting imports: LanguageCode remains in types, while UI_STRINGS is imported from constants.
import { LanguageCode } from '../types';
import { UI_STRINGS } from '../constants';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  toggleTheme: () => void;
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

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, darkMode, toggleTheme, activeCategory, setActiveCategory, lang, setLang }) => {
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);
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
    <>
      <div className={`fixed inset-0 bg-black/60 z-50 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed top-0 ${isRtl ? 'right-0' : 'left-0'} h-full w-72 bg-white dark:bg-[#1a1a1a] z-[60] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : (isRtl ? 'translate-x-full' : '-translate-x-full')}`}>
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black minecraft-gold">GoldCraft</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-800 dark:text-white group transition-colors">
              <X size={24} className="group-hover:rotate-90 transition-transform" />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4 font-bold text-lg text-gray-800 dark:text-white">
            <a href="#" onClick={onClose} className="flex items-center gap-4 p-3 hover:bg-yellow-600/10 rounded-xl transition-all group">
              <Home size={22} className="text-yellow-600" />
              {isRtl ? 'ראשי' : 'Home'}
            </a>
            
            <div className="flex flex-col">
              <button onClick={() => setIsGuidesOpen(!isGuidesOpen)} className="flex items-center justify-between gap-4 p-3 hover:bg-yellow-600/10 rounded-xl transition-all w-full text-right group">
                <div className="flex items-center gap-4">
                  <Hammer size={22} className="text-yellow-600" />
                  {isRtl ? 'מדריכים' : 'Guides'}
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${isGuidesOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              <div className={`flex flex-col gap-2 mt-2 pr-10 overflow-hidden transition-all duration-300 ${isGuidesOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {CATEGORIES.map(cat => (
                  <button key={cat.id} onClick={() => { setActiveCategory(cat.id); onClose(); }} className={`text-right py-2 px-4 rounded-lg text-base hover:bg-yellow-600 hover:text-black transition-all ${activeCategory === cat.id ? 'bg-yellow-600 text-black' : 'opacity-70'}`}>
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <button onClick={() => setIsLangOpen(!isLangOpen)} className="flex items-center justify-between gap-4 p-3 hover:bg-yellow-600/10 rounded-xl transition-all w-full text-right group">
                <div className="flex items-center gap-4">
                  <Globe size={22} className="text-yellow-600" />
                  {isRtl ? 'שפה' : 'Language'}
                </div>
                <ChevronDown size={18} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : 'rotate-0'}`} />
              </button>
              <div className={`flex flex-col gap-2 mt-2 pr-10 overflow-hidden transition-all duration-300 ${isLangOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                {LANGUAGES.map(l => (
                  <button key={l.code} onClick={() => { setLang(l.code as LanguageCode); onClose(); }} className={`text-right py-2 px-4 rounded-lg text-base hover:bg-yellow-600 hover:text-black transition-all flex items-center justify-between ${lang === l.code ? 'bg-yellow-600 text-black' : 'opacity-70'}`}>
                    <span>{l.label}</span>
                    <span>{l.flag}</span>
                  </button>
                ))}
              </div>
            </div>

            <button onClick={toggleTheme} className="flex items-center gap-4 p-3 hover:bg-yellow-600/10 rounded-xl transition-all text-right group">
              {darkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-400" />}
              {darkMode ? (isRtl ? 'מצב יום' : 'Light Mode') : (isRtl ? 'מצב לילה' : 'Dark Mode')}
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
