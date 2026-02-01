
import React from 'react';
import { X, Home, Hammer, Mail, Info } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
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
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-black minecraft-gold">GoldCraft</h2>
            <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full">
              <X size={24} />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 font-bold text-lg">
            <a href="#" onClick={onClose} className="flex items-center gap-4 hover:text-yellow-500 transition-colors">
              <Home size={22} />
              ראשי
            </a>
            <a href="#guides" onClick={onClose} className="flex items-center gap-4 hover:text-yellow-500 transition-colors">
              <Hammer size={22} />
              מדריכים
            </a>
            <div className="h-px bg-gray-200 dark:bg-gray-800 my-2" />
            <a href="mailto:goldnoamai@gmail.com" className="flex items-center gap-4 hover:text-yellow-500 transition-colors">
              <Mail size={22} />
              צור קשר
            </a>
            <a href="#" className="flex items-center gap-4 hover:text-yellow-500 transition-colors">
              <Info size={22} />
              אודות
            </a>
          </nav>

          <div className="absolute bottom-10 left-6 right-6">
            <button className="w-full bg-green-600 text-white py-3 rounded-xl font-black shadow-[0_4px_0_0_#15803d]">
              התחבר עכשיו
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
