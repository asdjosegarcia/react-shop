import React from 'react';
import ProductItem from '../components/ProductItem';
import useGetProducts from '../hooks/useGetProducts'; //tramos nuestro customhook 
import '../styles/ProductList.scss';



const API= 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const products =useGetProducts(API);//products va a almacenar lo que netrega el customhook useGetProducts


	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>( //por cada producto que recivimos de la api se renderiza un <product Item>
					<ProductItem product={product} key={product.id} /> //key para que react identifique cada producto, product.id por que la API nos da una id para cada producto
					))}
			</div>
		</section>
	);
}

export default ProductList;

/* 	useEffect(() => {
		getData();
		}, []);
		
		const getData = async () => {
		const response = await axios.get(API);
		setProducts(response.data);
		console.log(response);
		}; */