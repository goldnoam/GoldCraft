
import React from 'react';
import { Home, Hammer, Sparkles, Sun, Moon, Menu } from 'lucide-react';

interface NavbarProps {
  darkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, toggleSidebar }) => {
  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-[#2d2d2d] border-b-4 border-yellow-600 shadow-xl px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar}
            className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors"
          >
            <Menu size={24} />
          </button>
          <div className="w-10 h-10 bg-yellow-500 rounded flex items-center justify-center pixel-border">
            <Sparkles className="text-black" />
          </div>
          <h1 className="text-2xl md:text-3xl font-black tracking-tighter minecraft-gold">GoldCraft</h1>
        </div>
        
        <div className="hidden md:flex gap-8 font-bold items-center">
          <a href="#" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
            <Home size={18} />
            ראשי
          </a>
          <a href="#guides" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
            <Hammer size={18} />
            מדריכים
          </a>
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            title="החלף מצב תצוגה"
          >
            {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-600" />}
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={toggleTheme}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
             {darkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} />}
          </button>
          <button className="hidden sm:block bg-green-600 hover:bg-green-500 text-white px-6 py-2 rounded font-bold shadow-[0_4px_0_0_#15803d] active:translate-y-1 active:shadow-none transition-all">
            הצטרף
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
