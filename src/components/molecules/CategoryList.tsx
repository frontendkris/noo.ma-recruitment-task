import React, { useId } from 'react';
import { Button } from '../atoms/Button';
import { Category, CategoryName } from './Categories';

export interface CategoryListProps {
  categories: Category[];
  selectedCategory: CategoryName;
  onSelectCategory: (category: CategoryName) => void;
}

const CategoryList: React.FC<CategoryListProps> = ({ categories, selectedCategory, onSelectCategory }) => {
  const ID = useId();

  return (
    <div className="flex flex-col items-stretch justify-stretch gap-2 lg:gap-3 md:flex-row md:justify-center md:items-center">
      {categories.map((category) => (
        <Button
          key={`${ID}-${category.name}`}
          label={category.name}
          icon={category.icon}
          variant={selectedCategory === category.name ? 'active' : 'default'}
          onClick={() => onSelectCategory(category.name)}
        />
      ))}
    </div>
  );
};

export default CategoryList;