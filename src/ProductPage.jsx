import Product from "./Product";
import NavBar from "./NavBar";

export default function ProductPage(props) {
  let { productList } = props;
  // let { p } = props;
  // function handleButtonClick(p, action) {
  //   props.onButtonClick(p, action);
  // }
  function handleAddToCartButtonClick(p) {
    props.onAddToCartButtonClick(p);
  }
  // handleAddToCartButtonClick
  function handleDecrementButtonClick(p) {
    props.onDecrementButtonClick(p);
  }
  function handleIncrementButtonClick(p) {
    props.onIncrementButtonClick(p);
  }
  return (
    <>
      {/* <div className="imp"><img src="/images.jpg" alt="" /></div> */}
      <div className="row text-center p-0 bgc">
        {productList.map((e, index) => (
          <Product
            p={e}
            key={index}
            index={index}
            // onButtonClick={handleButtonClick}
            onAddToCartButtonClick={handleAddToCartButtonClick}
            onDecrementButtonClick={handleDecrementButtonClick}
            onIncrementButtonClick={handleIncrementButtonClick}
          />
        ))}
      </div>
    </>
  );
}
