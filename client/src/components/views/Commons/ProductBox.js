const ProductBox = (props) => {
  const itemSet = props.item;
  const imgName = props.item.key;
  const product = props.item.value;

  const addCart = () => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];

    //  // 중복 확인
    const isDuplicate = cartData.some(item => item.key === itemSet.key);

    if (!isDuplicate) {
      // 중복되지 않으면 추가
      cartData.push(itemSet);
      localStorage.setItem('cart', JSON.stringify(cartData));
      alert("장바구니에 해당 상품이 추가되었습니다.")
    } else {
      alert("장바구니에 이미 존재하는 상품입니다.")
    }
  };

  return (
    <div href="#" className="product-box">
      <a href="#"><img src={`./img/${imgName}.jpg`} alt="LG전자 오브제 4도어 냉장고" /></a>
      <a href="#"><span className="product-name">{product.name}</span></a>
      <p className="discount-price"><span>{product.discountRate}</span>{product.discountPrice}</p>
      <span className="price">{product.price}</span>
      <button type="button" onClick={addCart}><img src="./img/cart.svg" /></button>
    </div>
  )
}

export default ProductBox;