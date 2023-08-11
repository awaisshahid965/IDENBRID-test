import React, { FC, ChangeEvent } from "react";
import productFormStyles from "./product-form.module.scss";
import { ColorGroup } from "@/src/shared/types/product";
import Input from "@/src/shared/component/input/input";

interface ProductFormHeaderProps {
  colorGroups: Array<ColorGroup>;
  onColorGroupChange: (colorGroups: Array<ColorGroup>) => void;
}

const ProductFormHeader: FC<ProductFormHeaderProps> = ({
  colorGroups,
  onColorGroupChange,
}) => {
  const onFormGroupFieldChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value = "" } = event?.target ?? {};
    if (!!name) {
      const tempColorGroups = [...colorGroups];
      tempColorGroups[+name].name = value;
      onColorGroupChange(tempColorGroups);
    }
  };

  return (
    <div className={productFormStyles["product_form__swatchs"]}>
      <div className={productFormStyles["product_form__swatch"]}></div>
      {colorGroups.map((colorGroup, index) => {
        return (
          <div
            className={productFormStyles["product_form__swatch"]}
            key={index}
          >
            <Input
              type="text"
              name={index.toString()}
              value={colorGroup.name}
              onChange={onFormGroupFieldChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ProductFormHeader;
