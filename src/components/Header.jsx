import React, { useState, useContext } from "react"; //traemos el use state
import "@styles/Header.scss"; //@styles, gracias a que webpack le dice donde esta la carpeta styles
import Menu from "@components/Menu";
import MobileMenu from "@components/MobileMenu";
import MyOrder from "../containers/MyOrder"; //importamos el componente my order
import menuIcon from "@icons/icon_menu.svg";
import logo from "@logos/logo_yard_sale.svg";
import AppContext from "../context/AppContext"; //importamos el contexto
import shoppingCart from "@icons/icon_shopping_cart.svg";

const Header = () => {
  const [toggle, setToggle] = useState(false); //togle de menu de cuentas (email)
  const [toggleOrders, setToggleOrders] = useState(false); //togle del carrito de compras (myorder)
  const [mobileMenuToggle, setMobileMenuToggle] = useState(false);
  const { state } = useContext(AppContext); //importamos el estado "state" de nuestro custom hook mediante context
  const handleToggle = () => {
    setToggleOrders(false);
    setToggle(!toggle); //si es true pasa a false
  };
  const handleMobileMenuToggle = () => {
    setMobileMenuToggle(!mobileMenuToggle);
  };
  return (
    <nav>
      <img
        src={menuIcon}
        alt="menu"
        onClick={handleMobileMenuToggle}
        className="menu"
      />
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
        <ul className="navbar-right_ul">
          <li className="navbar-email" onClick={handleToggle}>
            platzi@example.com
          </li>
          <li //li del carrito
            className="navbar-shopping-cart"
            onClick={() => {
              setToggleOrders(!toggleOrders), setToggle(false);
            }} //al hacer click establece un valor contrario a el actual
          >
            <img src={shoppingCart} alt="shopping cart" />
            {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            {/* si  el carrito tiene algo renderiza, de lo contrario pues no */}
          </li>
        </ul>
      </div>
      {toggle && <Menu />}
      {/* si toglle es true muestra la linea de codigo(el componente) */}
      {toggleOrders && (
        <MyOrder
        toggleOrders={toggleOrders}
        setToggleOrders={setToggleOrders}
        />
        )}
        {mobileMenuToggle && <MobileMenu />}
    </nav>
  );
};

export default Header;
