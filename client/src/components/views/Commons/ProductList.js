import ProductBox from "./ProductBox"

const ProductList = (props) => {
  const keys = Object.keys(props.data);
  const values = Object.values(props.data);

  const mappedArray = keys.map((key, index) => ({
    key: key,
    value: values[index]
  }));

  return (
    <div className="product-list">
      {mappedArray.map(item => {
        return <ProductBox item={item} />;
    })}
    </div>
  )
}

export default ProductList;