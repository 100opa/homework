const ChoicedItem = (props) => {
  const itemSet = props.data;
  const productKey = props.data.key;
  const product = props.data.value;

  const deleteCart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    const newData = cartData.filter(item => item.key !== itemSet.key);
    localStorage.setItem('cart', JSON.stringify(newData));

    // //  // 중복 확인
    // const isDuplicate = cartData.some(item => item.key === itemSet.key);

    // if (!isDuplicate) {
    //   // 중복되지 않으면 추가
    //   cartData.push(itemSet);
    //   localStorage.setItem('cart', JSON.stringify(cartData));
    // } else {
    //   alert("장바구니에 이미 존재하는 상품입니다.")
    // }
  };

  return (
    <li>
      <img src={`./img/${productKey}.jpg`} alt={product.name} />
      <div className="item-info">
        <p>{product.name}</p>
        <div className="price-box">
          <span>판매가 : {product.price}</span>
          <span>할인적용가 : {product.discountPrice}</span>
        </div>
      </div>
      <button type="button" className="cancle-btn" onClick={deleteCart}>
        <img src="./img/cancle.svg" alt="cancle" />
      </button>
    </li>
  );
};

export default ChoicedItem;