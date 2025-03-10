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
      <div className="col-12 col-lg-3 p-3 ">
        <div className=" radius   bg-opacity-75  bg-body box myb p-2">
          <div className="p-2">
            <div className=" position-absolute radius  md">
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
          <div className="text-center m-3">
            <button className="login  " onClick={handleEditButtonClick}>
              <i class="bi bi-box-arrow-in-down-left"></i>
            </button>{" "}
            <button className=" login  m-1" onClick={handleDeleteButtonClick}>
              <i class="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
