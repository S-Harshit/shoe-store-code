import logo from "./logo.svg";
import "./App.scss";
import "./fonts/Gobold_Regular.otf";
import "./fonts/Product_Sans.ttf";
import { Redirect } from "react-router";
import { NavBar } from "./components/Navbar";
import { Route, Router, Routes, Navigate } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Team } from "./components/Team";
import { Journey } from "./components/Journey";
import { Store } from "./components/Store";
import { useRef, useState } from "react";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";

function App() {
  const [showProduct, setShowProduct] = useState({
    productVisibility: false,
    product: { id: "1", name: "Shoe", price: "23", rating: "3.5", img: "" },
  });
  const [cartState, setCartState] = useState([]);

  const addtoCart = (product) => {
    const newCart = product;
    setCartState([...cartState, newCart]);
    console.log(cartState);
  };

  const deleteCart = (id) => {
    setCartState(cartState.filter((cart) => cart.id !== id));
  };

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Layout />}>
          <Route exact path="home" element={<Home />} />
          <Route exact path="team" element={<Team />} />
          <Route path="journey" element={<Journey />} />
          <Route path="contact" element={<Contact />} />
          <Route
            path="store"
            element={
              <Store
                path="store"
                showProduct={showProduct}
                setShowProduct={setShowProduct}
                cartState={cartState}
                deleteCart={deleteCart}
                addtoCart={addtoCart}
              />
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
