import React, { useEffect, useRef, useState } from "react";
import Band from "../atoms/Band";
import { CategoryName } from "./Categories";

interface ImageProps {
  src: string;
  alt?: string;
  title?: string;
  className?: string;
  category: CategoryName;
}

const ProductImage: React.FC<ImageProps & { isEverythingVisible: boolean }> = ({
  src,
  alt,
  title,
  className,
  category,
  isEverythingVisible,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);

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
  }, [isEverythingVisible]);

  useEffect(() => {
    if (isEverythingVisible && imageRef.current) {
      setIsVisible(false);
    }
  }, [isEverythingVisible]);

  return (
    <div
      className={`
        relative flex justify-center items-center w-full h-max mb-3 z-10
        rounded-[26px] overflow-hidden transition-opacity duration-500
        ${isVisible ? "opacity-100 hover:shadow" : "opacity-0"}
        cursor-pointer ${className}
      `}
      ref={imageRef}
    >
      <Band text={category} />
      <img src={src} alt={alt || ""} className="object-cover w-full h-full" />
      <div
        className="
          absolute inset-0
          flex flex-col justify-end items-center lg:items-start text-left gap-4 w-full
          px-3 py-8 lg:p-6 xl:p-10 bg-gradient-to-b from-transparent to-[rgba(20,10,0,0.65)]
          transition-all opacity-0 hover:opacity-100 duration-300 z-10
        "
      >
        <h3 className="inline text-lg lg:text-xl font-medium text-center leading-tight lg:text-left text-white">
          {alt}
        </h3>
        <p className="hidden xl:inline text-base lg:text-lg leading-none font-normal text-white">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ProductImage;
