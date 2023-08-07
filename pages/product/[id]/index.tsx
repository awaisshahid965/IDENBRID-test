import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useStoreContext } from "@/src/context/product/StoreContext";
import { Product } from "@/src/shared/types/product";
import ProductDetails from "@/src/components/products/product-details";

const ProductDetailPage = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();
  const { getProductById } = useStoreContext();

  useEffect(() => {
    if (router.isReady) {
      const product = getProductById(router.query.id as string);
      setLoading(false);
      setProduct(product);
    }
  }, [router]);

  if (loading) {
    return <p>loading product...</p>;
  }
  return <ProductDetails product={product} />;
};

export default ProductDetailPage;
