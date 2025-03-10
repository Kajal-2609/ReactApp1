export default function Login(props) {
  let { loginStatus } = props;
  let { user } = props;

  function handleLoginFormSubmit(event) {
    event.preventDefault();
    props.onLoginFormSubmit(event);
    console.log(user);
  }
  return (
    <>
      <div className="my-5  p-4"></div>
      {loginStatus == "success" && (
        <div className="text-center my-5 text-white  ">
          <h3>Login Successful...</h3>
          <h3>Welcome {user.UserName}, Start Shopping!!!</h3>
        </div>
      )}

      {loginStatus == "failed" && (
        <>
          <div className="my-5   p-5"></div>
          <div className="text-center text-white">
            Sorry... Wrong Credentials
          </div>
        </>
      )}

      {(loginStatus == "failed" || loginStatus == "no") && (
        <div className="row p-3  login-container">
          <h2 className="text-center text-white p-5 h4 my-3">LOGIN PAGE</h2>
          <div className="col-sm-12 col-md-6 col-lg-12  ">
            <form action="" onSubmit={handleLoginFormSubmit}>
              <div className="row">
                <div className="col-5 h4 text-white text-end my-2">
                  <label htmlFor="">Username:</label>
                </div>
                <div className="col-6    text-start my-2">
                  <input type="name" name="name" />
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-white h4  text-end my-2">
                  <label htmlFor="">EmailId:</label>
                </div>
                <div className="col-6 text-start my-2">
                  <input type="email" name="email" />
                </div>
              </div>
              <div className="row">
                <div className="col-5 text-white h4 my-2 text-end">
                  <label htmlFor="">Password:</label>
                </div>
                <div className="col-6 text-start my-2 ">
                  <input type="password" name="password" />
                </div>
                <div className="  text-center my-3">
                  <input type="submit" value="Ok" className="mx-1  login" />
                  <input type="reset" value="Clear" className=" mx-1 login" />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* <div className=" bgc  ">
        <div className=" text-black my-3 p-2 text-center"> LOGIN PAGE</div>
        <div className="row">
          <div className="col-6 p-2  text-end text-black">Enter user-name </div>
          <div className="col-6 p-2">
            <input type="text" name="   " id="   " />
          </div>{" "}
          <div className="col-6 p-2 text-end text-black"> Enter E-mail </div>
          <div className="col-6 p-2 ">
            <input type="text" name="   " id="   " />
          </div>
          <div className="row "></div>
          <div className=" col-8 p-2 "></div>
          <div className="my-3  text-center   ">
            <input type="submit" value="Ok" className=" login text-black mx-2" />
            <input type="reset" value="Clear" className="login  text-black mx-2" />
          </div>
        </div>
      </div> */}
      {/* <div className="bgc size "></div>
      <div className="bgc size "></div> */}
    </>
  );
}
