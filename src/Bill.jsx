
import { useState } from "react";
import {getBillsFromBackend,addBillsToBackend,updateBackendBills} from "./Firebasebillservices"
export default function Bill(props) {
    let { cartItems } = props;
    let {price} = props;
    let {name} = props;
    let {totalprice} = props;
    let{user}=props;
    const phonenumber="8799815906"

  
    let [flagLoader,setFlagLoader]=useState(false)
  const currentDate=new Date().toLocaleDateString()
  async function handleBillCreateClick() {
    setFlagLoader(true)
    let b=await getBillsFromBackend()
    let BillObj={};
    let currentBillNumber=b.lastbillnumber+1;
    BillObj.billNumber=currentBillNumber;
    BillObj.customer =user.name;
    BillObj.date=new Date();
    // BillObj.amount=calculateTotal()
    BillObj.soldProducts=cartItems;
    BillObj=await addBillsToBackend(BillObj)
    b.lastbillnumber=currentBillNumber;
    await updateBackendBills(b)
    let billId=BillObj.id;
    console.log(billId);
    setFlagLoader(false)
    window.localStorage.setItem("cartItems",JSON.stringify([]))
    let message=`I am ${name}.My Bill Number is ${currentBillNumber}.`
    
    window.location=  `https://api.whatsapp.com/send?phone=${phonenumber}&text=`+message;
    
  }
  if (flagLoader) {
    return <BeatLoader size={24} color={"red"} className="text-center" />;
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
              <a href="#" onClick={handleBillCreateClick}>Share</a> Bill on WhatsApp
            </div>
  
            <div className="bill text-white  mycontainer mx-auto billbox text-center bg-opacity-75 bg-body"
            >
              <div className=" mx-auto p-2 pb-1 text-black pt-2 my-auto h5  ">
                || Shree ||
              </div>
              <div className="h3 text-black"> KK Fruit Mart </div>
              <div className="h5 text-black">220 , Market Yard , Pune - 411009</div>
              <div className="text-end text-black pe-5 h5 ">Date: {currentDate} </div>
              <div className="h5 text-black ps-5">Customer Name : {user.name}</div>
  
              <div className="row">
                <div className="col-4 h5 text-black text-start">Product</div>
                <div className="col-3 h5 text-black text-start ">Rate</div>
                <div className="col-3 h5 text-black text-center pe-3 ">Quantity</div>
                <div className="col-2 h5 text-black">Total</div>
              </div>
  
              {cartItems.map((e, index) => {
                return (
                  <div className="row ">
                    <div className="col-4 text-start ps-3 text-black">{`${index+1}) ${e.name}`}</div>
                    <div className="col-4 ps-0  text-start">
                      <div className=" text-black">
                          Rs.{" "}
                          <span className="text-decoration-line-through text-black h5 ">
                            {e.mrp}{" "}
                          </span>{" "}
                          <span className="h5">{e.mrp - e.mrp*(e.discount/100).toFixed(1)}</span>
                        </div></div>
                    <div className="col-2 text-black text-start h5 ps-0">{e.qty} {e.unit}</div>
                    <div className="col-2 text-black h5 ">{e.mrp - e.mrp*(e.discount/100).toFixed(1)}</div>
                      </div>
                );
              })}
                     
              <div className="row">
                <div className="col-12 text-end h5 text-black pb-1">Grand Total : {" "}Rs. {totalprice}</div>
                {/* <div className="col-2 text-start pe-5 h5 text-white">Rs. {totalprice} </div> */}
              </div>
            </div>
          </div>
        }
       
      </>
    );
  }