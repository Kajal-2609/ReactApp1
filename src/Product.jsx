import "./App.css";
import NavBar from "./NavBar";
export default function Product(props) {
  let { p } = props;
  let finalprice = p.mrp - p.mrp * (p.discount / 100).toFixed(1);
  let displayprice = p.qty * finalprice;
  function handleClick(action) {
    props.onButtonClick(p, action);
  }
  function handleAddToCartButtonClick() {
    props.onAddToCartButtonClick(p);
  }
  // handleAddToCartButtonClick
  function handleDecrementButtonClick() {
    props.onDecrementButtonClick(p);
  }
  function handleIncrementButtonClick() {
    props.onIncrementButtonClick(p);
  }
  return (
    <>
      <div className="col-12 col-lg-3 p-3  ">
        <div className=" radius   bg-opacity-75  bg-body box myb p-2">
          <div className="p-2">
            <div className=" position-absolute col-lg-2 myb col-5  radiu  md">
              {p.discount > 0 ? "" + p.discount + "% discount" : " "}
            </div>
            <img className=" img-fluid  " src={p.image} alt="" />
          </div>
          <div className="h3">
            {p.name}-{p.discount > 0 ? "-(" + p.discount + "%)" : ""}
          </div>
          {p.discount == 0 && <h3>Rs.{p.mrp}</h3>}
          {p.discount != 0 && (
            <h3>
              Rs. <span className="text-decoration-line-through">{p.mrp}</span>{" "}
              {finalprice}
            </h3>
          )}

          <div className="text-center ">
            {p.qty == 0 && (
              <button
                className="btn login text text-black  myb"
                disabled={!p.inStock}                       
                onClick={handleAddToCartButtonClick}       
              >
                {p.inStock ? "Add to Cart" : "out of stock"}
              </button>
            )}

            {p.qty != 0 && (
              <div className="row">
                <div className="col-4">
                  <button
                    className="btn bsize  myb plusminusb "
                    id="-"
                    onClick={handleDecrementButtonClick}
                  >
                    -
                  </button>{" "}
                </div>
                <div className="col-4  h7">
                  qty: {p.qty} {p.qty != 0 ? ` Rs. ${displayprice}` : " "}
                </div>
                <div className="col-4">
                  <button
                    className="btn bsize plusminusb "
                    id="+"
                    onClick={handleIncrementButtonClick}
                  >
                    +
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
