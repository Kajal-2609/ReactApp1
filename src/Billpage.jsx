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
              220 , Market Yard , Pune - 411009
            </div>
            <div className="text-end text-black pe-5 h5 ">
              Date: {currentDate}{" "}
            </div>
            <div className="h5 text-black ps-5">
              Customer Name : {bill.customer}
            </div>

            <div className="row">
              <div className="col-4 h5 text-black text-start">Product</div>
              <div className="col-3 h5 text-black text-start ">Rate</div>
              <div className="col-3 h5 text-black text-center pe-3 ">
                Quantity
              </div>
              <div className="col-2 h5 text-black">Total</div>
            </div>

            {bill.soldProducts.map((e, index) => {
              const DiscountedPrice = getDiscountedPrice(e.mrp, e.discount);
              const totalprice = DiscountedPrice * e.qty;
              return (
                <div className="row " key={index}>
                  <div className="col-4 text-start ps-3 text-black">{`${
                    index + 1
                  }) ${e.name}`}</div>
                  <div className="col-4 ps-0  text-start">
                    <div className=" text-black">
                      Rs.{" "}
                      <span className="text-decoration-line-through text-black h5 ">
                        {e.mrp}{" "}
                      </span>{" "}
                      <span className="h5">
                        {/* {e.mrp - e.mrp * (e.discount / 100).toFixed(1)} */}
                        {formatcurrency(DiscountedPrice)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 text-black text-start h5 ps-0">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 text-black h5 ">
                    {/* {e.mrp - e.mrp * (e.discount / 100).toFixed(1)} */}
                    rs{formatcurrency(totalprice)}
                  </div>
                </div>
              );
            })}

            <div className="row">
              <div className="col-12 text-end h5 text-black pb-1">
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
