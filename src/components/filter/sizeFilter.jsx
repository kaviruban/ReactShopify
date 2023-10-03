import {
  SizeBtn,
  SizeStyle,
  MainContainer,
  Titlecontainer,
} from "./SizeFilterStyled";

function SizeFilter({ data, setdata }) {
  const handleFilter = (type) => {
    setdata(data);
    if (type === "S") {
      setdata((prev) => {
        return prev.filter((item) => item.size === "S");
      });
    }
    if (type === "M") {
      setdata((prev) => {
        return prev.filter((item) => item.size === "M");
      });
    }
    if (type === "L") {
      setdata((prev) => {
        return prev.filter((item) => item.size === "L");
      });
    }
    if (type === "XL") {
      setdata((prev) => {
        return prev.filter((item) => item.size === "XL");
      });
    }
  };

  return (
    <MainContainer>
      {/* <div style={{ "text-align": "center" }}>
      </div> */}
      <Titlecontainer>
        <p>Sizes</p>
      </Titlecontainer>
      <SizeStyle>
        <SizeBtn onClick={() => handleFilter("S")}>S</SizeBtn>
        <SizeBtn onClick={() => handleFilter("M")}>M</SizeBtn>
        <SizeBtn onClick={() => handleFilter("L")}>L</SizeBtn>
        <SizeBtn onClick={() => handleFilter("XL")}>XL</SizeBtn>
      </SizeStyle>
      {/* <ViewCartBtn onClick={()=>navigate('/view-cart')}>View Cart</ViewCartBtn> */}
    </MainContainer>
  );
}

export default SizeFilter;
