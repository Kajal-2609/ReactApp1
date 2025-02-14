import "./App.css";

export default function Fruits(props) {
  let { f } = props;
  

  return (
    <>
    <div>
      className={`text-center m-3 w-50 p-3 mx-auto `}
      </div>
      <div>
        <img src={"/img/" + f.image} alt="" />
      </div>
      <h1>
        {f.name}-{f.discount > 0 ? "-(" + f.discount + "%)" : ""}
      </h1>
      {f.discount > 0 && <h3>Rs.{f.mrp}</h3>}
      {f.discount > 0 && (
        <h3>
          {""}
          Rs.<span className="text-dexoration-line-through"> {f.mrp}</span>
          {""}
        </h3>
      )}
      {f.instock&&(<div className="text-center">
        <button className="btn btn-primary">Add to Cart</button>
      </div>)}
      {f.instock==false&&(<div className="text-center">
        <button className="btn btn-secondary">out of stock</button>
      </div>)}
      <div className="text-center">
        <button className={"btn "+(f.inStock?"btn-primary":"btn-secondary")}
        >
        {f.instock?"Add to Cart":"out of stock"}
        </button>
      </div>
      
      
      
      
    </>
  );
}