import { useState } from "react";
import {
  getBillsFromBackend,
  addBillsToBackend,
  updateBackendBills,
} from "./Firebasebillservices";
import { BeatLoader, RingLoader } from "react-spinners";
export default function Bill(props) {
  let { cartItems } = props;
  let { price } = props;
  let { name } = props;
  let { totalprice } = props;
  let { user } = props;
  const phonenumber = "918799815906";

  let [flagLoader, setFlagLoader] = useState(false);
  const currentDate = new Date().toLocaleDateString();
  async function handleBillCreateClick() {
    setFlagLoader(true);
    let b = await getBillsFromBackend();

    let currentBillNumber = b.lastbillnumber + 1;
    let BillObj = {};
    BillObj.billNumber = currentBillNumber;
    BillObj.customer = user.name;
    BillObj.date = new Date();
    BillObj.amount = totalprice;
    BillObj.soldProducts = cartItems;
    console.log(BillObj);

    BillObj = await addBillsToBackend(BillObj);
    console.log(BillObj);
    b.lastbillnumber = currentBillNumber;
    await updateBackendBills(b);
    console.log(b);

    let billId = BillObj.id;
    console.log(billId);

    window.localStorage.setItem("cartItems", JSON.stringify([]));
    let location;
    console.log(window.location.href);

    if (window.location.href.indexOf("#") != -1) {
      location = window.location.href.slice(0, window.location.href.length - 1);
    } else {
      location = window.location.href;
    }

    let message = `I am ${user.name}.My Bill Number is ${currentBillNumber}.its link is ${location}?id=${billId}  `;
    setFlagLoader(false);
    console.log(message);

    window.location = `https://api.whatsapp.com/send?phone=918799815906&text=${message}`;
  }
  if (flagLoader) {
    return <RingLoader size={24} color={"red"} className="text-center" />;
  }
  //   function handleChangeButtonClick(op, e) {
  //     props.onChangeButtonClick(op, e);
  //   }

  return (
    <>
      <div className="my-5 p-5 "></div>
      {
        <div className=" ">
          <div className="text-center text-white">
            <a href="#" onClick={handleBillCreateClick}>
              Share
            </a>{" "}
            Bill on WhatsApp
          </div>

          <div className="bill text-white  mycontainer mx-auto billbox text-center bg-opacity-75 bg-body">
            <div className=" mx-auto p-2 pb-1 text-black pt-2 my-auto h5  ">
              || Shree ||
            </div>
            <div className="h3 text-black"> KK Fruit Mart </div>
            <div className="h5 text-black">
              220 , Market yard , Pune - 411009
            </div>
            <div className="text-end text-black pe-5 h5 ">
              Date: {currentDate}{" "}
            </div>
            <div className="h5 text-black ps-5">
              Customer Name : {user.name}
            </div>

            <div className="row">
              <div className="col-3 col-lg-3 h6 text-start text-black">
                Product
              </div>
              <div className="col-2  col-lg-3 h6 ps-0 text-black text-center ">
                Rate
              </div>
              <div className="col-3 h6 col-lg-3 text-black text-center ps-0 ">
                Quantity
              </div>
              <div className="col-2 h5 text-black">Total</div>
            </div>

            {cartItems.map((e, index) => {
              return (
                <div className="row " key={index}>
                  <div className="col-2 col-lg-3 text-start h6 text-black">{`${
                    index + 1
                  }) ${e.name}`}</div>
                  <div className="col-4 ps-lg-0 col-lg-3  h6 ">
                    <div className=" text-black h6">
                      Rs.{" "}
                      <span className="text-decoration-line-through text-black h6 ">
                        {e.mrp}{" "}
                      </span>{" "}
                      <span className="h6">
                        {e.mrp - e.mrp * (e.discount / 100).toFixed(1)}
                      </span>
                    </div>
                  </div>
                  <div className="col-2 text-black text-start h6 ps-0 col-lg-3 ps-lg-5 mx-lg-4">
                    {e.qty} {e.unit}
                  </div>
                  <div className="col-2 text-black h6 col-lg-2 ps-lg-0 text-start">
                    {e.mrp - e.mrp * (e.discount / 100).toFixed(1)}
                  </div>
                </div>
              );
            })}

            <div className="row my-1">
              <div className="col-9 col-lg-9 text-end h5 text-black pb-1">
                Grand Total : Rs. {totalprice}
              </div>
              {/* <div className="col-2 text-start pe-5 h5 text-white">Rs. {totalprice} </div> */}
            </div>
          </div>
        </div>
      }
    </>
  );
}
