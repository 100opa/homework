const PriceBox = (props) => {
  const productList = props.data.data
  // console.log(productList)
  let priceSum = 0;
  let discountPriceSum = 0;
  for(const product of productList){
    const price = (product.value.price).replace(/,/g, '').replace('원', '');
    const discountPrice = (product.value.discountPrice).replace(/,/g, '').replace('원', '');

    priceSum += parseInt(price);
    discountPriceSum += parseInt(discountPrice);
  }
  let saleSum = priceSum-discountPriceSum;
  let orderSum = priceSum-saleSum;
  priceSum = priceSum.toLocaleString();
  saleSum = saleSum.toLocaleString();
  orderSum = orderSum.toLocaleString();

  return (
    <div className="price-box">
      <ul className="price-list">
        <li>
          <span>상품금액</span>
          <span className="item-price">{`${priceSum}원`}</span>
        </li>
        <li>
          <span>할인금액</span>
          <span className="item-price sale">{`${saleSum}원`}</span>
        </li>
        <li>
          <span>배송비</span>
          <span className="item-price delivery">0원</span>
        </li>
      </ul>
      <div className="price-result">
        <p>결제금액</p>
        <p>{`${orderSum}원`}</p>
      </div>
    </div>
  );
};

export default PriceBox;