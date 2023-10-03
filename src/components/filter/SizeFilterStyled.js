import styled from "styled-components";

export const SizeStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 60%;
  height: 120px;

  @media screen and (max-width: 1000px) {
    width: 100%;
  }
  @media screen and (max-width: 415px) {
    height: 70px;
  }
`;

export const SizeBtn = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 30px;
  margin: 5px;
  border: 2px solid #000;
  cursor: pointer;
  @media screen and (max-width: 415px) {
    height: 30px;
    width: 30px;
    border-radius: 30px;
  }
  @media (min-width: 416px) and (max-width: 505px) {
    height: 35px;
    width: 35px;
    border-radius: 30px;
  }
`;

export const Titlecontainer = styled.div`
  font-size: 1.5rem;
  @media screen and (max-width: 1000px) {
    margin-left: 50px;
  }
  @media screen and (max-width: 415px) {
    margin-left: 70px;
    font-size: 1rem;
  }
  @media (min-width: 200px) and (max-width: 360px) {
    margin-left: 40px;
    font-size: 0.8rem;
  }
`;

export const MainContainer = styled.div`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  border: 1px solid #000;
  border-radius: 20px;

  @media screen and (max-width: 1000px) {
    width: 50%;
    height: 100px;
    align-items: flex-start;
  }
  @media (min-width: 200px) and (max-width: 360px) {
    width: 50%;
    height: 130px;
  }
`;

export const ViewCartBtn = styled.button`
  width: 120px;
  height: 50px;
  margin: 40px;
  color: white;
  background-color: darkslateblue;
  border: none;
  cursor: pointer;
`;
