
import React, { useState } from 'react';
import { Guide } from '../types';
import { ChevronLeft, Info, Copy, Check } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(guide.description);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-[#3d3d3d] rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,215,0,0.1)] transition-all duration-300 group flex flex-col h-full shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={guide.imageUrl} 
          alt={guide.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-yellow-600 text-xs font-bold px-2 py-1 rounded text-black uppercase">
          {guide.category}
        </div>
        
        {/* Copy Button */}
        <button 
          onClick={handleCopy}
          className="absolute bottom-2 left-2 p-2 bg-black/50 hover:bg-black/80 rounded-lg text-white transition-colors flex items-center gap-1 text-xs"
          title="העתק תיאור"
        >
          {isCopied ? <Check size={14} className="text-green-400" /> : <Copy size={14} />}
          {isCopied && <span>הועתק!</span>}
        </button>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-yellow-100">{guide.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {guide.description}
        </p>
        
        <div className="mt-auto">
          <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-green-400">
            <div className="p-1 bg-green-400/10 rounded">
              <Info size={14} />
            </div>
            צעדים מרכזיים:
          </h4>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
            {/* Show only the first 2 steps as requested */}
            {guide.steps.slice(0, 2).map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold">•</span>
                {step}
              </li>
            ))}
          </ul>
          
          <button className="w-full bg-[#4d4d4d] hover:bg-yellow-600 hover:text-black py-2 rounded font-bold flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] group/btn">
            למדריך המלא
            <ChevronLeft size={16} className="transition-transform duration-300 group-hover/btn:-translate-x-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
