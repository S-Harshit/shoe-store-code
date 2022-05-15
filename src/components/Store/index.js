import React, { useRef } from "react";
import "./index.scss";
import "../../fonts/Product_Sans.ttf";
import { Products } from "../Products";
import { BiFilterAlt } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { DesignSpace } from "../DesignSpace";
import { Cart } from "../Cart";

export const Store = ({
  showProduct,
  setShowProduct,
  setCartState,
  cartState,
  deleteCart,
  addtoCart,
}) => {
  const productState = useRef({});
  productState.current = showProduct;

  return (
    <>
      {!showProduct.productVisibility ? (
        <div className="store-container">
          <div className="filters">
            <div className="heading">
              <span>FILTERS </span>
              <BiFilterAlt />
            </div>
            <ul>
              <h2>Cost</h2>
              <li>
                <input type="checkbox" />
                <span> Rs. 1500-4000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span> Rs. 4001-7000</span>
              </li>
              <li>
                <input type="checkbox" />
                <span> Rs. 7000+</span>
              </li>
            </ul>
            <ul>
              <h2>Colour</h2>
              <button
                class="customsizeColorButton"
                style={{ background: "red" }}
              ></button>
              <button
                class="customsizeColorButton"
                style={{ background: "cyan" }}
              ></button>
              <button
                class="customsizeColorButton"
                style={{ background: "blue" }}
              ></button>
              <button
                class="customsizeColorButton"
                style={{ background: "yellow" }}
              ></button>
              <button
                class="customsizeColorButton"
                style={{ background: "grean" }}
              ></button>
              <button
                class="customsizeColorButton"
                style={{ background: "beige" }}
              ></button>
            </ul>
            <ul>
              <h2>Design templates</h2>
              <li>
                <input type="checkbox" />
                <span> 2</span>
              </li>
              <li>
                <input type="checkbox" />
                <span> 3</span>
              </li>
              <li>
                <input type="checkbox" />
                <span> 3+</span>
              </li>
            </ul>
            <ul>
              <h2>Type</h2>
              <li>
                <input type="checkbox" />
                <span> Loafers</span>
              </li>
              <li>
                <input type="checkbox" />
                <span> Sneakers</span>
              </li>
            </ul>
            <button type="submit">Apply</button>
          </div>
          <div className="Shoes">
            <div className="heading">
              <span>SHOES</span>
              <AiOutlineSearch />
            </div>
            <Products
              showProduct={productState.current}
              setShowProduct={setShowProduct}
            />
          </div>
          <Cart
            cartState={cartState}
            setCartState={setCartState}
            deleteCart={deleteCart}
          />
        </div>
      ) : (
        <>
          <div className="designSpace">
            <DesignSpace
              showProduct={productState.current}
              setShowProduct={setShowProduct}
              addtoCart={addtoCart}
            />
            <Cart
              cartState={cartState}
              setCartState={setCartState}
              deleteCart={deleteCart}
            />
          </div>
        </>
      )}
    </>
  );
};
