import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { GlobeIcon, USFlagIcon, JapanFlagIcon } from './icons';

const LanguageToggle: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-sm hover:shadow-md"
      title={language === 'en' ? 'Switch to Japanese' : 'Switch to English'}
    >
      {/* Flag Icon */}
      <div className="flex items-center justify-center">
        {language === 'en' ? (
          <USFlagIcon className="w-5 h-3 rounded-sm shadow-sm" />
        ) : (
          <JapanFlagIcon className="w-5 h-3 rounded-sm shadow-sm" />
        )}
      </div>
      
      {/* Language Code */}
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        {language === 'en' ? 'EN' : 'JP'}
      </span>
      
      {/* Globe Icon */}
      <GlobeIcon className="w-4 h-4 text-gray-500 dark:text-gray-400 transition-transform duration-200 group-hover:rotate-180" />
    </button>
  );
};

export default LanguageToggle; 