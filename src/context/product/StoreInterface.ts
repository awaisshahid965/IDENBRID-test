import { Product, Shade } from "@/src/shared/types/product";

export interface StoreInterface {
  products: Array<Product>;
  getProductById: (id: string) => Product | null;
  updateProduct: (updatedProduct: Product) => void;
}

export const storeDefaultValues: StoreInterface = {
  products: [],
  getProductById: (id: string) => null,
  updateProduct: (updatedProduct: Product) => {},
};
