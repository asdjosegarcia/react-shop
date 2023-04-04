import React, { useState } from "react"; //importamos el hook use state
/* import React from "react"; */
import "../styles/ProductItem.scss";
import addToCard from "@icons/bt_add_to_cart.svg";

const ProductItem = () => {
  const [cart, setCart] = useState("");

  const handleClick = () => {
    //funcion que cambia el estado cart
    setCart([]);
  };

  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="product-info">
        <div>
          <p>$120,00</p>
          <p>Bike</p>
        </div>
        <figure onClick={handleClick}>
          {/* llamamos a la funcion que cambia el estado  cart */}
          <img src={addToCard} alt="" />
        </figure>
        
      </div>
    </div>
  );
};

export default ProductItem;
