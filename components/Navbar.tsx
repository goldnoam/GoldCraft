import React, { useState } from 'react';
import { Home, Hammer, Sparkles, Sun, Moon, Menu, ChevronDown, Milestone, Lightbulb, Flame, Leaf } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'הכל', icon: Hammer },
  { id: 'architecture', label: 'עיצוב מבנים', icon: Home },
  { id: 'bridge', label: 'גשרים', icon: Milestone },
  { id: 'interior', label: 'עיצוב פנים', icon: Lightbulb },
  { id: 'tnt', label: 'פיצוצים', icon: Flame },
  { id: 'environment', label: 'נוף וסביבה', icon: Leaf },
];

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, toggleSidebar, activeCategory, setActiveCategory }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    setIsDropdownOpen(false);
    // Smooth scroll to guides section if not already there
    const guidesSection = document.getElementById('guides');
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-[#2d2d2d] border-b-4 border-yellow-600 shadow-2xl px-4 py-4 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all text-gray-800 dark:text-white group"
            aria-label="פתח תפריט"
          >
            <Menu size={28} className="group-hover:scale-110 group-active:scale-90 transition-transform duration-200" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center pixel-border shadow-lg group">
              <Sparkles className="text-black group-hover:rotate-12 group-hover:scale-110 transition-transform duration-300" size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter minecraft-gold">GoldCraft</h1>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-black text-lg items-center text-gray-800 dark:text-white">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition-all hover:scale-105 group">
            <Home size={22} className="group-hover:-translate-y-1 transition-transform" />
            ראשי
          </a>
          
          {/* Category Filter Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button 
              className={`flex items-center gap-2 transition-all px-4 py-2 rounded-xl group ${activeCategory !== 'all' ? 'bg-yellow-600 text-black shadow-lg' : 'hover:text-yellow-600'}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Hammer size={22} className="group-hover:rotate-12 transition-transform" />
              {activeCategory === 'all' ? 'מדריכים' : CATEGORIES.find(c => c.id === activeCategory)?.label}
              <ChevronDown size={18} className={`transition-transform duration-300 ease-in-out ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-2 w-64 bg-white dark:bg-[#333] rounded-2xl shadow-2xl border-2 border-yellow-600 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'scale-y-100 opacity-100 translate-y-0' : 'scale-y-0 opacity-0 -translate-y-2 pointer-events-none'}`}>
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`w-full text-right px-6 py-4 flex items-center gap-4 hover:bg-yellow-600 hover:text-black transition-colors font-bold group/item ${activeCategory === cat.id ? 'bg-yellow-600/10 dark:bg-yellow-600/20 text-yellow-600' : ''}`}
                  >
                    <Icon size={20} className="group-hover/item:scale-110 group-hover/item:rotate-3 transition-transform" />
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all group shadow-md relative overflow-hidden"
            title={darkMode ? "עבור למצב יום" : "עבור למצב לילה"}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              {darkMode ? (
                <Sun size={24} className="text-yellow-400 group-hover:rotate-90 group-hover:scale-110 transition-all duration-500 ease-out animate-in zoom-in-50 spin-in-90" />
              ) : (
                <Moon size={24} className="text-gray-600 group-hover:-rotate-12 group-hover:scale-110 transition-all duration-500 ease-out animate-in zoom-in-50 spin-in-12" />
              )}
            </div>
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            className="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all text-gray-800 dark:text-white group"
          >
             {darkMode ? (
               <Sun size={24} className="text-yellow-400 group-active:rotate-90 transition-transform" />
             ) : (
               <Moon size={24} className="text-gray-600 group-active:-rotate-12 transition-transform" />
             )}
          </button>
          <button className="hidden sm:block bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-black shadow-[0_6px_0_0_#15803d] active:translate-y-1 active:shadow-none transition-all text-lg group">
            <span className="flex items-center gap-2">
              הצטרף לקהילה
              <Sparkles size={20} className="group-hover:animate-pulse" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;