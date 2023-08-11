import React, { FC } from "react";
import { Product } from "@/src/shared/types/product";
import {
  SwatchImagesMap,
  generateSwatchImagesMap,
} from "@/src/shared/helpers/product";
import SwatchImagesDisplay from "../commons/swatch/swatch-images-display";
import productDetailStyles from "./product-details.module.scss";
import Button from "@/src/shared/component/button/button";
import { useRouter } from "next/router";

interface ProductDetailsProps {
  product: Product | null;
}

const renderSwatches = (swatchMap: SwatchImagesMap) => {
  const swatchNumbers = Object.keys(swatchMap);
  return (
    <>
      {swatchNumbers.map((swatchNumber) => (
        <SwatchImagesDisplay
          swatchNumber={+swatchNumber}
          swatchImagesMap={swatchMap}
          key={swatchNumber}
        />
      ))}
    </>
  );
};

const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();
  const swatchMap = generateSwatchImagesMap(product as Product);

  const editProduct = () => {
    router.push(`/product/${product?.id}/edit`);
  };

  if (!product) {
    return <p>No product found!</p>;
  }
  return (
    <div className={productDetailStyles["product_detail"]}>
      <h2>
        Name: <span>{product.name}</span>
      </h2>
      <h2>
        Description: <span>{product.description}</span>
      </h2>
      <p>Colors Swatches</p>
      {renderSwatches(swatchMap)}
      <Button title="Edit Product" onClick={editProduct} />
    </div>
  );
};

export default ProductDetails;
