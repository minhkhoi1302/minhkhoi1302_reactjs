import { useState } from "react";
function Product(props){
    const item = props.item;
    const [count,setCount] = useState(0);
    return (
        <div className="col-4">
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <p>{item.qty > 0 ? "In stock": "Out of stock"}</p>
            <h2>Count: {count}</h2>
        </div>
    );
}
export default Product;