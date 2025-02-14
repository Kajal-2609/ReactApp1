import "./App.css";
import Fruits from "./Fruits";

export default function Ass59() {
  let fruits = [
    {
      name: "Mango",
      image: "mango.jpg",
      unit: "doz",
      mrp: 500,
      discount: 8,
      inStock: true,
    },
    {
      name: "Papaya",
      image: "papaya.jpg",
      unit: "kg",
      mrp: 80,
      discount: 0,
      inStock: false,
    },
  ];

  return (
    <>
      {fruits.map((e, index) => (
        <Fruits f={e} key={index} />
      ))}
    </>
  );
}
