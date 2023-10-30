import ChoicedList from "./ChoicedList"
import ResultBox from "./ResultBox"

function Cart() {
  const cartData = JSON.parse(localStorage.getItem('cart')) || [];
  const IsEmpty = (cartData.length === 0);

  return (
    <div id="content">
      <div className="inner">
        <h2>장바구니</h2>
        {IsEmpty ?(
          <div className="notice-box">
            <p className="notice">장바구니에 담긴 상품이 없습니다.</p>
          </div>
        ) : (
          <>
            <div className="list-box">
              <ChoicedList data={cartData} />
            </div>
            <ResultBox data={cartData} />
          </>
        )}
        </div>
    </div>
  )
}

export default Cart;