import React from "react";
import "./index.scss";
import StarRatings from "react-star-ratings";
export const Product = ({ product, showProduct, setShowProduct }) => {
  console.log(typeof product.img);
  const value = product.img;
  return (
    <div
      className="shoeCard"
      onClick={() => {
        console.log(showProduct.current);
        setShowProduct({
          productVisibility: true,
          product: {
            id: product.id,
            name: product.name,
            price: product.price,
            rating: product.rating,
            img: product.img,
          },
        });
      }}
    >
      <img src={value} alt="" />
      <div className="info">
        <h4>{product.name}</h4>
        <div className="priceRating">
          <h5>Rs. {product.price}/-</h5>
          <StarRatings
            starDimension="18px"
            starSpacing="2px"
            rating={parseFloat(product.rating)}
            starRatedColor="yellow"
            numberOfStars={5}
            name={product.id}
          />
        </div>
      </div>
    </div>
  );
};
