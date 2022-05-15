import React from "react";
import "./index.scss";
import facebook from "../../assets/facebook.png";
import linkedIn from "../../assets/linkedin.png";
import medium from "../../assets/medium.png";
import zidane from "../../assets/zidane.jpg";
import christano from "../../assets/christiano.jpg";
import james from "../../assets/james.jpg";
import toni from "../../assets/tonikroos.jpg";
import ikercasillas from "../../assets/ikercasillas.jpg";

export const Team = () => {
  return (
    <div className="teamScreen">
      <h1>
        Without bonding and coordination, every project is a faliure. Look at
        who makes KickSup great ;)
      </h1>
      <div className="team-container">
        <div className="card">
          <img src={zidane} alt="" />
          <div className="info">
            <h2>Zidane</h2>
            <h3>Leadership & Management</h3>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={linkedIn} alt="" />
            </a>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={toni} alt="" />
          <div className="info">
            <h2>Toni Kroos</h2>
            <h3>Product developer</h3>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={linkedIn} alt="" />
            </a>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={ikercasillas} alt="" />
          <div className="info">
            <h2>Iker Casillas</h2>
            <h3>Marketing strategy</h3>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={linkedIn} alt="" />
            </a>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={james} alt="" />
          <div className="info">
            <h2>James</h2>
            <h3>Product designer</h3>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={linkedIn} alt="" />
            </a>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </div>
        </div>
        <div className="card">
          <img src={christano} alt="" />
          <div className="info">
            <h2>Christano</h2>
            <h3>Financial operations</h3>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={linkedIn} alt="" />
            </a>
            <a href="">
              <img src={medium} alt="" />
            </a>
          </div>
        </div>
      </div>
      <h1>
        <span>and You! ;)</span>
      </h1>
    </div>
  );
};
