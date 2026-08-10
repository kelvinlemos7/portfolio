import React from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.jsx';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="sticky top-0 z-50 flex justify-end pointer-events-none px-[4.5rem] pt-8 sm:px-4 sm:pt-4">
      <div className="pointer-events-auto flex items-center gap-1 p-1 rounded-full bg-[#0F0F0F]/95 sm:bg-white/[0.03] border border-white/[0.1] backdrop-blur-none sm:backdrop-blur-sm whitespace-nowrap">
        <Globe className="w-4 h-4 text-gray-400 ml-2" />
        {['pt', 'en'].map((lang) => (
          <button
            key={lang}
            onClick={() => setLanguage(lang)}
            className={`px-2.5 sm:px-3 py-1 text-xs font-semibold uppercase rounded-full transition-all duration-300 cursor-pointer ${
              language === lang
                ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30'
                : 'text-gray-400 hover:text-purple-300'
            }`}
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
