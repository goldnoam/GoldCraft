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
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-xl transition-all text-gray-800 dark:text-white"
            aria-label="פתח תפריט"
          >
            <Menu size={28} />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center pixel-border shadow-lg">
              <Sparkles className="text-black" size={24} />
            </div>
            <h1 className="text-3xl md:text-4xl font-black tracking-tighter minecraft-gold">GoldCraft</h1>
          </div>
        </div>
        
        <div className="hidden md:flex gap-8 font-black text-lg items-center text-gray-800 dark:text-white">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-600 transition-all hover:scale-105">
            <Home size={22} />
            ראשי
          </a>
          
          {/* Category Filter Dropdown */}
          <div className="relative" onMouseEnter={() => setIsDropdownOpen(true)} onMouseLeave={() => setIsDropdownOpen(false)}>
            <button 
              className={`flex items-center gap-2 transition-all px-4 py-2 rounded-xl ${activeCategory !== 'all' ? 'bg-yellow-600 text-black shadow-lg' : 'hover:text-yellow-600'}`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <Hammer size={22} />
              {activeCategory === 'all' ? 'מדריכים' : CATEGORIES.find(c => c.id === activeCategory)?.label}
              <ChevronDown size={18} className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            <div className={`absolute top-full right-0 mt-2 w-64 bg-white dark:bg-[#333] rounded-2xl shadow-2xl border-2 border-yellow-600 overflow-hidden transition-all duration-300 origin-top ${isDropdownOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
              {CATEGORIES.map((cat) => {
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`w-full text-right px-6 py-4 flex items-center gap-4 hover:bg-yellow-600 hover:text-black transition-colors font-bold ${activeCategory === cat.id ? 'bg-yellow-600/10 dark:bg-yellow-600/20 text-yellow-600' : ''}`}
                  >
                    <Icon size={20} />
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
            className="p-3 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-yellow-100 dark:hover:bg-yellow-900/30 transition-all group shadow-md"
            title={darkMode ? "עבור למצב יום" : "עבור למצב לילה"}
          >
            {darkMode ? (
              <Sun size={24} className="text-yellow-400 group-hover:rotate-45 transition-transform" />
            ) : (
              <Moon size={24} className="text-gray-600 group-hover:-rotate-12 transition-transform" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={(e) => {
              e.preventDefault();
              toggleTheme();
            }}
            className="md:hidden p-3 rounded-xl bg-gray-100 dark:bg-gray-800 transition-all text-gray-800 dark:text-white"
          >
             {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} />}
          </button>
          <button className="hidden sm:block bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-xl font-black shadow-[0_6px_0_0_#15803d] active:translate-y-1 active:shadow-none transition-all text-lg">
            הצטרף לקהילה
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;