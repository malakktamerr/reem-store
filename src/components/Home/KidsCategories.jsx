

import React from 'react';
import CategorySection from './CategorySection';
import { useLanguage } from '../../Context/LanguageContext'; 

function KidsCategories({ onOpenItem }) {
  const { t } = useLanguage();

  return (
    <CategorySection 
      categoryName="kids" 
      displayName={t.category?.kidsHeading || t.navbar?.categoryNames?.kids || 'أطفال'} 
      onOpenItem={onOpenItem}
      limit={9}
    />
  );
}

export default KidsCategories;