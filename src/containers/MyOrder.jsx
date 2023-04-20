import React, { useContext,useState } from "react"; //llamamos a rect context
import OrderItem from "../components/OrderItem";
import AppContext from "../context/AppContext"; //llamamos a nuestro context
import "../styles/MyOrder.scss";
import arrow from "@icons/flechita.svg";

const MyOrder = (props) => {
  const { state, } = useContext(AppContext); //traemos el estado de nuestro contexto
  /* const [myOrderToggle, setMyOrderToggle]=useState(false); */

  const sumTotal = () => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price; //acumulator suma total, current value valor actual
    const sum = state.cart.reduce(reducer, 0);
    //state.cart entrega los valores
    //.reduce() recive como parametro "reducer"(arrow function que suma 2 numeros) y 0 por que es el numero del elemento y objeto dentro del cada array
    //se recive una funcion que entrega el valor de la suma, y se vuelve a sumar con el elemento 0 del array, y asi...
    return sum;
  };

  return (
    <aside className="MyOrder">
      <div className="relative-container">
        <div className="title-container">
          <img src={arrow} alt="arrow" 
          onClick={()=>{props.setToggleOrders((!props.toggleOrders))}}
          />
          <p className="title">My order</p>
        </div>
        <div className="my-order-content">
          {state.cart.map((product)=> (product.repeatedTimes>0)?null: <OrderItem product={product} key={`orderItem-${product.id}-${product.repeatedTimes}`} />)}
          {/* solo va a renderizar los items que no esten repetidos */}
          {/*  ( arrow function anterior para renderizado
              product //va a crear un <OrderItem> por cada producto que tenga state.cart
            ) => (
              <OrderItem product={product} key={`orderItem-${product.id}-${product.repeatedTimes}`} /> 
              // product es lo que enviamos como parametro a el elemento oredeItem para luego usar sus propiedades
              // key, es usado por react para identificar lo que renderiza. evita errores y renderizados inecesarios
            )  */}
          
        </div>
        <div className="order-trasparent">
          <p>
            <span>Total</span>
          </p>
          <p> ${sumTotal()}</p>

          <button className="primary-button">Checkout</button>
        </div>
      </div>
    </aside>
  );
};

export default MyOrder;
