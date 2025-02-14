import React from "react";
export default function places(){
const Places = (props) => {
  let { place } = props;
  return (
    <div className=" col-3 myb ">
      <div className="name text-center text-danger p-3  ">{place.name}</div>
      <div className=" image ">
        <img className="img-fluid p-3 " src={"/images/" + place.image} alt="" />
      </div>
      <div className=" info text-black  p-3 ">{place.info}</div>
    </div>
  );
};
}
