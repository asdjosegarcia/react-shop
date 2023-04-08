import React from 'react';
import '../styles/OrderItem.scss';

import close from '@icons/icon_close.png'

const OrderItem = ({product}) => {//traemos el producto desde el map que crea estos componentes
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[0]} alt={product.title} />{/* imagen del producto */}
			</figure>
			<p>{product.title}</p>{/* titulo del producto */}
			<p>{product.price}</p>{/* precio del producto */}
			<img src={close} alt="close" />
		</div>
	);
}

export default OrderItem;
