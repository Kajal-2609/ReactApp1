import "./App.css";
import NavBar from "./NavBar";
export default function Product(props) {
  let { p } = props;
  let finalprice = p.mrp - p.mrp * (p.discount / 100);
  let displayprice = p.qty * finalprice;
  function handleClick(action) {
    props.onButtonClick(p, action);
  }

  return (
    <>
      <div className="col-3  p-3  ">
        <div className=" radius box p-2">
          <div className="p-2">
            <div className=" position-absolute radius md">
              {p.discount > 0 ? "" + p.discount + "% discount" : ""}
            </div>
            <img className=" img-fluid  " src={p.image} alt="" />
          </div>
          <div className="h3">
            {p.name}-{p.discount > 0 ? "-(" + p.discount + "%)" : ""}
          </div>
          {p.discount == 0 && <h3>Rs.{p.mrp}</h3>}
          {p.discount != 0 && (
            <h3>
              Rs. <span className=" text-decoration-line-through">{p.mrp}</span>{" "}
              {finalprice}
            </h3>
          )}

          <div className="text-center ">
            {p.qty == 0 && (
              <button
                className={"btn login text"}
                disabled={!p.inStock}
                onClick={() => handleClick("+")}
              >
                {p.inStock ? "Add to Cart" : "out of stock"}
              </button>
            )}

            {p.qty != 0 && (
              <div className="row">
                <div className="col-4">
                  <button
                    className="btn bsize  myb plusminusb  "
                    id="-"
                    onClick={() => handleClick("-")}
                  >
                    -
                  </button>{" "}
                </div>
                <div className="col-4  h7">
                  qty: {p.qty} {p.qty != 0 ? ` Rs. ${displayprice}` : " "}
                </div>
                <div className="col-4">
                  <button
                    className="btn  bsize  plusminusb "
                    id="+"
                    onClick={() => handleClick("+")}
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
