import React, { useState } from 'react';
import { Guide } from '../types';
import { X, CheckCircle2, MapPin, Copy, Check, Image as ImageIcon } from 'lucide-react';

interface GuideModalProps {
  guide: Guide;
  onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyFullGuide = async () => {
    try {
      const stepsText = guide.steps.map((step, index) => `${index + 1}. ${step}`).join('\n');
      const fullContent = `מדריך GoldCraft: ${guide.title}\n\nתיאור: ${guide.description}\n\nצעדים:\n${stepsText}`;
      await navigator.clipboard.writeText(fullContent);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy content: ', err);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-[#2d2d2d] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto pixel-border-gold animate-in fade-in zoom-in duration-300">
        <div className="sticky top-0 right-0 left-0 z-20 flex justify-between items-center p-4 bg-white/10 backdrop-blur-md dark:bg-black/10">
          <button 
            onClick={onClose}
            className="p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors shadow-lg"
          >
            <X size={24} />
          </button>
          <button 
            onClick={handleCopyFullGuide}
            className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all shadow-lg"
          >
            {isCopied ? <Check size={18} /> : <Copy size={18} />}
            {isCopied ? 'הועתק!' : 'העתק מדריך'}
          </button>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            {/* Main Image Section */}
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img 
                src={guide.imageUrl} 
                alt={guide.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
              <div className="absolute bottom-4 right-4 text-white md:hidden">
                <h2 className="text-3xl font-black">{guide.title}</h2>
              </div>
            </div>

            {/* Content Section */}
            <div className="md:w-1/2 p-6 sm:p-10 flex flex-col">
              <div className="hidden md:block mb-6">
                <div className="inline-block bg-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">
                  {guide.category}
                </div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">
                  {guide.title}
                </h2>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 italic border-r-4 border-yellow-600 pr-4">
                "{guide.description}"
              </p>

              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-green-600 dark:text-green-400">
                  <MapPin size={24} />
                  מדריך שלב אחר שלב:
                </h3>
                
                <ul className="space-y-4">
                  {guide.steps.map((step, index) => (
                    <li key={index} className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold shadow-lg group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      <div className="flex-1 pt-1">
                        <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium">
                          {step}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          {guide.galleryImages && guide.galleryImages.length > 0 && (
            <div className="p-6 sm:p-10 bg-gray-50 dark:bg-[#252525] border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-yellow-600">
                <ImageIcon size={28} />
                גלריית השראה ממיינקראפט
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guide.galleryImages.map((url, idx) => (
                  <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
                    <img 
                      src={url} 
                      alt={`Minecraft Inspiration ${idx + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10 bg-white dark:bg-[#2d2d2d]">
            <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-[#2d2d2d] flex items-center justify-center text-[10px] text-white font-bold">NG</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-[#2d2d2d] flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                </div>
                <span>נכתב על ידי צוות המומחים של GoldCraft - יועצי הבנייה הדיגיטליים שלך.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        .pixel-border-gold {
          box-shadow: 
            0 8px 0 0 #b45309,
            0 -4px 0 0 #000,
            4px 0 0 0 #000,
            -4px 0 0 0 #000;
        }
      `}</style>
    </div>
  );
};

export default GuideModal;