import { accessoriesImages } from "./accessories";
import { tablesImages } from "./tables";
import { seatingImages } from "./seating";
import { textilesImages } from "./textiles";
import { ImageItem } from "../components/organisms/GalleryGrid";
import shuffleArray from "../utils/shuffleArray";

const productList: ImageItem[] = shuffleArray([
  ...accessoriesImages,
  ...tablesImages,
  ...seatingImages,
  ...textilesImages,
]);

export default productList;