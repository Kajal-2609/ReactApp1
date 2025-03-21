import { useState } from "react";
import AdminProduct from "./AdminProduct";
import NavBar from "./NavBar";
import AdminProductForm from "./AdminProductForm";

export default function AdminProductPage(props) {
  let { productList } = props;
  let [adminView, setAdminView] = useState("list");
  let [selectedProduct, setSelectedProduct] = useState(" ");
  function handleEditButtonClick(p) {
    setAdminView("edit");
    setSelectedProduct(p);
  }
  function handleDeleteButtonClick(p, flag) {
    props.onDeleteButtonClick(p, flag);
  }
  function handleProductAddEditFormSubmit(p) {
    if (adminView == "edit") {
      console.log("for Edit");
      let list = [...productList];
      list = list.map((e, index) => {
        if (e.id == p.id) {
          return p;
        } else {
          return e;
        }
      });

      props.onProductEditFormSubmit(list);
      // adminView("list");
    } else if (adminView == "add") {
      console.log("for Add");
      let list = [...productList];
      list.push(p);
      props.onProductAddFormSubmit(list);
    }
  }

  function handleAddToCartButtonClick(p) {
    props.onAddToCartButtonClick(p);
  }
  // handleAddToCartButtonClick
  function handleDecrementButtonClick(p) {
    props.onDecrementButtonClick(p);
  }
  function handleIncrementButtonClick(p) {
    props.onIncrementButtonClick(p);
  }
  function handleListButtonClick() {
    setAdminView("add");
  }
  function handleProductListClick(event) {
    setAdminView(event);
  }

  return (
    <>
      {/* <div className="imp"><img src="/images.jpg" alt="" /></div> */}
      <div className="my-5 p-1"></div>
      {adminView == "list" && (
        <div className="text-white p-3   text-center ">
          <a href="#" className="h5" onClick={handleListButtonClick}>
            {" "}
            Add a product{" "}
          </a>
        </div>
      )}

      {adminView == "list" && (
        <div className="row text-center  p-3  col-12 col-lg-10  ">
          {productList.map((e, index) => (
            <AdminProduct
              p={e}
              key={index}
              index={index}
              onEditButtonClick={handleEditButtonClick}
              onDeleteButtonClick={handleDeleteButtonClick}

              // onButtonClick={handleButtonClick}
            />
          ))}
        </div>
      )}
      {(adminView == "edit" || adminView == "add") && (
        <div className=" text-black">
          {" "}
          <AdminProductForm
            productList={productList}
            selectedProduct={selectedProduct}
            onProductListClick={handleProductListClick}
            adminView={adminView}
            onProductAddFormSubmit={handleProductAddEditFormSubmit}
            onProductEditFormSubmit={handleProductAddEditFormSubmit}

            // onProductListFormSubmit={handleProductAddEditFormSubmit}
            // onProductAddFormSubmit={handleProductAddEditFormSubmit}
            // onUpdateBackendProduct={handleUpdateBackendProduct}
            // onProductAddNewClick={handleProductAddNewClick}
          />
        </div>
      )}
      {/* <div className="bgc size"></div> */}
    </>
  );
}
