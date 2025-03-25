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
      <div className="col-5 mx-2 text-lg-center m-lg-3 my-lg-5  p-lg-4  col-lg-2 b  radius   boxbg box  bg-opacity-75 bg-body  ">
        <div className=" position-absolute col-lg-2 myb col-5  radiu  md">
          {p.discount > 0 ? "" + p.discount + "% discount" : " "}
        </div>
        <img className=" img-fluid  " src={p.image} alt="" />

        <div className="h5">
          {p.name}{p.discount > 0 ? "(" + p.discount + "%)" : ""}
        </div>
        {p.discount == 0 && <h5>Rs.{p.mrp}</h5>}
        {p.discount != 0 && (
          <h5 className="">
            Rs. <span className="text-decoration-line-through">{p.mrp}</span>{" "}
            {finalprice}
          </h5>
        )}
        <div className="text-center  ">
          {p.qty == 0 && (
            <button
              className="btn login text text-black  "
              disabled={!p.inStock}
              onClick={handleAddToCartButtonClick}
            >
              {p.inStock ? "Add to Cart" : "out of stock"}
            </button>
          )}

          {p.qty != 0 && (
            <div className="row">
              <div className="col-4 col-lg-2 ps-lg-2 my-lg-0 ">
                <button
                  className="btn bsize    plusminusb "
                  id="-"
                  onClick={handleDecrementButtonClick}
                >
                  -
                </button>{" "}
              </div>
              <div className="col-4 col-lg-8 ps-lg-0     pt-0 h9">
                qty: {p.qty} {p.qty != 0 ? ` Rs. ${displayprice}` : " "}
              </div>
              <div className="col-4 col-lg-2 ps-lg-0">
                <button
                  className="btn bsize text-center plusminusb "
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
    </>
  );
}
