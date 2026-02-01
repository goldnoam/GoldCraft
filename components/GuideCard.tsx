
import React from 'react';
import { Guide } from '../types';
import { ChevronLeft, Info } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => {
  return (
    <div className="bg-[#3d3d3d] rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 transition-all group flex flex-col h-full shadow-2xl">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={guide.imageUrl} 
          alt={guide.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-2 right-2 bg-yellow-600 text-xs font-bold px-2 py-1 rounded text-black uppercase">
          {guide.category}
        </div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold mb-2 text-yellow-100">{guide.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {guide.description}
        </p>
        
        <div className="mt-auto">
          <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-green-400">
            <Info size={14} />
            צעדים מרכזיים:
          </h4>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
            {guide.steps.slice(0, 3).map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-600">•</span>
                {step}
              </li>
            ))}
          </ul>
          
          <button className="w-full bg-[#4d4d4d] hover:bg-[#5d5d5d] py-2 rounded font-bold flex items-center justify-center gap-2 transition-colors">
            למדריך המלא
            <ChevronLeft size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
