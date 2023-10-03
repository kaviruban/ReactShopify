import styled from "styled-components";

export const ClothsContainer = styled.div`
  margin-top: 20px;
  width: 220px;
  border-radius: 12px;
  border: 1px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 20px 0;
  gap: 5px;
  @media (min-width: 300px) and (max-width: 400px) {
    margin-top: 10px;
    width: 145px;
    height: 270px;
    border-radius: 12px;
    border: 1px solid #000;
    gap: 3px;
    padding: 20px 0 0 0;
  }
  @media (min-width: 401px) and (max-width: 500px) {
    margin-top: 10px;
    width: 170px;
    height: 270px;
    border-radius: 12px;
    border: 1px solid #000;
    gap: 3px;
    padding: 20px 0 0 0;
  }
`;

export const ProductContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5px;
`;

export const ParentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  @media (max-width: 400px) and (min-width: 300px) {
    padding: 0 0 0 3px;
  }
`;
