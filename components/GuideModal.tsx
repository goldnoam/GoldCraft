import React, { useState } from 'react';
import { Guide, LanguageCode } from '../types';
import { UI_STRINGS } from '../constants';
import { X, MapPin, Copy, Check, Image as ImageIcon } from 'lucide-react';

interface GuideModalProps {
  guide: Guide;
  lang: LanguageCode;
  onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ guide, lang, onClose }) => {
  const [isCopied, setIsCopied] = useState(false);
  const t = UI_STRINGS[lang];
  const isRtl = lang === 'he' || lang === 'ar';

  const handleCopyFullGuide = async () => {
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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      <div className={`relative bg-white dark:bg-[#2d2d2d] w-full max-w-5xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto pixel-border-gold animate-in fade-in zoom-in duration-300 ${isRtl ? 'text-right' : 'text-left'}`}>
        <div className={`sticky top-0 right-0 left-0 z-20 flex ${isRtl ? 'flex-row-reverse' : 'flex-row'} justify-between items-center p-4 bg-white/10 backdrop-blur-md dark:bg-black/10`}>
          <button onClick={onClose} className="p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors">
            <X size={24} />
          </button>
          <button onClick={handleCopyFullGuide} className="flex items-center gap-2 px-4 py-2 bg-yellow-600 hover:bg-yellow-500 text-black font-bold rounded-lg transition-all">
            {isCopied ? <Check size={18} /> : <Copy size={18} />}
            {isCopied ? t.copied : t.copyBtn}
          </button>
        </div>

        <div className="flex flex-col">
          <div className={`flex flex-col md:flex-row ${isRtl ? 'md:flex-row-reverse' : ''}`}>
            <div className="md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img src={guide.imageUrl} alt={guide.title[lang]} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
            </div>

            <div className="md:w-1/2 p-6 sm:p-10 flex flex-col">
              <div className="mb-6">
                <div className="inline-block bg-yellow-600 text-black text-xs font-bold px-3 py-1 rounded-full mb-2 uppercase tracking-wider">{guide.category}</div>
                <h2 className="text-4xl font-black text-gray-900 dark:text-white leading-tight">{guide.title[lang]}</h2>
              </div>
              <p className={`text-lg text-gray-600 dark:text-gray-300 mb-8 italic ${isRtl ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-yellow-600`}>"{guide.description[lang]}"</p>
              <div className="space-y-6">
                <h3 className="text-xl font-bold flex items-center gap-2 text-green-600 dark:text-green-400">
                  <MapPin size={24} />
                  {isRtl ? 'מדריך שלב אחר שלב:' : 'Step-by-step Guide:'}
                </h3>
                <ul className="space-y-4">
                  {guide.steps[lang].map((step, index) => (
                    <li key={index} className="flex gap-4 items-start group">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-600 flex items-center justify-center text-black font-bold shadow-lg">{index + 1}</div>
                      <p className="text-gray-800 dark:text-gray-200 leading-relaxed font-medium pt-1">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {guide.galleryImages && guide.galleryImages.length > 0 && (
            <div className="p-6 sm:p-10 bg-gray-50 dark:bg-[#252525] border-t border-gray-100 dark:border-gray-800">
              <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-yellow-600">
                <ImageIcon size={28} />
                {isRtl ? 'גלריית השראה' : 'Inspiration Gallery'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {guide.galleryImages.map((url, idx) => (
                  <div key={idx} className="relative aspect-video rounded-xl overflow-hidden shadow-xl group">
                    <img src={url} alt="Minecraft" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 sm:p-10 bg-white dark:bg-[#2d2d2d] pt-8 border-t border-gray-200 dark:border-gray-700 text-center text-gray-500 text-sm">
            <span>{isRtl ? 'נכתב על ידי צוות GoldCraft' : 'Written by GoldCraft Team'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideModal;
