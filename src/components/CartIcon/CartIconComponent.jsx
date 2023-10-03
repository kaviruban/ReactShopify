import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./CartIconComponent.css";

function CartIconComponent({ children }) {
  return (
    <>
      <div className="cart">
        <span className="count">{children}</span>
        <FontAwesomeIcon icon={faCartShopping} className="material-icons" />
      </div>
    </>
  );
}

export default CartIconComponent;
