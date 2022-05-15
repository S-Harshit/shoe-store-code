import React from "react";
import "./index.scss";
import { FaTimes } from "react-icons/fa";

export const CartItem = ({ cartItem, deleteCart }) => {
  return (
    <>
      <div className="container">
        <div className="cartImage">
          <img src={cartItem.img} alt="image" />
        </div>
        <div className="cartInfo">
          <h3>{cartItem.name}</h3>
          <h3>Rs. {cartItem.price}/-</h3>
        </div>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => {
            deleteCart(cartItem.id);
          }}
        />
      </div>
    </>
  );
};
