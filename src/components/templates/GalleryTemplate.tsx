import React from 'react';
import { GalleryGrid, ImageItem } from '../organisms/GalleryGrid';
import { Category, CategoryName } from '../molecules/Categories';
import Header from '../organisms/Header';
import CategoryList from '../molecules/CategoryList';

export interface GalleryTemplateProps {
  images: ImageItem[];
  categories: Category[];
  selectedCategory: CategoryName;
  onSelectCategory: (category: CategoryName) => void;
}

const GalleryTemplate: React.FC<GalleryTemplateProps> = ({ images, categories, selectedCategory, onSelectCategory }) => {
  const exampleData = {
    label: "inspirations",
    title: "Products gallery",
    subtitle: "Explore our Inspiration Gallery for a burst of creativity! Dive into a collection of captivating images designed to ignite your imagination and fuel your inspiration."
  }

  return (
    <>
      <Header
        label={exampleData.label}
        title={exampleData.title}
        subtitle={exampleData.subtitle}
      >
        <CategoryList
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={onSelectCategory}
        />
      </Header>
      <GalleryGrid
        images={images}
        selectedCategory={selectedCategory}
      />
    </>
  );
};

export default GalleryTemplate;