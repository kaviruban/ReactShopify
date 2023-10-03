import { TotalPrice } from "../../pages/HomePage/HomePage";
import { TotalPriceCartPgStyle, FooterContainer } from "./FooterStyled";

export default function FooterShowTotalPrice() {
  return (
    <FooterContainer>
      <TotalPriceCartPgStyle>Pay : {<TotalPrice />}</TotalPriceCartPgStyle>
    </FooterContainer>
  );
}
