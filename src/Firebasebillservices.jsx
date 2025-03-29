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



async function importBackendDataToBill(id) {
  const docSnap = await getDoc(doc(db, "Bills", id));
  if (docSnap.exists()) {
    console.log(docSnap.data());
    return docSnap.data();
  } else {
    return null;
  }
}
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
async function addBillsToBackend(BillObj) {
  const docRef = await addDoc(collection(db, "Bills"), BillObj);
  console.log("Document written with ID: ", docRef.id);
  BillObj.id=docRef.id;
  return BillObj;
}
async function updateBackendBills(s) {
    const productRef = doc(db, "lastbillnumber", s.id);
    await updateDoc(productRef, s);
  }
export { getBillsFromBackend, addBillsToBackend ,updateBackendBills,importBackendDataToBill};
