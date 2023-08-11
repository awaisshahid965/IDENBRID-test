import React, { FC, ReactNode, useEffect, useState } from "react";
import { storeDefaultValues } from "./StoreInterface";
import { StoreProvider } from "./StoreContext";
import { loadProductStore } from "./StoreService";
import { Product } from "@/src/shared/types/product";

interface StoreContainerProps {
  children: ReactNode;
}

const StoreContainer: FC<StoreContainerProps> = ({ children }) => {
  const [store, setStore] = useState(storeDefaultValues);

  useEffect(() => {
    const products = loadProductStore();
    setStore((prev) => ({
      ...prev,
      products,
    }));
  }, []);

  const getProductById = (id: string) => {
    const product = store.products.find((product) => product.id === id);
    return product ?? null;
  };

  const updateProduct = (updatedProduct: Product) => {
    setStore((prev) => {
      const tempStore = { ...prev };
      const productIndex = tempStore.products.findIndex(
        (product) => product.id === updatedProduct.id
      );
      tempStore.products[productIndex] = updatedProduct;
      return { ...tempStore };
    });
  };

  return (
    <StoreProvider
      value={{
        ...store,
        getProductById,
        updateProduct,
      }}
    >
      {children}
    </StoreProvider>
  );
};

export default StoreContainer;
