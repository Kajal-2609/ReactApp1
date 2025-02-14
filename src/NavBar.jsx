import React from "react";


export default function NavBar(props) {
  let {count}=props;
  let{price}=props;
  function handleLoginButtonClick() {
    console.log("login clicked");

    props.onLoginButtonClick();
  }
  function handleLogoClick() {
    props.onLogoClick();
  }
  function handleSignUpButtonClick() {
    console.log("SignUp clicked...");

    props.onSignUpButtonClick();
  }
  
  return (
    <>
      {/* <div className=" text-white text-center  bg-black">
        {" "}
        WELCOME TO FRUIT SHOP{" "}
      </div>  */}
      <div className=" row bgi align-items-center justify-content-around p-2 bg border-bottom border-4 border-black">
        <div className="col-2  text-end  " onClick={handleLogoClick}>
          <img className="w-50 h-50 mt-1 " src="/imglogo.jfif" alt="" />
        </div>
        <div className="col-6 text-center">
          <button className="btn btn-primary login" onClick={handleLoginButtonClick}>
            {" "}
            Login{" "}
          </button>{" "}
          <button className="btn btn-primary login" onClick={handleSignUpButtonClick}>
            {" "}
            Sign Up{" "}
          </button>
        </div>
        <div className="col-2  text-center bg-white  cart p-3 m-3 ">
          <span className="cart-container">
            <i class="bi bi-cart"></i>{" "} { count !=0 && count }{ count ==0  && " " }<div className="h5">
              {price !=0 && price}{price ==0 && " "}
             
            </div>
          </span>
        </div>
      </div>
    </>
  );
}
