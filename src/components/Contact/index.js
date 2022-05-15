import React from "react";
import "./index.scss";

export const Contact = () => {
  return (
    <div className="contactContainer">
      <div className="contact card">
        <h1>REACH US AT</h1>
        <ul>
          <li>
            <h2>Support@kicksup.com</h2>
            <span>for any technical support</span>
          </li>
          <li>
            <h2>INFO@kicksup.com</h2>
            <span>for more information</span>
          </li>
          <li>
            <h2>feedback@kicksup.com</h2>
            <span>to send your feedback</span>
          </li>
          <li>
            <h2>jobs@kicksup.com</h2>
            <span>to work with us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
