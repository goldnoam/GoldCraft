import React, { useState } from 'react';
import { X, Home, Hammer, Mail, Info, Sun, Moon, ChevronDown, Milestone, Lightbulb, Flame, Leaf } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  darkMode: boolean;
  toggleTheme: () => void;
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

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, darkMode, toggleTheme, activeCategory, setActiveCategory }) => {
  const [isGuidesOpen, setIsGuidesOpen] = useState(false);

  const handleCategorySelect = (id: string) => {
    setActiveCategory(id);
    onClose();
    const guidesSection = document.getElementById('guides');
    if (guidesSection) {
      guidesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      
      {/* Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white dark:bg-[#1a1a1a] z-[60] shadow-2xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="p-6 h-full flex flex-col overflow-y-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black minecraft-gold">GoldCraft</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full text-gray-800 dark:text-white">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-4 font-bold text-lg text-gray-800 dark:text-white">
            <a href="#" onClick={onClose} className="flex items-center gap-4 p-2 hover:bg-yellow-600/10 rounded-xl transition-all">
              <Home size={22} className="text-yellow-600" />
              ראשי
            </a>
            
            {/* Guides Section with Categories */}
            <div className="flex flex-col">
              <button 
                onClick={() => setIsGuidesOpen(!isGuidesOpen)}
                className={`flex items-center justify-between gap-4 p-2 hover:bg-yellow-600/10 rounded-xl transition-all w-full text-right ${activeCategory !== 'all' ? 'text-yellow-600' : ''}`}
              >
                <div className="flex items-center gap-4">
                  <Hammer size={22} className="text-yellow-600" />
                  מדריכים
                </div>
                <ChevronDown size={18} className={`transition-transform ${isGuidesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <div className={`flex flex-col gap-2 mt-2 pr-10 overflow-hidden transition-all duration-300 ${isGuidesOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {CATEGORIES.map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => handleCategorySelect(cat.id)}
                    className={`text-right py-2 px-4 rounded-lg text-base hover:bg-yellow-600 hover:text-black transition-all ${activeCategory === cat.id ? 'bg-yellow-600 text-black' : 'opacity-70'}`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => {
                toggleTheme();
              }} 
              className="flex items-center gap-4 p-2 hover:bg-yellow-600/10 rounded-xl transition-all text-right"
            >
              {darkMode ? <Sun size={22} className="text-yellow-400" /> : <Moon size={22} className="text-gray-400" />}
              {darkMode ? "מצב יום" : "מצב לילה"}
            </button>
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
            <a href="mailto:goldnoamai@gmail.com" className="flex items-center gap-4 p-2 hover:bg-yellow-600/10 rounded-xl transition-all">
              <Mail size={22} className="text-yellow-600" />
              צור קשר
            </a>
            <a href="#" className="flex items-center gap-4 p-2 hover:bg-yellow-600/10 rounded-xl transition-all">
              <Info size={22} className="text-yellow-600" />
              אודות
            </a>
          </nav>

          <div className="mt-auto pt-10 pb-6">
            <button className="w-full bg-green-600 text-white py-4 rounded-xl font-black shadow-[0_4px_0_0_#15803d] active:translate-y-1 active:shadow-none transition-all text-xl">
              התחבר עכשיו
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;