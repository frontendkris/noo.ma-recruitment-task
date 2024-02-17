import React, { useId } from 'react';
import ProductImage from '../molecules/ProductImage';
import { CategoryName } from '../molecules/Categories';
import Credentials from '../atoms/Credentials';

export interface ImageItem {
  src: string;
  category: CategoryName;
  alt?: string;
}

export interface GalleryGridProps {
  images: ImageItem[];
  selectedCategory: CategoryName;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, selectedCategory }) => {
  const ID = useId();

  return (
    <div className="relative w-full px-2 lg:px-10 py-8">
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
        {images.filter(img => img.category === selectedCategory || selectedCategory === 'all').map((img, index) => (
          <ProductImage key={`${ID}-${index}`} src={img.src} alt={img.alt || ''} category={img.category} />
        ))}
      </div>
      <Credentials />
    </div>
  );
};