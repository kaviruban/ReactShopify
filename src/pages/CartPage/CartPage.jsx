import React, { useEffect, useState } from "react";
import FooterShowTotalPrice from "../../components/Footer/Footer";
import HeaderCartPg from "../../components/Header/Header";
import { CartContainer } from "./CartPageStyle";
import CartComponent from "../../components/Cart/CartComponent";
import { getCartData } from "../../Data/CartDetails/CartData";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    setCartItems(JSON.parse(getCartData()));
  }, []);

  const mystyle = {
    height: "650px",
    "background-color": "green",
    "overflow-x": "hidden",
  };

  return (
    <CartContainer>
      <HeaderCartPg />
      <section style={mystyle}>
        {cartItems.map((cart, index) => {
          return (
            <React.Fragment key={index}>
              <CartComponent data={cart} />
            </React.Fragment>
          );
        })}
      </section>
      <FooterShowTotalPrice />
    </CartContainer>
  );
}

export default CartPage;
