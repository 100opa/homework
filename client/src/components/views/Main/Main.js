import ProductList from "../Commons/ProductList";
import { useEffect, useState} from 'react';



function Main() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const dataUrl = './data.json';

    fetch(dataUrl)
      .then(response => response.json())
      .then(result => {
        setData(result);

        // 데이터를 로컬 스토리지에 저장 (선택 사항)
        localStorage.setItem('myData', JSON.stringify(result));
      })
      .catch(error => {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      });
  }, []);

  return (
    <div id="content">
      <div id="background">
        <div className="main-box">
          <img></img>
          <div className="main-box-inner">
            <div className="main-txt-box">
              <span>주방에 작품을 더하다</span>
              <p>삼성 BESPOKE 기획전</p>
              <button className="more-btn" type="button">자세히보기</button>
            </div>
          </div>
        </div>
        <div className="inner">
          <h2>베스트 상품</h2>
          <ProductList data={data} />
        </div>
      </div>
    </div>
  )
}

export default Main;