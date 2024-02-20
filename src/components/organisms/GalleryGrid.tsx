import React, { useEffect, useId, useRef, useState } from 'react';
import ProductImage from '../molecules/ProductImage';
import { CategoryName } from '../molecules/Categories';
import Credentials from '../atoms/Credits';
import ScrollButton from '../molecules/ScrollButton';
import scrollToElement from '../../utils/scrollToElement';

export interface ImageItem {
  src: string;
  category: CategoryName;
  alt?: string;
  title?: string;
}

export interface GalleryGridProps {
  images: ImageItem[];
  selectedCategory: CategoryName;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ images, selectedCategory }) => {
  const [isEverythingVisible, setIsEverythingVisible] = useState(false);
  const ID = useId();
  const galleryRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isEverythingVisible === true) {
      scrollToElement(galleryRef.current, 300);
    }
  }, [isEverythingVisible]);

  const handleGalleryExpanding = () => {
    setIsEverythingVisible(true);
  }
  
  return (
    <div
      ref={galleryRef}
      className={`
        animate-slide-up
        relative w-full px-2 lg:px-10 pt-8 pb-48
        ${isEverythingVisible ? "max-h-max" : "max-h-[445px] lg:max-h-[732px]"}
        overflow-hidden
      `}
    >
      <div className="columns-2 sm:columns-3 lg:columns-4 gap-3">
        {images.filter(img => img.category === selectedCategory || selectedCategory === 'all').map((img, index) => (
          <ProductImage
            key={`${ID}-${index}`}
            src={img.src}
            alt={img.alt || ''}
            title={img.title || ''}
            category={img.category}
            isEverythingVisible={isEverythingVisible}
          />
        ))}
      </div>
      <Credentials />
      <ScrollButton onClick={handleGalleryExpanding} isEverythingVisible={isEverythingVisible} />
    </div>
  );
};
