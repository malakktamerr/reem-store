

import React from 'react';
import CategorySection from './CategorySection';
import { useLanguage } from '../../Context/LanguageContext'; 

function MenCategories({ onOpenItem }) {
  const { t } = useLanguage();

  return (
    <CategorySection 
      categoryName="men" 
      displayName={t.category?.menHeading || t.navbar?.categoryNames?.men || 'رجال'} 
      onOpenItem={onOpenItem}
      limit={9}
    />
  );
}

export default MenCategories;