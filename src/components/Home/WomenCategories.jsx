
import React from 'react';
import CategorySection from './CategorySection';
import { useLanguage } from '../../Context/LanguageContext'; 

function WomenCategories({ onOpenItem }) {
  const { t } = useLanguage();

  return (
    <CategorySection 
      categoryName="women" 
      displayName={t.category?.womenHeading || t.navbar?.categoryNames?.women || 'نساء'} 
      onOpenItem={onOpenItem}
      limit={9}
    />
  );
}

export default WomenCategories;