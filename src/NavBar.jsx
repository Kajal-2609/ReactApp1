import React from "react";

export default function NavBar(props) {
  let { cnt } = props;
  let {name}=props;
  let { cartItems } = props;
  let { totalprice } = props;
  let { view } = props;
  let { user } = props;
  let {loginStatus}=props;
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
  return (
    <>
      <div className=" row fixed-top  bgi   align-items-center justify-content-around border-bottom border-4 border-black  bg    ">
        <div
          className="col-4  col-lg-2  text-center "
          id=" logo"
          onClick={() => handleFormButtonClick("productPage")}
        >
          <img
            className="   img-fluid border-black logobr w-50 h-25 "
            src="/logo.png"
            alt=""
          />
        </div>
        <div className="col-5 col-lg-3 col-sm-6 col-md-12 text-center  ">
          { loginStatus=="success"&&<div className="text-white h5">Welcome {name} !</div>}
          {user ? (
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
          )}
        </div>
        <div className=" col-lg-1  col-3   text-black  cart   ">
          <div className="">
            <button className="cart-container radius " onClick={handleCartItems}>
              <i className=" bi-cart2  fs-1">
                {cnt}
                <div className="h6 text-center ">Rs.{totalprice}</div>
              </i>
            </button>
          </div>
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
