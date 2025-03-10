export default function Bill(props) {
    let { cartItems } = props;
    let {price} = props;
    let {name} = props;
    let {totalprice} = props;

    const currentDate = new Date().toLocaleDateString();
  //   function handleChangeButtonClick(op, e) {
  //     props.onChangeButtonClick(op, e);
  //   }
  
    return (
      <>
      <div className="my-5 p-5 "></div>
        {
          <div className=" ">
            <div className="text-center text-white">
              <a href="#">Share</a> Bill on WhatsApp
            </div>
  
            <div className="bill text-white  mycontainer mx-auto billbox text-center"
            >
              <div className=" mx-auto p-2 pb-1 text-white pt-2 my-auto h5  ">
                || Shree ||
              </div>
              <div className="h3 text-white"> KK Fruit Bazaar </div>
              <div className="h5 text-white">220 , Market Yard , Pune - 411009</div>
              <div className="text-end text-white pe-5 h5 ">Date: {currentDate} </div>
              <div className="h5 text-white ps-5">Customer Name : {name}</div>
  
              <div className="row">
                <div className="col-4 h5 text-white text-start">Product</div>
                <div className="col-3 h5 text-white text-start ">Rate</div>
                <div className="col-3 h5 text-white text-center pe-3 ">Quantity</div>
                <div className="col-2 h5 text-white">Total</div>
              </div>
  
              {cartItems.map((e, index) => {
                return (
                  <div className="row ">
                    <div className="col-4 text-start ps-3 text-white">{`${index+1}) ${e.name}`}</div>
                    <div className="col-4 ps-0  text-start">
                      <div className=" text-white">
                          Rs.{" "}
                          <span className="text-decoration-line-through text-white h5 ">
                            {e.mrp}{" "}
                          </span>{" "}
                          <span className="h5">{e.mrp - e.mrp*(e.discount/100).toFixed(1)}</span>
                        </div></div>
                    <div className="col-2 text-white text-start h5 ps-0">{e.qty} {e.unit}</div>
                    <div className="col-2 text-white h5 ">{e.mrp - e.mrp*(e.discount/100).toFixed(1)}</div>
                      </div>
                );
              })}
                     
              <div className="row">
                <div className="col-12 text-end h5 text-white pb-1">Grand Total : {" "}Rs. {totalprice}</div>
                {/* <div className="col-2 text-start pe-5 h5 text-white">Rs. {totalprice} </div> */}
              </div>
            </div>
          </div>
        }
       
      </>
    );
  }