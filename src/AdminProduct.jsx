import "./App.css";
import NavBar from "./NavBar";

export default function AdminProduct(props) {
  let { p } = props;
  let finalprice = p.mrp - p.mrp * (p.discount / 100).toFixed(1);
  let displayprice = p.qty * finalprice;
  function handleEditButtonClick() {
    props.onEditButtonClick(p);
  }

  function handleDeleteButtonClick() {
    let ans = window.confirm("Do you really want to delete   -   " + p.name);
    if (ans) {
      props.onDeleteButtonClick(p, true);
    } else {
      props.onDeleteButtonClick(p, false);
    }
  }

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
      <div className="col-5 mx-2 text-lg-center m-lg-3 my-lg-5  p-lg-4  col-lg-2 b  radius   boxbg box  bg-opacity-75 bg-body">
        <div className=" position-absolute radius  md">
          {p.discount > 0 ? "" + p.discount + "% discount" : " "}
        </div>
        <img className=" img-fluid  " src={p.image} alt="" />

        <div className="h5">
          {p.name}{p.discount > 0 ? "(" + p.discount + "%)" : ""}
        </div>
        {p.discount == 0 && <h5>Rs.{p.mrp}</h5>}
        {p.discount != 0 && (
          <h5>
            Rs. <span className="text-decoration-line-through">{p.mrp}</span>{" "}
            {finalprice}
          </h5>
        )}
        <div className="text-center m-3">
          <button
            className="login plusminusb bsize"
            onClick={handleEditButtonClick}
          >
            <i class="bi bi-box-arrow-in-down-left"></i>
          </button>{" "}
          <button
            className=" login plusminusb bsize m-1"
            onClick={handleDeleteButtonClick}
          >
            <i class="bi bi-trash3"></i>
          </button>
        </div>
      </div>
    </>
  );
}
