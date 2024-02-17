import { accessoriesImages } from "./accessories";
import { tablesImages } from "./tables";
import { seatingImages } from "./seating";
import { textilesImages } from "./textiles";
import { ImageItem } from "src/components/organisms/GalleryGrid";

const productList: ImageItem[] = [
  ...accessoriesImages,
  ...tablesImages,
  ...seatingImages,
  ...textilesImages,
];

export default productList;