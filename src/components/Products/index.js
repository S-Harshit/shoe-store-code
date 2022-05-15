import React from "react";
import { useState } from "react";
import { Product } from "./Product";
import "./index.scss";

export const Products = ({ showProduct, setShowProduct }) => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "KSL 01",
      price: "2000",
      rating: "3.5",
      img: "./shoe2.png",
    },
    {
      id: 2,
      name: "KSW 01",
      price: "2500",
      rating: "2.5",
      img: "./shoe.jpg",
    },
    {
      id: 3,
      name: "Royal S 01",
      price: "6000",
      rating: "4.5",
      img: "./shoe2.png",
    },
    {
      id: 4,
      name: "Custom Shoe",
      price: "3300",
      rating: "5",
      img: "./custom.jpg",
    },
    {
      id: 5,
      name: "Royal S 01",
      price: "6000",
      rating: "4.5",
      img: "./shoe2.png",
    },
    {
      id: 8,
      name: "Royal S 01",
      price: "6000",
      rating: "1.5",
      img: "./shoe.jpg",
    },
  ]);

  return (
    <div className="shoesCard">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          showProduct={showProduct}
          setShowProduct={setShowProduct}
        />
      ))}
    </div>
  );
};
