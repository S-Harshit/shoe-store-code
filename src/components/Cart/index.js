import React from "react";
import { RiH3, RiShoppingBag3Line } from "react-icons/ri";
import { CartItem } from "./CartItem";
import "./index.scss";
export const Cart = ({ cartState, setCartState, deleteCart }) => {
  return (
    <div className="Cart">
      <div className="heading">
        <span>CART</span>
        <RiShoppingBag3Line />
      </div>
      <div className="cartArea">
        {cartState.length > 0
          ? cartState.map((cart) => {
              return (
                <CartItem
                  key={cart.id}
                  cartItem={cart}
                  deleteCart={deleteCart}
                />
              );
            })
          : "What's stopping you, designer?"}
      </div>
      <div className="orderButton">
        <button
          className={cartState.length > 0 ? "button-active" : "button-inactive"}
          type="submit"
        >
          Order Now
        </button>
      </div>
    </div>
  );
};
