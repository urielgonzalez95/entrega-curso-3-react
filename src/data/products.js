import bocaImg from "../assets/imagenes/RemeraTitularBoca.jpg";
import riverImg from "../assets/imagenes/ShortRiver.jpg";
import racingImg from "../assets/imagenes/RemeraTitularRacing.jpg";
import indepImg from "../assets/imagenes/CamperaIndependiente.jpg";
export const products = [
  {
    id: 1,
    title: "Camiseta Boca",
    category: "camisetas",
    price: 20000,
    img: bocaImg,
  },
  {
    id: 2,
    title: "Short River",
    category: "shorts",
    price: 15000,
    img: riverImg,
  },
  {
    id: 3,
    title: "Camiseta Racing",
    category: "camisetas",
    price: 18000,
    img: racingImg,
  },
  {
    id: 4,
    title: "Campera Independiente",
    category: "camperas",
    price: 30000,
    img: indepImg,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(products), 800);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 800);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id == id));
    }, 800);
  });
};
