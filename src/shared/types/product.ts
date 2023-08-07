export interface Product {
  id: string;
  name: string;
  description: string;
  colorGroups: Array<ColorGroup>;
}

export type ColorGroup = {
  name: string;
  shades: Array<Shade>;
};

export interface Shade {
  swatch: number;
  color: Color;
}

export type Color = {
  image: string;
};
