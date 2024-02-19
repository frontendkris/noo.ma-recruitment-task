import React, { useState } from 'react';
import GalleryTemplate from './components/templates/GalleryTemplate';
import productList from './libs/productList';
import Categories, { CategoryName } from './components/molecules/Categories';


const App: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryName>('all');
  
  return (
    <>
      <GalleryTemplate
        images={productList}
        categories={Categories}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
    </>
  );
};

export default App;