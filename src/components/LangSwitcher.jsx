import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LangSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const languages = {
    'English': 'en',
    'French': 'fr',
    
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
 
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <select className="select select-ghost w-full max-w-[150px]" onChange={(e) => handleLanguageChange(e.target.value)}>
      <option disabled selected>{t('lang.Language')}</option>
      {Object.entries(languages).map(([label, code], index) => (
        <option key={index} value={code}>
          {t(`lang.${label}`)}
        </option>
      ))}
    </select>
  );
}
