// el proposito de este hook es que agregemos a el carrito y se ejecute esta accion
import { useState } from "react";

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);//initial state es solo un [] vacio
    const addToCart = (payload) => {//payload serian los nuevos productos
        setState({
            ...state,//el estado state va a mantener los  valores de state
            cart: [...state.cart, payload]
        });

    };

    const removeFromCart = (payload) => {
        setState({//establecemos como nuevo estado un objeto
            ...state,//utilizamos el spread operator para tener los valores anteriores
            cart: state.cart.filter(items => items.id !== payload.id),//cart propiedad del objeto que va a almacenar los items que no sean iguales
        })
    }
    return {
        state,//retornamos el estado
        addToCart,//y la funcion para añadir a el carro
        removeFromCart
    }
}

export default useInitialState;//exportamos una funcion que retorna el estado y una funcion para agregar cosas a el carro


