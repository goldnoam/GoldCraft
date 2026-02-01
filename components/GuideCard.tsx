import React, { useState } from 'react';
import { Guide, LanguageCode } from '../types';
import { UI_STRINGS } from '../constants';
import { ChevronLeft, ChevronRight, Info, Copy, Check, ChevronUp, FileText } from 'lucide-react';

interface GuideCardProps {
  guide: Guide;
  lang: LanguageCode;
  onSelect: (guide: Guide) => void;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide, lang, onSelect }) => {
  const [isCopied, setIsCopied] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const t = UI_STRINGS[lang];
  const isRtl = lang === 'he' || lang === 'ar';

  const handleCopyFullGuide = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const stepsText = guide.steps[lang].map((step, index) => `${index + 1}. ${step}`).join('\n');
      const fullContent = `${t.heroTitle}: ${guide.title[lang]}\n\n${t.featuresTitle1}: ${guide.description[lang]}\n\nSteps:\n${stepsText}`;
      await navigator.clipboard.writeText(fullContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy content: ', err);
    }
  };

  const handleFullGuideClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(!isExpanded);
    onSelect(guide);
  };

  return (
    <div 
      className={`bg-white dark:bg-[#3d3d3d] rounded-lg overflow-hidden border-2 border-transparent hover:border-yellow-500 hover:scale-[1.03] hover:shadow-[0_20px_50px_rgba(255,215,0,0.15)] transition-all duration-300 group flex flex-col h-full shadow-lg dark:shadow-2xl cursor-pointer ${isExpanded ? 'ring-2 ring-yellow-500' : ''}`}
      onClick={() => onSelect(guide)}
    >
      <div className="relative h-48 overflow-hidden bg-[#2a2a2a]">
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-yellow-600/20 border-t-yellow-600 rounded-full animate-spin"></div>
          </div>
        )}
        
        <img 
          src={guide.imageUrl} 
          alt={guide.title[lang]} 
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${imageLoaded ? 'opacity-100' : 'opacity-0'} group-hover:scale-110 transition-transform duration-700`}
        />
        
        <div className={`absolute top-2 ${isRtl ? 'right-2' : 'left-2'} bg-yellow-600 text-xs font-bold px-2 py-1 rounded text-black uppercase z-10`}>
          {guide.category}
        </div>
        
        <button 
          onClick={handleCopyFullGuide}
          className={`absolute bottom-2 ${isRtl ? 'left-2' : 'right-2'} p-2 bg-black/60 hover:bg-black/90 rounded-lg text-white transition-all flex items-center gap-2 text-xs z-10 border border-white/20`}
        >
          {isCopied ? <Check size={14} className="text-green-400" /> : <FileText size={14} />}
          <span className="font-bold">{isCopied ? t.copied : t.copyBtn}</span>
        </button>
      </div>
      
      <div className={`p-6 flex-1 flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-yellow-100 group-hover:text-yellow-600 transition-colors">{guide.title[lang]}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
          {guide.description[lang]}
        </p>
        
        <div className="mt-auto">
          <h4 className="font-bold text-sm mb-2 flex items-center gap-2 text-green-600 dark:text-green-400">
            <Info size={14} />
            {isRtl ? 'צעדים:' : 'Steps:'}
          </h4>
          <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1 mb-6">
            {guide.steps[lang].slice(0, 2).map((step, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold flex-shrink-0">•</span>
                <span className="line-clamp-1">{step}</span>
              </li>
            ))}
          </ul>
          
          <button 
            onClick={handleFullGuideClick}
            className="w-full bg-gray-100 dark:bg-[#4d4d4d] hover:bg-yellow-600 text-gray-800 dark:text-white hover:text-black py-2 rounded font-bold flex items-center justify-center gap-2 transition-all duration-300 group/btn"
          >
            {t.fullGuide}
            {isRtl ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GuideCard;
