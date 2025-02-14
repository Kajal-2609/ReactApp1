import React, { useEffect, useState } from "react";
import ProductPage from "./ProductPage";
import NavBar from "./NavBar";
import Product from "./Product";
import Login from "./Login";
import SignUp from "./SignUp";
export default function Ecomm() {
  let pList = [
    {
      id: "1",
      name: "Grapes",
      image: "grapes.jpg",
      unit: "kg",
      mrp: 120,
      discount: 10,
      inStock: false,
      qty: 0,
      type: "Organic",
    },
    {
      id: "2",
      name: "Mango",
      image: "mango.jpg",
      unit: "doz",
      mrp: 500,
      discount: 8,
      inStock: true,
      qty: 0,
      type: "Organic",
    },
    {
      id: "3",
      name: "Banana",
      image: "banana.jpg",
      unit: "doz",
      mrp: 60,
      discount: 0,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "4",
      name: "Apple",
      image: "apple.jpg",
      unit: "kg",
      mrp: 180,
      discount: 7,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "5",
      name: "Anjeer",
      image: "anjeer.jpg",
      unit: "kg",
      mrp: 100,
      discount: 0,
      inStock: true,
      qty: 0,
      type: "Organic",
    },
    {
      id: "6",
      name: "Strawberry",
      image: "strawberry.jpg",
      unit: "kg",
      mrp: 200,
      discount: 20,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "7",
      name: "Papaya",
      image: "papaya.jpg",
      unit: "kg",
      mrp: 50,
      discount: 15,
      inStock: true,
      qty: 0,
      type: "Organic",
    },
    {
      id: "8",
      name: "Cherry",
      image: "cherry.jpg",
      unit: "kg",
      mrp: 300,
      discount: 5,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "9",
      name: "Chikoo",
      image: "Chikoo.jpg",
      unit: "kg",
      mrp: 60,
      discount: 5,
      inStock: false,
      qty: 0,
      type: "Organic",
    },
    {
      id: "10",
      name: "Kiwi",
      image: "Kiwi.jpg",
      unit: "piece",
      mrp: 20,
      discount: 0,
      inStock: false,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "11",
      name: "Orange",
      image: "orange.jpg",
      unit: "kg",
      mrp: 200,
      discount: 10,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "12",
      name: "Pear",
      image: "pear.jpg",
      unit: "kg",
      mrp: 200,
      discount: 7,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "13",
      name: "Pineapple",
      image: "pineapple.jpg",
      unit: "piece",
      mrp: 100,
      discount: 50,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "14",
      name: "Pomegranete",
      image: "pomegranete.jpg",
      unit: "kg",
      mrp: 200,
      discount: 5,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "15",
      name: "Sitaphal",
      image: "sitaphal.jpg",
      unit: "kg",
      mrp: 100,
      discount: 10,
      inStock: true,
      qty: 0,
      type: "Organic",
    },
    {
      id: "16",
      name: "Watermelon",
      image: "watermelon.jpg",
      unit: "piece",
      mrp: 80,
      discount: 50,
      inStock: true,
      qty: 0,
      type: "Organic",
    },
    {
      id: "17",
      name: "Sweetlime",
      image: "sweetlime.jpg",
      unit: "kg",
      mrp: 200,
      discount: 5,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "18",
      name: "Peach",
      image: "peach.jpg",
      unit: "kg",
      mrp: 200,
      discount: 10,
      inStock: false,
      qty: 0,
      type: "Non-Organic",
    },
    {
      id: "19",
      name: "Dragon",
      image: "dragon.jpg",
      unit: "piece",
      mrp: 60,
      discount: 0,
      inStock: true,
      qty: 0,
      type: "Non-Organic",
    },
  ];
  let [view, setView] = useState("productsPage");
  let [count,setCount]=useState(0);
  let [productList, setProduct] = useState(pList);
  let[price,setPrice]=useState(0);
  // let[cartItem,setCartItem]=useState([])
  function handleClick(index) {
    console.log(index);
    setProduct(index);
  }
useEffect(()=>{
  let list=[...pList];
  list=list.map((e,index)=>{
    if(e.discount>0){
      e.finalPrice=e.mrp-(e.mrp*e.discount/100);
    }
    else{
      e.finalPrice=e.mrp
    }
    return e;
  })
},[])
  function handleButtonClick(p, action) {
    let temp = [...productList];
    let index = temp.indexOf(p);
    if (action == "+") {
      temp[index].qty = temp[index].qty + 1;
      setCount(count+1);
     
    //   let cItems=[...cartItem]
    // cartItem.push(p)
    //    setCartItem(cartItem);
      
       

      
    } else if (action == "-") {
      temp[index].qty = temp[index].qty - 1;
      setCount(count-1);
    }
    

    calculateTotal(temp);
    setProduct(temp);
  }
  
  function calculateTotal(temp){
    let total=0;
    temp.forEach((e,index)=> {
      total=total+e.finalPrice*e.qty;
    });
    setPrice(total);
  }
  // function handleClick(index) {
  //   console.log("GParent" + index);
  //   // props.onClick(index);
  //   setSelectedIndex(index);
  // }
  function handleLoginButtonClick() {
    setView("login");
  }
  function handleLogoClick() {
    setView("productsPage");
  }
  function handleSignUpButtonClick(){
    setView("SignUp");
    }
    
  return (
    <>
      <NavBar
        onLoginButtonClick={handleLoginButtonClick}
        onLogoClick={handleLogoClick}onSignUpButtonClick={handleSignUpButtonClick}
        count={count} price={price}
      ></NavBar>
      <div className="content-page">
        {view == "productsPage" && (
          <ProductPage
            productList={productList}
            onclick={handleClick}
            onButtonClick={handleButtonClick}
          ></ProductPage>
        )}
        {view == "login" && <Login />}
        {view=="SignUp" &&<SignUp/>}
        
      </div>
    </>
  );
}
