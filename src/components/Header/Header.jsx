import { HeaderCartPgStyle, Para } from "./HeaderStyled";
import { TotalItems } from "../../pages/HomePage/HomePage";
import CartIconComponent from "../CartIcon/CartIconComponent";

export default function HeaderCartPg() {
  return (
    <HeaderCartPgStyle>
      <CartIconComponent>
        <TotalItems />
      </CartIconComponent>
      <Para>Cart</Para>
    </HeaderCartPgStyle>
  );
}
