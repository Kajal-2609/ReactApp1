import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";


export default function SignUpPage(props) {
  let { signupstatus } = props;


  function handleSignUpFormSubmit(event) {
    event.preventDefault();
    props.onSignUpFormSubmit(event);
  }
  function handleLoginClick() {
    props.onLoginClick("Login");
    console.log("...");
  }
  return (
    <>
      {/* {(display =false  && <Page  />)}  */}
      {signupstatus == "success" && (
        <div className="text-center h3 text-danger">
          Signup Successfull{" "}
          <a href="#" onClick={handleLoginClick}>
            Login
          </a>{" "}
          now.
        </div>
      )}
      {signupstatus == "failed" && (
        <div className="text-center pb-3 h5 text-danger">
          Sorry.. This Email-id is already Registered.
        </div>
      )}
      
      
      
      {(signupstatus == "no" || signupstatus == "failed") && (
        <div className="p-3  bgc">
          <div className="text-center p-5   text-white h4 my-3">
            SIGNUP PAGE
          </div>
          <div className="row p justify-content-center">
            <div className=" col-sm-12 col-md-6 ">
              <form action="" onSubmit={handleSignUpFormSubmit}>
                <div className="row    ">
                  <div className="col-6 p-2  h4 my-2 text-end text-white"><label htmlFor="">UserName:</label></div>
                  <div className="col-6 p-2">
                    <input type="name" name="Username" required />
                  </div>{" "}
                  <div className="col-6 p-2  h4 text-end text-white"><label htmlFor="">Email:</label></div>
                  <div className="col-6 p-2 ">
                    <input
                      type="email"
                      name="email"
                      // onChange={(inform) =>
                      //   setUser({ ...users, email: inform.target.value })
                      // }

                      required
                    />
                  </div>
                  <div className="col-6 p-2 h4  text-end  text-white"><label htmlFor="">Password:</label></div>
                  <div className="col-6 p-2">
                    <input
                      type="password"
                      name="password"
                      // onChange={(inform) =>
                      //   setUser({ ...users, password: inform.target.value })
                      // }

                      required
                    />
                  </div>
                  <div className="row"></div>
                  <div className=" col-8 p-2 "></div>
                  <div className="my-3 text-center">
                    <input
                      type="submit"
                      value="Ok"
                      className="mx-2  login text-white"
                      // disabled={submitted}
                    />

                    <input
                      type="reset"
                      value="Clear"
                      className="login text-white mx2"
                      // onReset={handleSignUpFormReset}
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="bgc size "></div>
      
    </>
  
  );
}
// onClick={handleLoginClick}




// import axios from "axios";
// import React, { useState } from "react";

// export default function signUpPage(props) {
 

//   let [user, setUser] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   let [message, setMessage] = useState("");
//   let [signupstatus, setSignUpStatus] = useState("no");
  
//   function handleSignUpButtonClick(event) {
//     if (event == true) {
//       event.preventDefault();
//       axios.post("http://localhost:3000/users", user);
//       setUser(user);
//       console.log(user);
//     } else {
      
//       setUser(" ");
//     }

    
//     user["role"] = "user";
    
//     checkUserExist(user);
//   }
//   function handleLoginClick(event) {
//     event;
//   }
//   async function checkUserExist(user) {
//     let response = await axios.get("http://localhost:3000/users");
//     let data = await response.data;
//     let filteredData = data.filter((e, index) => e.email == user.email);
//     if (filteredData.length >= 1) {
//       console.log("already Exist");
//       setSignUpStatus("failed");
//       setMessage("Sorry.. This Emailid Already  Registered");
//     } else {
//       console.log("New User");
//       addUser(user);
//     }
//   }
//   async function addUser(user) {
//     let response = await axios.post("http://localhost:3000/users", user);
//     setSignUpStatus("success");
//   }
//   return (
//     <>
//       {signupstatus == "success" && (
//         <div className="text-center text-danger">
//           Signup Successfull{" "}
//           <a href="#" onClick={handleLoginClick}>
//             Login
//           </a>{" "}
//           now.
//         </div>
//       )}
//       {signupstatus == "failed" && (
//         <div className="text-center bgc  text-black">
//           Sorry.. This Email-id is already Registered.
//         </div>
//       )}
//       {(signupstatus == "no" || signupstatus == "failed") && (
//         <div className="p-6  bgc ">
//           <div className="text-center p-2 text-black my-3">SIGNUP</div>
//           <div className="row justify-content-center">
//             <div className=" col-sm-12 col-md-6  ">
//               <form action="" onSubmit={handleSignUpButtonClick}>
//                 <div className="row ">
//                   <div className="col-6 p-2  text-black   text-end">
//                     Enter user-name{" "}
//                   </div>
//                   <div className="col-6 p-2">
//                     <input
//                       type="text"
//                       name="username"
//                       onChange={(inform) =>
//                         setUser({ ...user, name: inform.target.value })
//                       }
//                       required
//                     />
//                   </div>{" "}
//                   <div className="col-6 p-2  text-black  text-end">
//                     {" "}
//                     Enter E-mail{" "}
//                   </div>
//                   <div className="col-6 p-2 ">
//                     <input
//                       type="text"
//                       name="email"
//                       onChange={(inform) =>
//                         setUser({ ...user, email: inform.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="col-6 p-2 text-black   text-end ">
//                     {" "}
//                     Enter Password
//                   </div>
//                   <div className="col-6 p-2">
//                     <input
//                       type="text"
//                       name="password"
//                       onChange={(inform) =>
//                         setUser({ ...user, password: inform.target.value })
//                       }
//                       required
//                     />
//                   </div>
//                   <div className="row"></div>
//                   <div className=" col-8 p-2 "></div>
//                   <div className="my-3 text-center ">
//                     <input
//                       type="submit"
//                       value="submit"
//                       className="mx-2 text-black  login"
//                     />
//                     <input
//                       type="reset"
//                       value="Clear"
//                       className=" login text-black mx-2"
                     
//                     />
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       )}
//       <div className="bgc size"></div>
//     </>
//   );
// }
