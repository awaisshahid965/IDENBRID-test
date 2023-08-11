import React, { FC } from "react";
import { SwatchImagesMap } from "@/src/shared/helpers/product";
import swatchStyles from "./swatch-image-display.module.scss";

interface SwatchImagesDisplayProps {
  swatchNumber: number;
  swatchImagesMap: SwatchImagesMap;
}

const SwatchImagesDisplay: FC<SwatchImagesDisplayProps> = ({
  swatchNumber,
  swatchImagesMap,
}) => {
  const colorGroupNames = Object.keys(swatchImagesMap[swatchNumber] || {});

  return (
    <div className={swatchStyles["swatch"]}>
      <h2>Swatch Number: {swatchNumber}</h2>
      <div className={swatchStyles["swatch__cards"]}>
        {colorGroupNames.map((colorGroupName) => (
          <div
            key={colorGroupName}
            className={swatchStyles["swatch__color-card"]}
          >
            <h3>{colorGroupName}</h3>
            <img src={swatchImagesMap[swatchNumber][colorGroupName]} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwatchImagesDisplay;
