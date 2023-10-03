import styled from "styled-components";

export const StyleImage = styled.img`
  height: 250px;
  width: 150px;
  object-fit: cover;
  @media (max-width: 415px) {
    height: 150px;
    width: 100px;
    object-fit: cover;
  }
  @media (min-width: 250px) {
    height: 100px;
    width: 50px;
    object-fit: cover;
  }
`;

export const CartImages = styled.img`
  height: 100px;
  width: 80px;
`;
