import React,{useContext} from 'react';//llamamos a rect context
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext'; //llamamos a nuestro context
import '../styles/MyOrder.scss';
import arrow from '@icons/flechita.svg'


const MyOrder = () => {
	const {state}=useContext(AppContext);//traemos el estado de nuestro contexto
	const sumTotal=()=>{
		const reducer=(accumulator,currentValue)=> accumulator+currentValue.price;//acumulator suma total, current value valor actual
		const sum=state.cart.reduce(reducer,0)
		//state.cart entrega los valores
		//.reduce() recive como parametro "reducer"(arrow function que suma 2 numeros) y 0 por que es el numero del elemento y objeto dentro del cada array
		//se recive una funcion que entrega el valor de la suma, y se vuelve a sumar con el elemento 0 del array, y asi...
		return sum;
	}

	return (
		<aside className="MyOrder">
			<div className="title-container">
				<img src={arrow} alt="arrow" />
				<p className="title">My order</p>
			</div>
			<div className="my-order-content">
				{state.cart.map(product=>( //va a crear un <OrderItem> por cada producto que tenga state.cart
					<OrderItem product={product} key={`orderItem-${product.id}`}/>//se le asigna un valor distinto a product id para que no se mezcle
				))}
				<div className="order">
					<p>
						<span>Total</span>
					</p>
					<p> ${sumTotal()}</p>
				</div>
				<button className="primary-button">
					Checkout
				</button>
			</div>
		</aside>
	);
}

export default MyOrder;
