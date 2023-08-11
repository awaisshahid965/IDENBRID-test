import React, { useContext } from "react";
import { StoreInterface, storeDefaultValues } from "./StoreInterface";

export const StoreContext =
  React.createContext<StoreInterface>(storeDefaultValues);

export const StoreProvider = StoreContext.Provider;

export const useStoreContext = () => useContext(StoreContext);
