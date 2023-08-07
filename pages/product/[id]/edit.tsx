import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStoreContext } from "@/src/context/product/StoreContext";
import { Product } from "@/src/shared/types/product";
import ProductForm from "@/src/components/products/product-form/product-form";

const Edit = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const router = useRouter();
  const { getProductById } = useStoreContext();

  useEffect(() => {
    if (router.isReady) {
      const product = getProductById(router.query.id as string);
      setProduct(product);
    }
  }, [router]);

  if (!product) {
    return null;
  }
  return (
    <div>
      <ProductForm product={product} />
    </div>
  );
};

export default Edit;
