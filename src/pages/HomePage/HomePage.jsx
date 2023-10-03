import { Data } from "../../Data/ClothData";
import {
  ClothsContainer,
  ParentContainer,
  ProductContainer,
} from "./HomePageStyle";
import SizeFilter from "../../components/filter/sizeFilter";
import { StyleImage } from "../../Constants/Images";
import { useState, useEffect } from "react";
import "./Homepage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const storeClickedData = [];
let countItems = 0;
let totalCost = 0;

function HandleButtonClick(datas) {
  countItems += 1;
  totalCost += datas.price;
  storeClickedData.push(datas);
  localStorage.setItem("DatasId", JSON.stringify(storeClickedData));
}

export function TotalItems() {
  return storeClickedData.length;
}

export function TotalPrice() {
  return totalCost;
}

export function FetchDatas({ data }) {
  return data.map((datas, index) => {
    return (
      <ClothsContainer className="ClothsContainer" key={index}>
        <StyleImage src={datas.image_url} alt="picture is un-available" />
        <p style={{ overflowWrap: "break-word", textAlign: "center" }}>
          {datas.name}
        </p>
        <p>Rs : $ {datas.price}</p>
        <b style={{ color: "red" }}>{datas.size}</b>
        <div className="addToCartBtn">
          <button
            className="CartBtn"
            id={datas.id}
            onClick={() => {
              HandleButtonClick(datas);
            }}
          >
            <span className="IconContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="0.5em"
                viewBox="0 0 576 512"
                fill="rgb(17, 17, 17)"
                className="cart"
              >
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </span>
            <p className="text">Add to Cart</p>
          </button>
        </div>
      </ClothsContainer>
    );
  });
}

function HomePage() {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  useEffect(() => {
    setdata(Data);
  }, []);

  return (
    <div>
      <div className="cart-home" onClick={() => navigate("/view-cart")}>
        <span className="count-home">{countItems}</span>
        <FontAwesomeIcon
          icon={faCartShopping}
          className="material-icons-home"
        />
      </div>
      <ParentContainer id="row">
        <div id="box1">
          <SizeFilter setdata={setdata} data={Data} />
        </div>
        <div id="box2">
          <ProductContainer>
            <FetchDatas data={data} />
          </ProductContainer>
        </div>
      </ParentContainer>
    </div>
  );
}

export default HomePage;
