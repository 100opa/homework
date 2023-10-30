const ChoicedItem = (props) => {
  const productKey = props.data.key
  const product = props.data.value
  return (
    <li>
      <img src={`./img/${productKey}.jpg`} alt={product.name}/>
      <div className="item-info">
        <p>{product.name}</p>
        <div className="price-box">
          <span>판매가 : {product.discountPrice}</span>
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

export default ChoicedItem;