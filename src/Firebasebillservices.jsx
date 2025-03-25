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

async function getBillsFromBackend() {
  const response = await getDocs(collection(db, "lastbillnumber"));
  let list = [];
  response.forEach((doc) => {
    let obj = { ...doc.data() };
    obj.id = doc.id;
    list.push(obj);
  });
  return list[0];
}
async function addBillsToBackend(s) {
  const docRef = await addDoc(collection(db, "Bills"), s);
  console.log("Document written with ID: ", docRef.id);
}
async function updateBackendBills(s) {
    const productRef = doc(db, "lastbillnumber", s.id);
    await updateDoc(productRef, s);
  }
export { getBillsFromBackend, addBillsToBackend ,updateBackendBills};
