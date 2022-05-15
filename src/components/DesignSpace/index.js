import React, { useState } from "react";
import "./index.scss";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import StarRatings from "react-star-ratings";
export const DesignSpace = ({ showProduct, setShowProduct, addtoCart }) => {
  const obj = {
    name: showProduct.product.name,
    price: showProduct.product.price,
    rating: showProduct.product.rating,
    img: showProduct.product.img,
  };
  return (
    <>
      <div className="space-design">
        <div className="heading">
          <div className="back">
            <MdOutlineArrowBackIosNew
              onClick={() => {
                setShowProduct({
                  productVisibility: !showProduct,
                  product: {
                    id: "",
                    name: "",
                    price: "",
                    rating: "",
                    img: "",
                  },
                });
              }}
            />
          </div>
          your design space
        </div>
        <div className="mainarea">
          <div className="mainImage">
            <img src={showProduct.product.img} alt="noe" />
          </div>
          <div className="smallerImages">
            <img src={showProduct.product.img} alt="no" />
            <img src={showProduct.product.img} alt="no" />
            <img src={showProduct.product.img} alt="no" />
          </div>
          <div className="productInfo">
            <h1>{showProduct.product.name}</h1>
            <span className="author">
              by KICKSUP{" "}
              {showProduct.product.img === "./customPink.jpg" ? "and you" : ""}
            </span>
            <h3>
              <StarRatings
                starDimension="18px"
                starSpacing="2px"
                rating={parseFloat(showProduct.product.rating)}
                starRatedColor="yellow"
                numberOfStars={5}
                name={showProduct.product.id}
              />
            </h3>
            <h3>
              <span>Rs. {showProduct.product.price}/-</span>
            </h3>

            <h3>
              <span>Get an exclusive 20% off shopping with HDFC bank</span>
            </h3>
            <ul>
              <li>
                Front
                <button
                  class="customizebutton"
                  style={{ border: "1px solid black", backgroundColor: "pink" }}
                  onClick={() => {
                    if (showProduct.product.name === "Custom Shoe") {
                      setShowProduct({
                        productVisibility: showProduct,
                        product: {
                          id: showProduct.product.id,
                          name: showProduct.product.name,
                          price: showProduct.product.price,
                          rating: showProduct.product.rating,
                          img: "./custompink.jpg",
                        },
                      });
                    } else {
                      return;
                    }
                  }}
                ></button>
                <button
                  style={{ border: "1px solid black" }}
                  class="customizebutton"
                  onClick={() => {
                    if (showProduct.product.name === "Custom Shoe") {
                      setShowProduct({
                        productVisibility: showProduct,
                        product: {
                          id: showProduct.product.id,
                          name: showProduct.product.name,
                          price: showProduct.product.price,
                          rating: showProduct.product.rating,
                          img: "./custom.jpg",
                        },
                      });
                    } else {
                      return;
                    }
                  }}
                ></button>
                <button class="customizebutton"></button>
              </li>
              <li>
                Middle
                <button class="customizebutton"></button>
                <button class="customizebutton"></button>
                <button class="customizebutton"></button>
              </li>
              <li>
                Back<button class="customizebutton"></button>
                <button class="customizebutton"></button>
                <button class="customizebutton"></button>
              </li>
              <li>
                Sole<button class="customizebutton"></button>
                <button class="customizebutton"></button>
                <button class="customizebutton"></button>
              </li>
              <li>
                Size
                <button class="customsizebutton">5</button>
                <button class="customsizebutton">6</button>
                <button class="customsizebutton">7</button>
                <button class="customsizebutton">8</button>
              </li>
            </ul>
          </div>
        </div>
        <span className="designButton">
          <button id="shareDesign">share design</button>
          <button
            id="addtoCart"
            onClick={() => {
              addtoCart(showProduct.product);
            }}
          >
            add to cart
          </button>
        </span>
      </div>
    </>
  );
};
