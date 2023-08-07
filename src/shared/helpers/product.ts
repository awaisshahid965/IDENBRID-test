import { ColorGroup, Product, Shade } from "../types/product";
import { uuid } from "./common";

export type SwatchFormFields = {
  swatchValue: number;
  colorImages: Array<string>;
  key?: string;
};

export type SwatchImagesMap = Record<number, Record<string, string>>;

export function generateSwatchImagesMap(productData: Product): SwatchImagesMap {
  const swatchImagesMap: SwatchImagesMap = {};

  productData.colorGroups.forEach((colorGroup) => {
    colorGroup.shades.forEach((shade) => {
      const { swatch, color } = shade;
      if (!swatchImagesMap[swatch]) {
        swatchImagesMap[swatch] = {};
      }

      if (!swatchImagesMap[swatch][colorGroup.name]) {
        swatchImagesMap[swatch][colorGroup.name] = "";
      }

      swatchImagesMap[swatch][colorGroup.name] = color.image;
    });
  });

  return swatchImagesMap;
}

export function convertProductToSwatchFormArray(
  product: Product
): SwatchFormFields[] {
  const swatchFormArray: SwatchFormFields[] = [];
  const swatchMap = generateSwatchImagesMap(product);
  for (let swatchValue in swatchMap) {
    const colors = Object.values(swatchMap[swatchValue]);
    const swatchFormFields: SwatchFormFields = {
      swatchValue: +swatchValue,
      colorImages: colors,
      key: uuid(),
    };
    swatchFormArray.push(swatchFormFields);
  }

  return swatchFormArray;
}

export function createEmptySwatchFormFieldsObject(
  colorImagesArrayLength: number
) {
  return {
    swatchValue: -1,
    colorImages: new Array(colorImagesArrayLength).fill(""),
    key: uuid(),
  } as SwatchFormFields;
}

export function updateProductFromSwatchFormFieldsArray(
  swatchFormFieldsArray: SwatchFormFields[],
  product: Product
): Product {
  const colors = product.colorGroups.map((colorGroup) => colorGroup.name);
  const newColorGroups: ColorGroup[] = [];
  colors.forEach((color, colorIndex) => {
    const shades: Shade[] = [];
    swatchFormFieldsArray.forEach((swatchFormFields, swatchFormFieldsIndex) => {
      const shade: Shade = {
        swatch: swatchFormFields.swatchValue,
        color: {
          image: swatchFormFields.colorImages[colorIndex],
        },
      };
      shades.push(shade);
    });
    newColorGroups.push({
      name: color,
      shades,
    });
  });
  return {
    ...product,
    colorGroups: newColorGroups,
  };
}

export function validateProductFields(product: Product): boolean {
  if (!product.id || product.id.trim() === "") {
    return false;
  }

  if (!product.name || product.name.trim() === "") {
    return false;
  }

  if (!product.description || product.description.trim() === "") {
    return false;
  }

  if (!product.colorGroups || product.colorGroups.length === 0) {
    return false;
  }

  for (const colorGroup of product.colorGroups) {
    if (!colorGroup.name || colorGroup.name.trim() === "") {
      return false;
    }

    if (!colorGroup.shades || colorGroup.shades.length === 0) {
      return false;
    }

    for (const shade of colorGroup.shades) {
      if (!shade.swatch || isNaN(shade.swatch) || shade.swatch < 0) {
        return false;
      }

      if (
        !shade.color ||
        !shade.color.image ||
        shade.color.image.trim() === ""
      ) {
        return false;
      }
    }
  }

  return true;
}
