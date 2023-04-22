import React, { useContext } from "react"; //importamos el hook useContext
import AppContext from "../context/AppContext"; //importamos el contexto para poder usar el customHook
import "../styles/ProductItem.scss";
import addToCartImage from "@icons/bt_add_to_cart.svg";
import addedToCartImage from "@icons/bt_added_to_cart.svg"

const ProductItem = ({product}) => {//funcion del componente
  const  {addToCart,removeFromCart,sameProductsCalc,state,removeGroupCart}=useContext(AppContext);
  //addToCart funcion a la que llamamos 
  //useContext nos permite usar el contexto de AppContext.js
  //con el contexto que creamos mediante "createContex" en AppContext.js

  const handleClick = (item) => {//andleClick funcion que recive item al hacer click
    //funcion que cambia el estado cart
    if(sameProductsCalc(item,state).length==0){ //si la cantidad de ese producto es igual a 0 agrega uno
			addToCart(item)//agrega el producto
		}else{
      removeGroupCart(item) //remueve todos los productos del mismo tipo que item
		}
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
          {(sameProductsCalc(product,state).length==0) ? <img src={addToCartImage}className="addToCartImage" alt="" /> : <img src={addedToCartImage} className="addedToCartImage"alt="" />}
          {/* si el producto esta en el carrito se añade una imagen y si no esta se añade la otra  */}
        </figure>
        
      </div>
    </div>
  );
};

export default ProductItem;
