import React, { FC } from "react";
import { Product } from "@/src/shared/types/product";
import productsStyle from "./products.module.scss";
import Link from "next/link";

interface ProductItemProps {
  product: Product;
}

const ProductItem: FC<ProductItemProps> = ({ product }) => {
  return (
    <div className={productsStyle["products__productCard"]} key={product.id}>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <Link href={`/product/${product.id}`}>View Product</Link>
    </div>
  );
};

export default ProductItem;
