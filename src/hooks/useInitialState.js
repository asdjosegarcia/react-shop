// el proposito de este hook es que agregemos a el carrito y se ejecute esta accion
import { useState } from "react";

const initialState={
    cart:[],
}

const useInitialState=()=>{
    const [state,setState]=useState(initialState);//initial state es solo un [] vacio
    const addToCart =(payload)=>{//payload serian los nuevos productos
        setState({
            /* ...state, *///el estado state va a mantener los  valores de state
            cart:[...state.cart,payload]
        });
    };
    console.log(state);
    return{
        state,//retornamos el estado
        addToCart//y la funcion para añadir a el carro
    }   
}

export default useInitialState;//exportamos una funcion que retorna el estado y una funcion para agregar cosas a el carro


