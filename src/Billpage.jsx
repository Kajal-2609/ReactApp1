export default function Billpage(props) {
  let { bill } = props;
  const currentDate = new Date().toLocaleDateString();
  console.log("bill");
  const formatcurrency = (amount) => {
    return amount.toLocaleString("en-IN", {
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
  };
  const getDiscountedPrice = (mrp, discount) => {
    return mrp - (mrp * discount) / 100;
  };
  return (
    <>
      <div className="my-5 p-5 "></div>
      {
        <div className="row ">
          <div className="bill text-white  mycontainer mx-auto billbox text-center bg-opacity-75 bg-body">
            <div className=" mx-auto p-2 pb-1 text-black pt-2 my-auto h5  ">
              || Shree ||
            </div>
            <div className="h3 text-black"> KK Fruit Mart </div>
            <div className="h5 text-black">
              220 , Market yard, Pune - 411009
            </div>
            <div className="text-end text-black pe-5 h5 ">
              Date: {currentDate}{" "}
            </div>
            <div className="h5 text-black ps-5">
              Customer Name : {bill.customer}
            </div>

            <div className="row">
              <div className="col-3 col-lg-3 h6 text-start text-black">Product</div>
              <div className="col-2  col-lg-3 h6 ps-0 text-black text-center ">Rate</div>
              <div className="col-3 h6 col-lg-3 text-black text-center ps-0 ">
                Quantity
              </div>
              <div className="col-2 h5 text-black">Total</div>
            </div>

            {bill.soldProducts.map((e, index) => {
              const DiscountedPrice = getDiscountedPrice(e.mrp, e.discount);
              const totalprice = DiscountedPrice * e.qty;
              return (
                <div className="row " key={index}>
                  <div className="col-2 col-lg-3 text-start h6 text-black">{`${
                    index + 1
                  }) ${e.name}`}</div>
                  <div className="col-4 ps-lg-0 col-lg-3  h6 ">
                    <div className=" text-black h6">
                      Rs.{" "}
                      <span className="text-decoration-line-through text-black h5 ">
                        {e.mrp}{" "}
                      </span>{" "}
                      <span className="h6">
                        {/* {e.mrp - e.mrp * (e.discount / 100).toFixed(1)} */}
                        {formatcurrency(DiscountedPrice)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 text-black text-start h6 ps-0 col-lg-3 ps-lg-5 mx-lg-4">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 text-black h6 col-lg-2 ps-lg-0 text-start ">
                    {/* {e.mrp - e.mrp * (e.discount / 100).toFixed(1)} */}
                    {formatcurrency(totalprice)}
                  </div>
                </div>
              );
            })}

            <div className="row my-1">
              <div className="col-9 col-lg-9 text-end h5 text-black pb-1">
                Grand Total : Rs.{" "}
                {bill.amount.toLocaleString("en-IN", {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2,
                })}
              </div>
              {/* <div className="col-2 text-start pe-5 h5 text-white">Rs. {totalprice} </div> */}
            </div>
          </div>
        </div>
      }
    </>
  );
}
