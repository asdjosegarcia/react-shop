import React,{useContext,useState} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';

import close from '@icons/icon_close.png'

const OrderItem = ({product}) => {//traemos el producto desde el map que crea estos componentes
	const {productCounter,sameProductsCalc,state,removeGroupCart}=useContext(AppContext)
	let inputAmount=1

	const handleRemove=product=>{ //llama a la funcion removeGroupCart de useInitialState.js para eliminar el producto
		removeGroupCart(product)
	}
	const productCount = (event,product) => {//funcion ejecutada al escribir en el input
		inputAmount=event.target.value //variable que almacena la cantidad de x producto
		/* onchange nos entrega un evento con muuuucha informacion, event.target.value es el valor de lo que se esctibe en el input */
		productCounter(inputAmount,product)//esta funcion que trajimos desde app.js, cambia el valor del estado,
	}
	const productsPrice=((sameProductsCalc(product,state)).length*product.price)*inputAmount//calcula el precio de un grupo de productos iguales, cantidad de productos*precio*valor del input

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />{/* imagen del producto */}
			</figure>
			<p className='product-title'>{product.title}</p>{/* titulo del producto */}
			<p className='product-price'>${productsPrice}</p>{/* precio del producto */}
			<input className='product-input' type='Number' min="1" defaultValue={(sameProductsCalc(product,state)).length} onChange={()=>productCount(event,product)}></input>
			<img className='close-img' src={close} alt="close" onClick={()=>handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
