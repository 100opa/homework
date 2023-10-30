import PriceBox from "./PriceBox";

const ResultBox = (props) => {
  return (
    <div className="result-box">
      <div className="delivery-box">
        <p>배송지 확인</p>
        <span>서울시 서대문구 벚꽃로 300, 용빌딩 305호</span>
        <PriceBox data={props}/>
      </div>
      <button type="button" id="order-btn">주문하기</button>
    </div>
  );
};

export default ResultBox;