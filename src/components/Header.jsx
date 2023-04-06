import React, { useState,useContext } from "react"; //traemos el use state
import "@styles/Header.scss"; //@styles, gracias a que webpack le dice donde esta la carpeta styles
import Menu from "@components/Menu";
import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from '../context/AppContext' //importamos el contexto
import shoppingCart from "@icons/icon_shopping_cart.svg";



const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {state} =useContext(AppContext);//importamos el estado "state" de nuestro custom hook mediante context
  const handleToggle = () => {
    setToggle(!toggle); //si es true pasa a false
  };
  return (
    <nav>
      <img src={menuIcon} alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Clothes</a>
          </li>
          <li>
            <a href="/">Electronics</a>
          </li>
          <li>
            <a href="/">Furnitures</a>
          </li>
          <li>
            <a href="/">Toys</a>
          </li>
          <li>
            <a href="/">Others</a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li className="navbar-shopping-cart">
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null }{/* si  el carrito tiene algo renderiza, de lo contrario pues no */}
          </li>
        </ul>
      </div>
	  {toggle && <Menu/>}{/* si toglle es true muestra la linea de codigo */}
    </nav>
  );
};

export default Header;
