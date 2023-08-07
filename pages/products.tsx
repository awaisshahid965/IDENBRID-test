import React from "react";
import { useStoreContext } from "@/src/context/product/StoreContext";
import Products from "@/src/components/products/products";

const ProductsPage = () => {
  const { products } = useStoreContext();
  return <Products products={products} />;
};

export default ProductsPage;
