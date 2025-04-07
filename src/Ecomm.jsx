import React, { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import NavBar from "./NavBar";
import SignUpPage from "./SignUpPage";
import Login from "./Login";
import axios from "axios";
import AdminProductForm from "./AdminProductForm";
import AdminProductPage from "./AdminProductPage";
import CartItem from "./CartItem";
import Bill from "./Bill";
import { BeatLoader } from "react-spinners";
import {
  deleteBackendProduct,
  getProductFromBackend,
} from "./Firebaseproductservices";
import { addUserToBackend, getUserFromBackend } from "./Firebaseuserservices";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { importBackendDataToBill } from "./Firebasebillservices";
import Billpage from "./Billpage";

// import { getAuth, GoogleAuthProvider } from "firebase/auth/web-extension";
// import{signInWithPopup} from "firebase/auth"

// import CartPageItems from "./CartPageItems";

export default function Ecommerce() {
  // useEffect(() => {
  //   getDataFromServer();
  // }, []);
  let [view, setView] = useState("productPage");
  let [cnt, setCnt] = useState(0);
  let [cartItems, setCartItems] = useState([]);
  let [totalprice, setTotalPrice] = useState(0);
  let [successmessage, setSuccessMessage] = useState(false);
  let [flagLoader, setFlagLoader] = useState(false);

  // let pList = [
  //   {
  //     id: "2",
  //     name: "Alphanso Mango",
  //     image: "mango.jpg",
  //     unit: "doz",
  //     mrp: "500",
  //     discount: "20",
  //     inStock: true,
  //     qty: 0,
  //     type: "Organic",
  //     finalPrice: 540,
  //   },
  //   {
  //     id: "4",
  //     name: "Apple",
  //     image: "apple.jpg",
  //     unit: "kg",
  //     mrp: "200",
  //     discount: 7,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //     finalPrice: 186,
  //   },
  //   {
  //     id: "5",
  //     name: "Anjeer",
  //     image: "anjeer.jpg",
  //     unit: "kg",
  //     mrp: 100,
  //     discount: 0,
  //     inStock: true,
  //     qty: 0,
  //     type: "Organic",
  //   },
  //   {
  //     id: "6",
  //     name: "Strawberry",
  //     image: "strawberry.jpg",
  //     unit: "kg",
  //     mrp: 200,
  //     discount: 20,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "7",
  //     name: "Papaya",
  //     image: "papaya.jpg",
  //     unit: "kg",
  //     mrp: 50,
  //     discount: 15,
  //     inStock: true,
  //     qty: 0,
  //     type: "Organic",
  //   },
  //   {
  //     id: "8",
  //     name: "Cherry",
  //     image: "cherry.jpg",
  //     unit: "kg",
  //     mrp: 300,
  //     discount: 5,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "9",
  //     name: "Chikoo",
  //     image: "Chikoo.jpg",
  //     unit: "kg",
  //     mrp: 60,
  //     discount: 5,
  //     inStock: false,
  //     qty: 0,
  //     type: "Organic",
  //   },
  //   {
  //     id: "10",
  //     name: "Kiwi",
  //     image: "Kiwi.jpg",
  //     unit: "piece",
  //     mrp: 20,
  //     discount: 0,
  //     inStock: false,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "11",
  //     name: "Orange",
  //     image: "orange.jpg",
  //     unit: "kg",
  //     mrp: 200,
  //     discount: 10,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "12",
  //     name: "Pear",
  //     image: "pear.jpg",
  //     unit: "kg",
  //     mrp: "250",
  //     discount: 7,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //     finalPrice: 186,
  //   },
  //   {
  //     id: "13",
  //     name: "Pineapple",
  //     image: "pineapple.jpg",
  //     unit: "piece",
  //     mrp: "80",
  //     discount: "0",
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //     finalPrice: 90,
  //   },
  //   {
  //     id: "14",
  //     name: "Pomegranete",
  //     image: "pomegranete.jpg",
  //     unit: "kg",
  //     mrp: 200,
  //     discount: 5,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "15",
  //     name: "Sitaphal",
  //     image: "sitaphal.jpg",
  //     unit: "kg",
  //     mrp: 100,
  //     discount: 10,
  //     inStock: true,
  //     qty: 0,
  //     type: "Organic",
  //   },
  //   {
  //     id: "16",
  //     name: "Watermelon",
  //     image: "watermelon.jpg",
  //     unit: "piece",
  //     mrp: 80,
  //     discount: 50,
  //     inStock: true,
  //     qty: 0,
  //     type: "Organic",
  //   },
  //   {
  //     id: "17",
  //     name: "Sweetlime",
  //     image: "sweetlime.jpg",
  //     unit: "kg",
  //     mrp: 200,
  //     discount: 5,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "18",
  //     name: "Peach",
  //     image: "peach.jpg",
  //     unit: "kg",
  //     mrp: 200,
  //     discount: 10,
  //     inStock: false,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  //   {
  //     id: "19",
  //     name: "Dragon",
  //     image: "dragon.jpg",
  //     unit: "piece",
  //     mrp: 60,
  //     discount: 0,
  //     inStock: true,
  //     qty: 0,
  //     type: "Non-Organic",
  //   },
  // ];
  let [FilteredList, setFilteredList] = useState([]);
  let [productList, setProductList] = useState([]);
  let [signupstatus, setSignupStatus] = useState("no");
  let [loginStatus, setLoginStatus] = useState("no");
  let [message, setMessage] = useState("");
  let [target, setTarget] = useState("");
  let [user, setUser] = useState("");
  let [name, setName] = useState("");
  let [bill, setbill] = useState("");
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  // useEffect(() => {
  //   getDataFromServer();
  //   let storedUser = localStorage.getItem("user");
  //   let storedTotalPrice = localStorage.getItem("cartItems");
  //   let storedLoginStatus = localStorage.getItem("cartItems");
  //   let storedCart = localStorage.getItem("cartItems");
  //   if (storedUser) {
  //     setUser(JSON.parse(storedUser));
  //     setLoginStatus(storedLoginStatus || "no");
  //   }
  //   if (storedCart) {
  //     setCartItems(JSON.parse(storedCart));
  //     setCnt(JSON.parse(storedCart).length);
  //   }

  //   if (storedTotalPrice) {
  //     setTotalPrice(parseFloat(storedTotalPrice));
  //   }
  // }, []);

  // function handleSignUpFormSubmit(event) {
  //   let formData = new FormData(event.target);
  //   let user = {};
  //   for (let data of formData) {
  //     user[data[0]] = data[1];
  //   }
  //   user["role"] = "user";
  //   console.log(user);
  //   checkUserExists(user);
  // }
  useEffect(() => {
    if (window.location.search == "") {
      getDataFromServer();
      // console.log("kajal");
    } else {
      let param = new URLSearchParams(window.location.search);
      let billId = param.get("id");
      if (billId == null) {
        setbill(null);
        setTimeout(() => {
          setMessage("invalid link");
        }, 3000);
        return;
      } else {
        console.log("got it");
        getbill(billId);
      }
    }
  }, []);
  async function getDataFromServer() {
    // console.log("kajal hi");

    setFlagLoader(true);
    let list = await getProductFromBackend();
    // let info = await axios.get("http://localhost:3000/fruits");
    // setProductList(info.data);
    setFlagLoader(false);
    list = list.map((e, index) => {
      e.qty = 0;
      return e;
    });
    let usr;
    let cItems = [];
    await onAuthStateChanged(auth, (user) => {
      usr = {};
      if (user) {
        usr.name = user.displayName;
        usr.email == user.email;
        if (usr.email == "khandekarkajal123@gmail.com") {
          usr.role = "admin";
        } else {
          usr.role = "user";
        }
      } else {
        usr = null;
      }
    });
    setUser(usr);
    setProductList(list);
    setView("productPage");
  }
  async function getbill(billId) {
    setFlagLoader(true);
    let b = await importBackendDataToBill(billId);
    console.log("here is the bill");
    if (b == null) {
      setbill(b);
      setFlagLoader(false);
      setView("finalbillpage");
      return;
    }
    console.log("coming datas");
    setbill(b);
    setView("finalbillpage");
    setFlagLoader(false);
  }
  async function checkUserExists(user) {
    // let response = await axios("http://localhost:3000/users");
    let response = await getUserFromBackend();
    let data = response;
    let filteredData = data.filter((e, index) => e.email == user.email);
    if (filteredData.length >= 1) {
      console.log("Already Exists");
      setTimeout(() => {
        setSignupStatus("");
        setView("productPage");
      }, 2000);
      setSignupStatus("failed");
      // setTimeout(() => {
      //   setMessage("Sorry... This email-id is already registered.");
      //  // }, 1000);
    } else {
      console.log("new user");
      addUser(user);
      // addDataToServer(user)
    }
  }
  async function addUser(user) {
    // let response = await axios.post("http://localhost:3000/users", user);
    let response = await addUserToBackend(user);
    setUser(response);
    setSignupStatus("success");
  }

  //Login Operation
  function handleLoginFormSubmit(event) {
    let formData = new FormData(event.target);
    let userData = {};
    for (let data of formData) {
      userData[data[0]] = data[1];
    }
    console.log("ok");
    console.log(userData);
    checkUser(userData);

    async function checkUser(userData) {
      // let response = await axios("http://localhost:3000/users");
      let userdata = await getUserFromBackend();
      let data = userdata;
      let filteredData = data.filter(
        (e, index) =>
          e.email == userData.email && e.password == userData.password
      );
      if (filteredData.length == 1) {
        setLoginStatus("success");

        setUser(filteredData[0]);
        let u = filteredData[0];
        localStorage.setItem("user", JSON.stringify(filteredData[0]));
        localStorage.setItem("loginStatus", "success");
        if (u.role == "user") {
          setLoginStatus("success");
          setTimeout(() => {
            setName(u.name);

            setView("productPage");
          }, 2000);
        } else if (u.role == "admin") {
          setLoginStatus("success");
          setTimeout(() => {
            setName(u.name);
            setView("admin");
          }, 2000);
        }

        // addDataToServer(user)
        setSuccessMessage(true);
      } else {
        setLoginStatus("failed");
      }
    }
  }

  function handleCartItems(view) {
    if (cnt <= 0 && totalprice <= 0) {
      setView("no_element");
    } else if (!user) {
      setMessage("you have to  login first!");
      setTimeout(() => {
        setMessage("");
        setView("Login");
      }, 1000);
    } else {
      setView("cart");
    }
  }

  //Handle Add to cart operation
  function handleAddToCartButtonClick(p) {
    console.log(cartItems);

    let temp = [...productList];
    let index = temp.indexOf(p);
    let newProduct = { ...temp[index] };

    if (newProduct.qty === 0) {
      newProduct.qty++;
      setCnt(cnt + 1);
      temp[index] = newProduct;
      setProductList([...temp]);

      setCartItems([...cartItems, newProduct]);
      setTotalPrice(
        totalprice + newProduct.mrp * (1 - newProduct.discount / 100).toFixed(1)
      );
    }
    let updatedCart;
    if (cartItems && cartItems.length > 0) {
      updatedCart = [...cartItems];
    } else {
      updatedCart = [];
    }
    updatedCart.push(newProduct);
    setCartItems(updatedCart);
  }
  //Handle "+"
  function handleIncrementButtonClick(p) {
    let temp = [...productList];
    let index = temp.indexOf(p);
    let newProduct = { ...temp[index] };
    newProduct.qty++;
    temp[index] = newProduct;
    setProductList([...temp]);

    //Update Cart Items and total price
    let updatedCart = cartItems.map((item) =>
      item.id === p.id ? { ...item, qty: item.qty + 1 } : item
    );
    setCartItems(updatedCart);

    setTotalPrice(totalprice + p.mrp * (1 - p.discount / 100).toFixed(1));
    console.log(updatedCart);
  }
  //Handle "-"
  function handleDecrementButtonClick(p) {
    let temp = [...productList];
    let index = temp.indexOf(p);
    let newProduct = { ...temp[index] };
    newProduct.qty--;
    temp[index] = newProduct;
    setProductList([...temp]);

    let updatedCart;
    console.log(updatedCart);

    if (newProduct.qty === 0) {
      setCnt(cnt - 1); // Reduce cart count
      updatedCart = cartItems.filter((item) => item.id !== p.id); // Remove item from cart
    } else {
      updatedCart = cartItems.map((item) =>
        item.id === p.id ? { ...item, qty: item.qty - 1 } : item
      );
    }

    setCartItems(updatedCart);

    // If cart is empty, reset total price to 0
    if (updatedCart.length === 0) {
      setTotalPrice(0);
    } else {
      setTotalPrice(totalprice - p.mrp * (1 - p.discount / 100).toFixed(1));
    }
    console.log(updatedCart);
  }

  //Sign_UP & Login Button Handle
  //Sign_UP & Login Button Handle
  function handleFormButtonClick(view) {
    console.log(view);
    setView(view);
  }

  //handle logout button clicked
  function handleLogoutClick() {
    // setUser(null); // Clear user data
    // setView("productPage");
    // setLoginStatus("no"); // Reset login status
    // setSignupStatus("no"); // Reset signup status (if needed)
    // setMessage(""); // Clear any messages
    // localStorage.removeItem("user");
    // localStorage.removeItem("loginStatus");

    //  setView("Login");
    auth.signOut();
    setView("productPage");
    setUser("");
    if (cnt <= 0 && totalprice <= 0) {
      setView("productPage");
    } else if (!user) {
      setCartItems("");
      setTimeout(() => {
        window.alert("u need to login first");
      }, 1000);
    }
  }

  // login click button after signup form
  function handleLoginClick(event) {
    setView(event);
    // setView("product");
    console.log(view);
    clearMessege();
  }
  function handleProductAddEditFormSubmit(list) {
    setProductList(list);
  }
  // function handleDeleteButtonClick(p, flag) {
  //   let response = axios.delete("http://localhost:3000/fruits");
  // }
  function handleStartButtonClick() {
    setView("productPage");
  }
  function handleDeleteButtonClick(p, flag) {
    if (flag) {
      deleteProductFormServer(p);
    } else {
      setMessage("Delete Operation Cancelled");
      clearMessege();
    }
  }
  async function deleteProductFormServer(p) {
    // let response = await axios.delete("http://localhost:3000/fruits/" + p.id);

    let list = await deleteBackendProduct(p);
    console.log("list in delete ecom");
    console.log(list);
    setProductList(list);
    setMessage(`Product -${p.name} deleted successfully`);
    clearMessege();
  }
  function clearMessege() {
    setTimeout(() => {
      setMessage("");
    }, 1000);
  }
  // productList.filter((e, index) => e.id != p.id);
  function handleBackButtonClick() {
    setView("productPage");
  }
  function handleBuyButtonClick() {
    setView("bill");
  }

  function handleChangeButtonClick(op, f) {
    //console.log(op);
    let p = [...productList];
    let cItems = [...cartItems];
    let index = f.indexOf(f);
    if (op == "+") {
      p[index].qty = p[index].qty + 1;
      cItems = cItems.map((e) => {
        if (e.id == f.id) return f;
        else return e;
      });
      setCartItems(cItems);
    } else if (op == "-") {
      p[index].qty = p[index].qty - 1;
      if (p[index].qty == 0) {
        setCnt(cnt - 1);
        cItems = cItems.filter((e) => e.id != f.id);
        setCartItems(cItems);
      }
    } else if (op == "addtocart") {
      p[index].qty = 1;
      setCnt(cnt + 1);
      cItems.push(f);
      //setCartItems(product);
      setCartItems(cItems);
    }
    calculateTotal(p);
    setProductList(p);
  }
  function calculateTotal(p) {
    let total = 0;
    p.forEach((e, index) => {
      total += e.finalprice * e.qty;
    });
    setTotalPrice(total);
  }
  if (flagLoader) {
    return <BeatLoader size={30} color={"black"} className=" text-center" />;
  }
  function handleLoginButtonClickUsingGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        let usr = { user };
        usr.name = user.displayName;
        usr.emailid = user.email;
        if (usr.emailid == "khandekarkajal123@gmail.com") {
          usr.role = "admin";
          setView("admin");
          setLoginStatus("success");
        } else {
          usr.role = "user";
          setView("productPage");
          setLoginStatus("success");
        }
        setUser(usr);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <>
      <div className=" col-sm-12 col-md-6 col-lg-12">
        <NavBar
          onFormButtonClick={handleFormButtonClick}
          onCartItems={handleCartItems}
          cnt={cnt}
          totalprice={totalprice}
          cItems={cartItems}
          user={user}
          name={name}
          loginStatus={loginStatus}
          onLogoutClick={handleLogoutClick}
          onLoginButtonClickUsingGoogle={handleLoginButtonClickUsingGoogle}
        ></NavBar>
      </div>
      <div className="">
        {view == "productPage" && (
          <div className=" ">
            <ProductPage
              productList={productList}
              onFormButtonClick={handleFormButtonClick}
              onAddToCartButtonClick={handleAddToCartButtonClick}
              onIncrementButtonClick={handleIncrementButtonClick}
              onDecrementButtonClick={handleDecrementButtonClick}
              onChangeButtonClick={handleChangeButtonClick}
            ></ProductPage>
          </div>
        )}
        {/* {view == "Login" && (
          <div className="bg vh-100">
            <Login
              onClick={handleFormButtonClick}
              loginStatus={loginStatus}
              onLoginFormSubmit={handleLoginFormSubmit}
              user={user}
              view={view}
              onLoginClick={handleLoginClick}
            />
          </div>
        )}
        {view == "SignUp" && (
          <div className="bg vh-100">
            <SignUpPage
              onFormButtonClick={handleFormButtonClick}
              onSignUpFormSubmit={handleSignUpFormSubmit}
              view={view}
              signupstatus={signupstatus}
              onLoginClick={handleLoginClick}
              // users={user}
              // onChange={checkUser}
            />
          </div>
        )} */}
        {view == "cart" && (
          <div className="bg vh-100 ">
            <CartItem
              onCartItems={handleCartItems}
              cartItems={cartItems}
              onBuyButtonClick={handleBuyButtonClick}
              onBackButtonClick={handleBackButtonClick}
              onStartButtonClick={handleStartButtonClick}
              onChangeButtonClick={handleChangeButtonClick}
              onDecrementButtonClick={handleDecrementButtonClick}
              onIncrementButtonClick={handleIncrementButtonClick}
            />
          </div>
        )}

        {view == "bill" && (
          <div className="bg vh-100 ">
            <Bill
              // onChangeButtonClick={handleChangeButtonClick}
              totalprice={totalprice}
              name={name}
              cartItems={cartItems}
              user={user}
            />
          </div>
        )}

        {view == "no_element" && (
          <div className="my-5 p-5 vh-100 bg col-lg-12 col-sm-12 col-md-6 ">
            <div className="text-center  text-white my-5 h4 ">
              Cart is Empty.{" "}
              <a href="#" onClick={handleStartButtonClick}>
                Start
              </a>{" "}
              Shopping.
            </div>
          </div>
        )}

        {view == "admin" && (
          <div className=" col-lg-12 col-12 col-sm-12 col-md-6 bg  ">
            <AdminProductPage
              productList={productList}
              view={view}
              // onProductEditFormSubmit={handleProductAddEditFormSubmit}
              // onProductAddFormSubmit={handleProductAddEditFormSubmit}
              onDeleteButtonClick={handleDeleteButtonClick}
              onProductEditFormSubmit={handleProductAddEditFormSubmit}
              onProductAddFormSubmit={handleProductAddEditFormSubmit}
            />
          </div>
        )}
      </div>
       <div className="bg">
        {view == "finalbillpage" && <Billpage bill={bill} />}
      </div> 
    </>
  );
}
