import Product from "./Product";

export default function CartItem(props) {
  let { view } = props;
  let { cartItems } = props;
  let { p } = props;
  let { totalprice } = props;

  // let {cartMessage} = props;
  // let {count} = count;

  // function handleChangeButtonClick(op, p) {
  //   props.onChangeButtonClick(op, p);
  // }

  function handleBackButtonClick() {
    props.onBackButtonClick();
  }

  function handleBuyButtonClick() {
    props.onBuyButtonClick();
  }
  function handleIncrementButtonClick(p) {
    props.onIncrementButtonClick(p);
  }
  function handleDecrementButtonClick(p) {
    props.onDecrementButtonClick(p);
  }
  // function handleStartButtonClick() {
  //   props.onStartButtonClick();
  // }

  // function proceed(e) {
  //   props.onProceed(e);
  // }

  return (
    <>
      <div className="my-5 p-3 "></div>

      <div className="mb-1 p-2 text-white  text-center">
        Proceed to{" "}
        <a
          href="#"
          // onClick={proceed}
          onClick={handleBuyButtonClick}
        >
          Buy.
        </a>
      </div>
      <div className="mb-1 p-2  text-center text-white">
        <a href="#" onClick={handleBackButtonClick}>
          Back
        </a>{" "}
        to Shopping.
      </div>

      <div className="mycontainer  mx-auto m-3 ">
        {cartItems.map((p, index) => {
          return (
            // <div key={index} className="mx-auto border border-black m-2 ll">
            <div className="m-2 p-2 border border-black adminform  bg-opacity-75 bg-body">
              <div className="row ">
                <div className="col-6 text-start ps-5 text-black col-6 col-lg-6 ">{`${
                  index + 1
                })  ${p.name}`}</div>
                <div className="col-6 text-end pe-5  text-black col-6 col-lg-6 ">
                  {p.discount == 0 && <h4>Rs. {p.mrp * p.qty}</h4>}
                  {p.discount != 0 && (
                    <h4>
                      Rs.{" "}
                      <span className="text-decoration-line-through text-black">
                        {p.mrp}{" "}
                      </span>{" "}
                      <span className="text-danger ">
                        {(p.mrp - p.mrp * (p.discount / 100).toFixed(1)) *
                          p.qty}
                      </span>
                    </h4>
                  )}
                </div>
              </div>
              <div className="row ">
                <div className="col-6 text-start ps-5  col-12 ">
                  <button
                    className="  plusminusb me-4 login bsize "
                    onClick={() => {
                      handleDecrementButtonClick(p);
                    }}
                  >
                    -
                  </button>
                  <h7 className="text-black">{p.qty}</h7>
                  <button
                    className=" bsize ms-4  plusminusb login "
                    onClick={() => {
                      handleIncrementButtonClick(p);
                    }}
                  >
                    +
                  </button>
                </div>
                {/* <div className="col-6 text-end pe-5 ">
                  Rs. {totalprice}
                </div> */}
              </div>
            </div>
          );
          // }
        })}

      </div>
      {/* <div className="bgc size"></div> */}
    </>
  );
}
