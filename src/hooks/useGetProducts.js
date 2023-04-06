import { useEffect,useState } from "react";
import axios from 'axios';

const useGetProducts=(API)=>{
    const [products,setProducts]=useState([])
	useEffect(async()=>{
		const response=await axios(API)//pedimos los datos a la api
		setProducts(response.data)
	},[]);
    return products;//la funcuon retorna los productos
}

export default useGetProducts //exporamos nuestro customHook