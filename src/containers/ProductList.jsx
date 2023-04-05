import React,{useEffect,useState} from 'react';//useEffect nos permite hacer llamados a nuestra API y transmitirlo a nuestro componente
import ProductItem from '../components/ProductItem';
import '../styles/ProductList.scss';
import axios from 'axios'; //importamos a axios


const API= 'https://api.escuelajs.co/api/v1/products'

const ProductList = () => {
	const [products,setProducts]=useState([])
	useEffect(async()=>{
		const response=await axios(API)//pedimos los datos a la api
		setProducts(response.data)
	},[])

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					<ProductItem />
				))}
			</div>
		</section>
	);
}

export default ProductList;
