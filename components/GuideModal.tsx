import React from 'react';
import { Guide } from '../types';
import { X, CheckCircle2, MapPin } from 'lucide-react';

interface GuideModalProps {
  guide: Guide;
  onClose: () => void;
}

const GuideModal: React.FC<GuideModalProps> = ({ guide, onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-hidden">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white dark:bg-[#2d2d2d] w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-y-auto pixel-border-gold animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 left-4 z-10 p-2 bg-black/20 hover:bg-black/40 rounded-full text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="flex flex-col md:flex-row">
          {/* Image Section */}
          <div className="md:w-1/2 h-64 md:h-auto relative">
            <img 
              src={guide.imageUrl} 
              alt={guide.title} 
              className="w-full h-full object-cover"
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

            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 italic">
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

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-white dark:border-[#2d2d2d] flex items-center justify-center text-[10px] text-white font-bold">NG</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-white dark:border-[#2d2d2d] flex items-center justify-center text-[10px] text-white font-bold">AI</div>
                </div>
                <span>נכתב על ידי צוות המומחים של GoldCraft</span>
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