import React,{useContext} from 'react';
import AppContext from '../context/AppContext';
import '../styles/OrderItem.scss';

import close from '@icons/icon_close.png'

const OrderItem = ({product}) => {//traemos el producto desde el map que crea estos componentes
	const {removeFromCart}=useContext(AppContext)

	const handleRemove=product=>{
		removeFromCart(product)
	}

	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />{/* imagen del producto */}
			</figure>
			<p>{product.title}</p>{/* titulo del producto */}
			<p>{product.price}</p>{/* precio del producto */}
			<img src={close} alt="close" onClick={handleRemove(product)} />
		</div>
	);
}

export default OrderItem;
