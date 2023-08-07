import { Product } from "@/src/shared/types/product";

const defaultProductsStore = [
  {
    id: "1",
    name: "Product One",
    description: "This is the first product.",
    colorGroups: [
      {
        name: "Purple",
        shades: [
          {
            swatch: 1,
            color: {
              image:
                "https://media.designcafe.com/wp-content/uploads/2020/04/16141208/purple-wall-paint-colors-for-dining-room.jpg",
            },
          },
          {
            swatch: 2,
            color: {
              image:
                "https://www.21oak.com/wp-content/uploads/sites/7/2021/12/purple-decor-4-resized.jpg?fit=500%2C334&p=1",
            },
          },
        ],
      },
      {
        name: "Orange",
        shades: [
          {
            swatch: 1,
            color: {
              image:
                "https://cdn.statically.io/img/paint.com.ph/wp-content/uploads/2018/08/House-Painting.jpg",
            },
          },
          {
            swatch: 2,
            color: {
              image:
                "https://i.pinimg.com/736x/92/20/02/92200276850ed673744f57827e0a48bb--colour-schemes-castle.jpg",
            },
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Product Two",
    description: "This is the second product.",
    colorGroups: [
      {
        name: "Purple",
        shades: [
          {
            swatch: 1,
            color: {
              image:
                "https://media.designcafe.com/wp-content/uploads/2020/04/16141208/purple-wall-paint-colors-for-dining-room.jpg",
            },
          },
          {
            swatch: 2,
            color: {
              image:
                "https://www.21oak.com/wp-content/uploads/sites/7/2021/12/purple-decor-4-resized.jpg?fit=500%2C334&p=1",
            },
          },
        ],
      },
      {
        name: "Orange",
        shades: [
          {
            swatch: 1,
            color: {
              image:
                "https://cdn.statically.io/img/paint.com.ph/wp-content/uploads/2018/08/House-Painting.jpg",
            },
          },
          {
            swatch: 2,
            color: {
              image:
                "https://i.pinimg.com/736x/92/20/02/92200276850ed673744f57827e0a48bb--colour-schemes-castle.jpg",
            },
          },
        ],
      },
      {
        name: "Red",
        shades: [
          {
            swatch: 1,
            color: {
              image:
                "https://media.istockphoto.com/id/1149443884/photo/red-living-room-with-modern-sofa.jpg?s=612x612&w=0&k=20&c=SpxLLrYKZ4wQ4mLPMJq05_0k4wY5BoFaks4zclRLtY0=",
            },
          },
          {
            swatch: 2,
            color: {
              image:
                "https://www.nerolac.com/sites/default/files/uploads/blog/red-paint-colours-blog-2.jpg",
            },
          },
        ],
      },
      {
        name: "Blue",
        shades: [
          {
            swatch: 1,
            color: {
              image:
                "https://media.designcafe.com/wp-content/uploads/2021/01/08175231/aqua-blue-paint-colors-for-your-home.jpg",
            },
          },
          {
            swatch: 2,
            color: {
              image:
                "https://housing.com/news/wp-content/uploads/2023/03/Main-hall-wall-colour-combination-ideas-for-your-home-f.jpg",
            },
          },
        ],
      },
    ],
  },
];

export const loadProductStore = (): Array<Product> => {
  const store = localStorage.getItem("store");
  if (!store) {
    localStorage.setItem("store", JSON.stringify(defaultProductsStore));
    return defaultProductsStore;
  }
  return JSON.parse(store as string);
};
