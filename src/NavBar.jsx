import React from "react";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

export default function NavBar(props) {
  let { cnt } = props;
  let { name } = props;
  let { cartItems } = props;
  let { totalprice } = props;
  let { view } = props;
  let { user } = props;
  let { loginStatus } = props;
  function handleFormButtonClick(view) {
    console.log("login clicked");
    props.onFormButtonClick(view);
  }
  // function handleLogoClick(view) {
  //   props.onLogoClick(view);
  // }
  // function handleSignUpButtonClick(view) {
  //   console.log("SignUp clicked...");

  //   props.onSignUpButtonClick(view);
  // }
  function handleLogoutClick() {
    props.onLogoutClick();
  }
  function handleCartItems() {
    props.onCartItems(view);
  }
  function handleLoginButtonClickUsingGoogle() {
    props.onLoginButtonClickUsingGoogle();
  }
  return (
    <>
      <div className=" row fixed-top  bgi   align-items-center justify-content-around border-bottom border-black border-4       ">
        <div
          className="col-4 col-lg-2  text-start   "
          id=" logo"
          onClick={() => handleFormButtonClick("productPage")}
        >
          <img
            className="   img-fluid border-black logobr w-75 h-75  "
            src="/fruitlogo-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="col-4 col-lg-5 col-sm-6 col-md-12 text-center  ">
          {loginStatus == "success" && (
            <div className="text-white h6">Welcome {user.name} !</div>
          )}

            {!user || (
              <div className="col-12 col-lg-12 col-sm-6 col-md-12 pt-lg-1 text-center   ">
                <button
                  className="  login"
                  onClick={handleLoginButtonClickUsingGoogle}
                >
                  Google Login
                </button>
              </div>
            )}
         
          {/* {(view == "productPage" ||
            view == "admin" ||
            view == "bill" ||
            (view = "cart" && loginStatus == "success")) && (
            <button className="login  m-2" onClick={handleLogoutClick}>
              Logout
            </button>
          )} */}

          {/* {user ? (
            <>
              <div className=" p-2 name">
                {" "}
                <button className="login  m-2" onClick={handleLogoutClick}>
                  Logout
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className="login log m-2 "
                onClick={() => {
                  handleFormButtonClick("SignUp");
                }}
              >
                SignUp
              </button>

              <button
                className="login log m-2"
                onClick={() => {
                  handleFormButtonClick("Login");
                }}
              >
                Login
              </button>
            </>
          )} */}
        </div>
        <div className=" col-lg-1  col-4   pe-lg-0 pe-5 text-black  col-sm-12 text-center pt-lg-3 pt-3 pb-2  ">
          <button className="cart-container radius " onClick={handleCartItems}>
            <i className=" bi-cart2  fs-1">
              {cnt}
              <div className="h6 text-center ">Rs.{totalprice}</div>
            </i>
          </button>
        </div>
      </div>

      {/* {<div className=" text-white text-center  bg-black">
        {" "}
        WELCOME TO FRUIT SHOP{" "}
      </div>} */}
      {/* <div className=" row bgi  align-items-center justify-content-around p-2 bg border-bottom border-4 border-black">
        <div
          className="col-2  text-left  "
          onClick={handleFormButtonClick("productPage")}
        >
          <img className="w-50 h-60 mt-1 p-1" src="\logo.png" alt="" />
        </div>
        <div className="col-6 text-center ">
          <div className="col-7 text-center  ">
           
            {user ? (
              <button
                className="btn btn-primary  m-2"
                onClick={handleLogoutClick}
              >
                Logout
              </button>
            ) : (
              <>
                <button
                  className="btn btn-primary text-black login"
                  onClick={() => {
                    handleFormButtonClick("Login");
                  }}
                >
                  Login
                </button>

                <button
                  className="btn btn-primary text-black login"
                  onClick={() => {
                    handleFormButtonClick("SignUp");
                  }}
                >
                  {" "}
                  Sign Up{" "}
                </button>
              </>
            )}
          </div>
        </div>

        <div className="col-2  text-left bg-white  cart p-3 mt-3 ">
          <span className="cart-container">
            <i className="bi bi-cart">
              {cnt}
              <div className="h5">Rs.{totalprice}</div>
            </i>
          </span>
        </div>
      </div> */}
    </>
  );
}
{
  /* {price != 0 && price}
{price == 0 && " "} */
}
