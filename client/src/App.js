import './App.css';
import React from 'react';

const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1>
          <img src="./logo.svg" alt="logo" />
        </h1>
      </div>
    </header>
  );
};

const ChoicedItem = () => {
  return (
    <li>
      <img src="./img/0020403191__T873MHH012.CKOR__M_220_220.jpg" alt="4도어 냉장고" />
      <div className="item-info">
        <p>LG전자 오브제 4도어 냉장고 T873MHH012.CKOR [870L]</p>
        <div className="price-box">
          <span>판매가 : 5,000,000원</span>
          <div className="quantity-box">
            <label htmlFor="quantity1">수량</label>
            <select name="quantity1" id="quantity1">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
      </div>
      <button type="button" className="cancle-btn">
        <img src="./img/cancle.svg" alt="cancle" />
      </button>
    </li>
  );
};

const ChoicedList = () => {
  return (
    <ul className="choiced-list">
      <ChoicedItem />
      <ChoicedItem />
      <ChoicedItem />
    </ul>
  )
}

const PriceBox = () => {
  return (
    <div className="price-box">
      <ul className="price-list">
        <li>
          <span>상품금액</span>
          <span className="item-price">0원</span>
        </li>
        <li>
          <span>할인금액</span>
          <span className="item-price sale">0원</span>
        </li>
        <li>
          <span>배송비</span>
          <span className="item-price delivery">0원</span>
        </li>
      </ul>
      <div className="price-result">
        <p>결제금액</p>
        <p>0원</p>
      </div>
    </div>
  );
};

const ResultBox = () => {
  return (
    <div className="result-box">
      <div className="delivery-box">
        <p>배송지 확인</p>
        <span>서울시 서대문구 벚꽃로 300, 용빌딩 305호</span>
        <PriceBox></PriceBox>
      </div>
      <button type="button" id="order-btn">주문하기</button>
    </div>
  );
};

function App() {

  const [counter, setCounter] = React.useState(() => {
    return
  })

  function handleOrderClick() {

  }

  return (
    <div className="App">
      <Header></Header>
      <div id="content">
        <div className="inner">
          <h2>장바구니</h2>
          <div className="list-box">
            <ChoicedList></ChoicedList>
          </div>
          <ResultBox></ResultBox>
        </div>
      </div>
    </div>
  );
}

export default App;
