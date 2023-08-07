import React, { FC } from "react";
import productsStyle from "./products.module.scss";
import { Product } from "@/src/shared/types/product";
import Link from "next/link";
import ProductItem from "./product-item";

interface ProductsProps {
  products: Array<Product>;
}

const Products: FC<ProductsProps> = ({ products }) => {
  if (!products?.length) {
    return <p>No Product Found!</p>;
  }
  return (
    <div className={productsStyle["products"]}>
      <h1>All Products</h1>
      <div className={productsStyle["products__wrapper"]}>
        {products.map((product) => (
          <ProductItem product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Products;
