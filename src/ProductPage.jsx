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
  function handleChangeButtonClick(op, e) {
    props.onChangeButtonClick(op, e);
  }
  return (
    <>
      {/* <div className="imp"><img src="/images.jpg" alt="" /></div> */}
      <div className="my-3 p-3 "></div>
      <div className="row Contain text-center box  d-flex justify-content-center bg ">
        {productList.map((e, index) => (
          <Product
            p={e}
            key={index}
            index={index}
            // onButtonClick={handleButtonClick}
            onAddToCartButtonClick={handleAddToCartButtonClick}
            onDecrementButtonClick={handleDecrementButtonClick}
            onIncrementButtonClick={handleIncrementButtonClick}
            onChangeButtonClick={handleChangeButtonClick}
          />
        ))}
      </div>
 
    </>
  );
}
