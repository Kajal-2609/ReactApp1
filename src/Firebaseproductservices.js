import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

async function getProductFromBackend() {
  const response = await getDocs(collection(db, "products"));
  let list = [];
  response.forEach((doc) => {
    let obj = { ...doc.data() };
    obj.id = doc.id;
    list.push(obj);
  });
  return list;
}
// async function getSingleProductFromBackend(id) {
//   const docSnap = await getDoc(doc(db, "products", id));
//   if (docSnap.exists()) {
//     console.log(docSnap.data());
//     return docSnap.data();
//   } else {
//     return null;
//   }
// }
async function addProductToBackend(product) {
  const docRef = await addDoc(collection(db, "products"), product);
  console.log("Document written with ID: ", docRef.id);
}
async function updateBackendProduct(s) {
  const productRef = doc(db, "products", s.id);
  await updateDoc(productRef, s);
}
async function deleteBackendProduct(p) {
  await deleteDoc(doc(db, "products", p.id));
}

export {
  getProductFromBackend,
  addProductToBackend,
  updateBackendProduct,
  deleteBackendProduct,
};
