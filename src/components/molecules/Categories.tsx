import { ReactNode } from 'react';
import { Candles, Home, Pillow, SideTable, Sofa } from '../icons'

export type CategoryName = 'all' | 'tables' | 'seating' | 'textiles' | 'accessories';

export interface Category {
  name: CategoryName;
  icon: ReactNode;
}

const Categories: Category[] = [
  {
    name: 'all',
    icon: <Home />,
  },
  {
    name: 'tables',
    icon: <SideTable />
  },
  {
    name: 'seating',
    icon: <Sofa />
  },
  {
    name: 'textiles',
    icon: <Pillow />
  },
  {
    name: 'accessories',
    icon: <Candles />
  }
];

export default Categories;