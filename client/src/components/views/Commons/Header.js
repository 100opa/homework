const Header = () => {
  return (
    <header>
      <div className="inner">
        <h1>
          <a href="/"><img src="./logo.svg" alt="logo" /></a>
        </h1>
        <div className="header-box">
          <ul className="header-left-box">
            <li>
              <a href="#" className="point-co"><img src="./img/list.svg"/>전체상품</a>
            </li>
            <li>
              <a href="#">대형가전</a>
            </li>
            <li>
              <a href="#">주방가전</a>
            </li>
            <li>
              <a href="#">생활가전</a>
            </li>
            <li>
              <a href="#">계절가전</a>
            </li>
          </ul>
          <div className="header-right-box">
            <div className="search-box">
              <input></input>
              <img src="./img/search.svg"/>
            </div>
            <a href="/cart"><img src="./img/cart.svg"/></a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;