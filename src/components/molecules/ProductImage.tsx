import React, { useEffect, useRef, useState } from 'react';
import Band from '../atoms/Band';
import { CategoryName } from './Categories';

interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
  category: CategoryName;
}

const ProductImage: React.FC<ImageProps> = ({ src, alt, className, category }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className={`
        relative flex justify-center items-center w-full h-max mb-3 z-10
        rounded-[26px] overflow-hidden transition-opacity duration-500
        ${isVisible ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
      ref={imageRef}
    >
      <Band text={category} />
      <img src={src} alt={alt || ''} className="object-cover w-full h-full" />
    </div>
  );
};

export default ProductImage;
