export default function Login() {
  return (
    <>
      <div className=" bgc  ">
        <div className=" text-black  p-2 text-center "> LOGIN PAGE</div>
        <div className="row ">
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
          <div className="my-3  text-center  ">
            <input type="submit" value="Ok" className=" login mx-2" />
            <input type="reset" value="Clear" className="login mx-2" />
          </div>
        </div>
      </div>
      <div className="bgc size"></div>
    
    </>
  );
}
