import React, { useContext } from "react"; //importamos el hook useContext
import AppContext from "../context/AppContext"; //importamos el contexto para poder usar el customHook
import "../styles/ProductItem.scss";
import addToCartImage from "@icons/bt_add_to_cart.svg";

const ProductItem = ({product}) => {//funcion del componente
  const  {addToCart}=useContext(AppContext);
  //addToCart funcion a la que llamamos 
  //useContext nos permite usar el contexto de AppContext.js
  //con el contexto que creamos mediante "createContex" en AppContext.js

  const handleClick = item => {//andleClick envia la variable item 
    //funcion que cambia el estado cart
    addToCart(item);//item se almacena gracias a la funcion addTocart 
  };

  return (
    <div className="ProductItem">
      <img
        src={product.images[0]} //imagen 0 que nos da la api
        alt={product.title}//titulo de la imagen de la api
      />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={()=>handleClick(product)}>
          {/* llamamos a la funcion que cambia el estado  cart */}
          <img src={addToCartImage} alt="" />
        </figure>
        
      </div>
    </div>
  );
};

export default ProductItem;
